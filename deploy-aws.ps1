param (
  [string]$Region = "us-east-1",
  [string]$S3Bucket = "blog-principal-equipo-us-east-1"
)

$ErrorActionPreference = "Stop"
$aws = "C:\Program Files\Amazon\AWSCLIV2\aws.exe"

Write-Host "=== 1. Verificando o Creando Tabla DynamoDB: CoffeeTalk_Reviews ===" -ForegroundColor Cyan
try {
  & $aws dynamodb describe-table --table-name CoffeeTalk_Reviews --region $Region 2>$null
  Write-Host "La tabla CoffeeTalk_Reviews ya existe en DynamoDB." -ForegroundColor Green
} catch {
  Write-Host "Creando tabla CoffeeTalk_Reviews..." -ForegroundColor Yellow
  & $aws dynamodb create-table `
    --table-name CoffeeTalk_Reviews `
    --attribute-definitions AttributeName=id,AttributeType=S `
    --key-schema AttributeName=id,KeyType=HASH `
    --billing-mode PAY_PER_REQUEST `
    --region $Region
  Write-Host "Esperando a que la tabla este activa..." -ForegroundColor Gray
  & $aws dynamodb wait table-exists --table-name CoffeeTalk_Reviews --region $Region
  Write-Host "Tabla DynamoDB activa." -ForegroundColor Green
}

Write-Host "`n=== 2. Configurando Rol IAM para AWS Lambda ===" -ForegroundColor Cyan
$roleName = "CoffeeTalk_Lambda_Role"
$trustPolicy = '{"Version":"2012-10-17","Statement":[{"Effect":"Allow","Principal":{"Service":"lambda.amazonaws.com"},"Action":"sts:AssumeRole"}]}'
Set-Content -Path "trust-policy.json" -Value $trustPolicy -Encoding ASCII

try {
  & $aws iam get-role --role-name $roleName 2>$null
  Write-Host "Rol IAM $roleName ya existe." -ForegroundColor Green
} catch {
  Write-Host "Creando rol IAM $roleName..." -ForegroundColor Yellow
  & $aws iam create-role --role-name $roleName --assume-role-policy-document file://trust-policy.json
  Start-Sleep -Seconds 4
}
if (Test-Path "trust-policy.json") { Remove-Item "trust-policy.json" -Force }

& $aws iam attach-role-policy --role-name $roleName --policy-arn "arn:aws:iam::aws:policy/AmazonDynamoDBFullAccess" 2>$null
& $aws iam attach-role-policy --role-name $roleName --policy-arn "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole" 2>$null

$roleArn = (& $aws iam get-role --role-name $roleName --query "Role.Arn" --output text).Trim()
Write-Host "Rol ARN: $roleArn" -ForegroundColor Gray
Write-Host "Esperando propagacion en IAM (10 segundos)..." -ForegroundColor Gray
Start-Sleep -Seconds 10

Write-Host "`n=== 3. Empaquetando y Desplegando Funcion Lambda ===" -ForegroundColor Cyan
$lambdaCode = @'
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, ScanCommand, PutCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);
const TABLE_NAME = "CoffeeTalk_Reviews";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
  "Content-Type": "application/json"
};

export const handler = async (event) => {
  const method = event.requestContext?.http?.method || event.httpMethod;

  if (method === "OPTIONS") {
    return { statusCode: 200, headers: corsHeaders, body: "" };
  }

  try {
    if (method === "GET") {
      const command = new ScanCommand({ TableName: TABLE_NAME });
      const response = await docClient.send(command);
      return {
        statusCode: 200,
        headers: corsHeaders,
        body: JSON.stringify(response.Items || [])
      };
    }

    if (method === "POST") {
      const data = typeof event.body === "string" ? JSON.parse(event.body) : event.body;
      const item = {
        id: data.id || `rev-${Date.now()}`,
        cafeName: data.cafeName || "Cafetería Local",
        location: data.location || "Ciudad de México",
        category: data.category || "Especialidad",
        rating: Number(data.rating) || 5,
        title: data.title || "Excelente experiencia cafetera",
        content: data.content || "",
        author: data.author || "Aficionado al Café",
        authorHandle: data.authorHandle || "@coffeelover",
        authorAvatar: data.authorAvatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
        date: data.date || "Recién publicado",
        imageUrl: data.imageUrl || "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
        amenities: Array.isArray(data.amenities) ? data.amenities : ["Café de Especialidad"],
        createdAt: Date.now()
      };

      await docClient.send(new PutCommand({ TableName: TABLE_NAME, Item: item }));

      return {
        statusCode: 201,
        headers: corsHeaders,
        body: JSON.stringify({ message: "Reseña guardada con éxito en DynamoDB", item })
      };
    }

    return {
      statusCode: 405,
      headers: corsHeaders,
      body: JSON.stringify({ error: "Method not allowed" })
    };
  } catch (error) {
    console.error("Error en Lambda:", error);
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({ error: error.message })
    };
  }
};
'@

Set-Content -Path "index.mjs" -Value $lambdaCode -Encoding UTF8
if (Test-Path "lambda.zip") { Remove-Item "lambda.zip" -Force }
Compress-Archive -Path "index.mjs" -DestinationPath "lambda.zip"
Remove-Item "index.mjs" -Force

$functionName = "CoffeeTalk_Reviews_API"
try {
  & $aws lambda get-function --function-name $functionName --region $Region 2>$null
  Write-Host "Actualizando codigo de Lambda existente..." -ForegroundColor Yellow
  & $aws lambda update-function-code `
    --function-name $functionName `
    --zip-file fileb://lambda.zip `
    --region $Region
} catch {
  Write-Host "Creando nueva funcion Lambda..." -ForegroundColor Yellow
  & $aws lambda create-function `
    --function-name $functionName `
    --runtime nodejs20.x `
    --role $roleArn `
    --handler index.handler `
    --zip-file fileb://lambda.zip `
    --region $Region
}

Write-Host "Esperando estabilizacion de la funcion Lambda..." -ForegroundColor Gray
Start-Sleep -Seconds 5

Write-Host "`n=== 4. Configurando Function URL con CORS ===" -ForegroundColor Cyan
$funcUrl = ""
$corsConfig = '{"AllowOrigins":["*"],"AllowMethods":["GET","POST","OPTIONS"],"AllowHeaders":["content-type"]}'
Set-Content -Path "cors-config.json" -Value $corsConfig -Encoding ASCII
try {
  $urlOutput = & $aws lambda create-function-url-config `
    --function-name $functionName `
    --auth-type NONE `
    --cors file://cors-config.json `
    --region $Region | ConvertFrom-Json
  $funcUrl = $urlOutput.FunctionUrl
  Write-Host "Function URL creada: $funcUrl" -ForegroundColor Green
} catch {
  $urlOutput = & $aws lambda get-function-url-config --function-name $functionName --region $Region | ConvertFrom-Json
  $funcUrl = $urlOutput.FunctionUrl
  Write-Host "Function URL obtenida: $funcUrl" -ForegroundColor Green
}
if (Test-Path "cors-config.json") { Remove-Item "cors-config.json" -Force }

try {
  & $aws lambda add-permission `
    --function-name $functionName `
    --statement-id FunctionURLAllowPublicAccess `
    --action lambda:InvokeFunctionUrl `
    --principal "*" `
    --function-url-auth-type NONE `
    --region $Region 2>$null
} catch {}

Write-Host "`n=== 5. Inyectando URL en app.js ===" -ForegroundColor Cyan
$appJsContent = Get-Content "app.js" -Raw
$appJsContent = $appJsContent -replace 'apiUrl:\s*""', "apiUrl: `"$funcUrl`""
Set-Content -Path "app.js" -Value $appJsContent -Encoding UTF8
Write-Host "app.js actualizado con: $funcUrl" -ForegroundColor Green

if ($S3Bucket) {
  Write-Host "`n=== 6. Desplegando archivos actualizados en S3 ($S3Bucket) ===" -ForegroundColor Cyan
  try {
    & $aws s3 sync . "s3://$S3Bucket/" --exclude ".git/*" --exclude "deploy-aws.ps1" --exclude "lambda.zip" --region $Region
    Write-Host "Sitio web sincronizado en S3 exitosamente!" -ForegroundColor Green
  } catch {
    Write-Host "Aviso: No se pudo sincronizar directamente con el bucket $S3Bucket (verifica el nombre)." -ForegroundColor Yellow
  }
}

if (Test-Path "lambda.zip") { Remove-Item "lambda.zip" -Force }

Write-Host "`n========================================================" -ForegroundColor Magenta
Write-Host " ¡DESPLIEGUE EXITOSO EN AWS (COSTO $0 - FREE TIER)! " -ForegroundColor Magenta
Write-Host " URL de la API: $funcUrl" -ForegroundColor White
Write-Host "========================================================" -ForegroundColor Magenta
