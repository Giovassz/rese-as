/**
 * COFFEETALK (RUTA DEL CAFÉ) - CORE APPLICATION JAVASCRIPT
 * Strictly SVG Vector Icons (No Emojis) & Professional Specialty Coffee Platform Logic
 */

// ==========================================================================
// 1. DEFAULT DATA SEEDING (Specialty Coffee Shops & Reviews)
// ==========================================================================

const DEFAULT_REVIEWS = [
  {
    id: "rev-1",
    cafeName: "Café Alquimia Roasters",
    location: "Roma Norte, Ciudad de México",
    category: "Especialidad",
    rating: 5,
    title: "Flat White con perfil de tueste impecable",
    content: "Espacio de tostado artesanal a la vista. El Flat White elaborado con granos proceso honey de Pluma Hidalgo, Oaxaca, destaca por una textura cremosa de microespuma y un balance floral exquisito.",
    author: "Sofía Martínez",
    authorHandle: "@coffeelover_merida",
    authorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    date: "Hace 2 días",
    imageUrl: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
    amenities: ["WiFi Rápido", "Pet Friendly", "Enchufes", "V60 / Chemex", "Tostaduría"]
  },
  {
    id: "rev-2",
    cafeName: "Espresso & Cowork Studio",
    location: "Chapultepec, Guadalajara",
    category: "Coworking",
    rating: 4.8,
    title: "Espacio óptimo para productividad y café de origen",
    content: "Conexión simétrica de 200 Mbps y estaciones ergonómicas. Su Cold Brew con infusión de nitrógeno ofrece un cuerpo sedoso y notas a cacao tostado, ideal para sesiones largas de trabajo.",
    author: "Carlos Mendoza",
    authorHandle: "@carlos_tech_coffee",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    date: "Hace 4 días",
    imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
    amenities: ["WiFi 200Mbps", "Enchufes en cada mesa", "Opciones Veganas", "Ambiente Silencioso"]
  },
  {
    id: "rev-3",
    cafeName: "Borola Barra Artesanal",
    location: "Coyoacán, Ciudad de México",
    category: "Métodos de Extracción",
    rating: 5,
    title: "Cátedra sensorial en Sifón Japonés y V60",
    content: "Extracción lenta en Sifón con varietal Geisha de Chiapas. Una taza cristalina con acidez brillante, notas florales a jazmín y durazno blanco. Entorno de casona colonial con acústica serena.",
    author: "Elena Rostand",
    authorHandle: "@elena_sensorial",
    authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    date: "Hace 1 semana",
    imageUrl: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80",
    amenities: ["Pet Friendly", "Sifón Japonés", "Chemex", "Terraza Arbolada"]
  },
  {
    id: "rev-4",
    cafeName: "Velvet Espresso Bar",
    location: "San Pedro, Monterrey",
    category: "Espresso Bars",
    rating: 4.9,
    title: "La Marzocco Strada y un Cortado celestial",
    content: "Espresso calibrado con crema elástica y retrogusto a chocolate amargo y almendra tostada. Acompañado de repostería fina de pistache. Atención técnica de baristas certificados.",
    author: "Diego Beltrán",
    authorHandle: "@diego_espresso",
    authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    date: "Hace 1 semana",
    imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    amenities: ["Espresso Bar", "Repostería Fina", "Acepta Tarjeta", "Climatizado"]
  },
  {
    id: "rev-5",
    cafeName: "Miga & Grano Panadería Cafetera",
    location: "Condesa, Ciudad de México",
    category: "Repostería",
    rating: 4.7,
    title: "Croissants de fermentación lenta y café de altura",
    content: "Panificación artesanal con masa madre horneada al amanecer junto a un latte servido a temperatura óptima de emulsión (65°C). Ambiente luminoso y arbolado.",
    author: "Valentina Ríos",
    authorHandle: "@valen_cafecito",
    authorAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    date: "Hace 2 semanas",
    imageUrl: "https://images.unsplash.com/photo-1481833761820-0509d32170dd?auto=format&fit=crop&w=800&q=80",
    amenities: ["Pet Friendly", "Opciones Veganas", "Panadería Artesanal", "Terraza"]
  },
  {
    id: "rev-6",
    cafeName: "Tostaduría Niebla Alta",
    location: "Coatepec, Veracruz",
    category: "Especialidad",
    rating: 5,
    title: "Tostado fresco de origen al pie de la montaña",
    content: "Café con denominación de origen Coatepec. Tueste medio recién empacado y cold brew con notas a naranja confitada y panela. Venta en grano entero o molienda según método.",
    author: "Sofía Martínez",
    authorHandle: "@coffeelover_merida",
    authorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    date: "Hace 3 semanas",
    imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    amenities: ["Venta en Grano", "Catas Guiadas", "Pet Friendly", "V60 / Chemex"]
  }
];

const DEFAULT_CAFES = [
  {
    id: "cafe-1",
    name: "Café Alquimia Roasters",
    zone: "Roma Norte, CDMX",
    address: "Calle Colima 184, Roma Norte",
    schedule: "Abierto ahora · 8:00 AM - 10:00 PM",
    isOpen: true,
    category: "Especialidad",
    rating: 4.9,
    reviewsCount: 142,
    priceRange: "$$",
    imageUrl: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
    services: ["WiFi 150 Mbps", "Pet Friendly", "Enchufes", "V60 / Chemex", "Tostaduría"],
    description: "Tostadora artesanal de micro-lotes de Oaxaca, Veracruz y Chiapas. Barra de extracción manual con baristas certificados.",
    menuHighlights: [
      { name: "Flat White Pluma Hidalgo", price: "$75 MXN" },
      { name: "V60 Geisha Lavado", price: "$95 MXN" },
      { name: "Cold Brew Tonic Cítrico", price: "$80 MXN" },
      { name: "Babka de Chocolate y Cardamomo", price: "$65 MXN" }
    ]
  },
  {
    id: "cafe-2",
    name: "Espresso & Cowork Studio",
    zone: "Chapultepec, Guadalajara",
    address: "Av. Chapultepec Sur 312, Americana",
    schedule: "Abierto ahora · 7:30 AM - 9:30 PM",
    isOpen: true,
    category: "Coworking",
    rating: 4.8,
    reviewsCount: 98,
    priceRange: "$$",
    imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
    services: ["WiFi 200 Mbps", "Enchufes Dedicados", "Opciones Veganas", "Cabinas Zoom"],
    description: "Espacio ideado para profesionales remotos y apasionados del café de especialidad con suscripción de filtro continuo.",
    menuHighlights: [
      { name: "Nitro Cold Brew", price: "$85 MXN" },
      { name: "Americano Doble Shot", price: "$55 MXN" },
      { name: "Avocado Toast Pan Sourdough", price: "$110 MXN" },
      { name: "Latte Lavanda con Avena", price: "$85 MXN" }
    ]
  },
  {
    id: "cafe-3",
    name: "Borola Barra Artesanal",
    zone: "Coyoacán, CDMX",
    address: "Plaza Hidalgo 8, Coyoacán Centro",
    schedule: "Cerrado · Abre mañana 8:00 AM",
    isOpen: false,
    category: "Tradicional",
    rating: 5.0,
    reviewsCount: 210,
    priceRange: "$$$",
    imageUrl: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80",
    services: ["Sifón Japonés", "Chemex", "Pet Friendly", "Terraza Arbolada"],
    description: "Laboratorio de métodos de infusión lenta en una casona colonial con patio ajardinado.",
    menuHighlights: [
      { name: "Sifón de Finca El Fénix", price: "$105 MXN" },
      { name: "Aeropress Red Honey", price: "$85 MXN" },
      { name: "Affogato Vainilla de Papantla", price: "$90 MXN" },
      { name: "Tarta de Higo y Almendras", price: "$85 MXN" }
    ]
  },
  {
    id: "cafe-4",
    name: "Velvet Espresso Bar",
    zone: "San Pedro, Monterrey",
    address: "Río Mississippi 240, Del Valle",
    schedule: "Abierto ahora · 8:00 AM - 8:00 PM",
    isOpen: true,
    category: "Espresso Bars",
    rating: 4.9,
    reviewsCount: 88,
    priceRange: "$$$",
    imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    services: ["Espresso Bar", "Repostería Fina", "Acepta Tarjeta", "Valet"],
    description: "Barra contemporánea con tecnología La Marzocco Strada y perfiles de tueste claro estilo escandinavo.",
    menuHighlights: [
      { name: "Cortado Doble Ristretto", price: "$70 MXN" },
      { name: "Espresso Macchiato", price: "$65 MXN" },
      { name: "Alfajor de Pistache y Flor de Sal", price: "$55 MXN" },
      { name: "Matcha Latte Ceremonial", price: "$95 MXN" }
    ]
  },
  {
    id: "cafe-5",
    name: "Miga & Grano Panadería Cafetera",
    zone: "Condesa, CDMX",
    address: "Av. Ámsterdam 145, Hipódromo Condesa",
    schedule: "Abierto ahora · 7:00 AM - 7:00 PM",
    isOpen: true,
    category: "Repostería",
    rating: 4.7,
    reviewsCount: 165,
    priceRange: "$$",
    imageUrl: "https://images.unsplash.com/photo-1481833761820-0509d32170dd?auto=format&fit=crop&w=800&q=80",
    services: ["Panadería Artesanal", "Pet Friendly", "Opciones Veganas", "Bicicletero"],
    description: "Fermentación natural de masa madre, pastelería clásica europea y café de finca única.",
    menuHighlights: [
      { name: "Croissant de Almendras", price: "$65 MXN" },
      { name: "Capuchino Canela de Ceilán", price: "$70 MXN" },
      { name: "Cold Brew de la Casa", price: "$75 MXN" }
    ]
  },
  {
    id: "cafe-6",
    name: "Tostaduría Niebla Alta",
    zone: "Coatepec, Veracruz",
    address: "Calle Juárez 42, Coatepec Centro",
    schedule: "Abierto ahora · 9:00 AM - 9:00 PM",
    isOpen: true,
    category: "Especialidad",
    rating: 5.0,
    reviewsCount: 76,
    priceRange: "$$",
    imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    services: ["Venta en Grano", "Catas Guiadas", "Pet Friendly", "V60 / Chemex"],
    description: "Finca y tostador con más de 40 años en la región cafetalera de las altas montañas veracruzanas.",
    menuHighlights: [
      { name: "Drip Coffee Niebla Alta", price: "$50 MXN" },
      { name: "Degustación de 3 Varietales", price: "$140 MXN" },
      { name: "Bolsa de Café en Grano 250g", price: "$190 MXN" }
    ]
  }
];

// ==========================================================================
// 2. STORAGE CONTROLLER
// ==========================================================================

const StorageService = {
  getReviews() {
    let reviews = [];
    const raw = localStorage.getItem("coffeetalk_reviews");
    if (!raw) {
      reviews = DEFAULT_REVIEWS;
      try {
        localStorage.setItem("coffeetalk_reviews", JSON.stringify(DEFAULT_REVIEWS));
      } catch (e) {}
    } else {
      try {
        reviews = JSON.parse(raw);
        if (!Array.isArray(reviews) || reviews.length === 0) {
          reviews = DEFAULT_REVIEWS;
          localStorage.setItem("coffeetalk_reviews", JSON.stringify(DEFAULT_REVIEWS));
        }
      } catch (e) {
        reviews = DEFAULT_REVIEWS;
        try {
          localStorage.setItem("coffeetalk_reviews", JSON.stringify(DEFAULT_REVIEWS));
        } catch (err) {}
      }
    }

    // Defensive normalization to prevent any crash from missing properties
    return reviews.map((r, idx) => ({
      id: r.id || "rev-" + (idx + 1) + "-" + Date.now(),
      cafeName: r.cafeName || "Cafetería Local",
      location: r.location || "Ciudad de México",
      category: r.category || "Especialidad",
      rating: typeof r.rating === "number" ? r.rating : (parseFloat(r.rating) || 5.0),
      title: r.title || "Excelente experiencia cafetera",
      content: r.content || "Sin descripción adicional.",
      author: r.author || "Aficionado al Café",
      authorHandle: r.authorHandle || "@coffeelover",
      authorAvatar: r.authorAvatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      date: r.date || "Recién publicado",
      imageUrl: r.imageUrl || "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
      amenities: Array.isArray(r.amenities) && r.amenities.length ? r.amenities : ["Café de Especialidad"]
    }));
  },

  addReview(newReview) {
    const reviews = this.getReviews();
    reviews.unshift(newReview);
    try {
      localStorage.setItem("coffeetalk_reviews", JSON.stringify(reviews));
    } catch (e) {
      console.error("Error saving review to localStorage:", e);
    }
  },

  getCafes() {
    const raw = localStorage.getItem("coffeetalk_cafes");
    if (!raw) {
      localStorage.setItem("coffeetalk_cafes", JSON.stringify(DEFAULT_CAFES));
      return DEFAULT_CAFES;
    }
    try {
      return JSON.parse(raw);
    } catch (e) {
      return DEFAULT_CAFES;
    }
  },

  getFavorites() {
    const raw = localStorage.getItem("coffeetalk_favorites");
    if (!raw) {
      const initialFavs = ["cafe-1", "cafe-3"];
      localStorage.setItem("coffeetalk_favorites", JSON.stringify(initialFavs));
      return initialFavs;
    }
    try {
      return JSON.parse(raw);
    } catch (e) {
      return [];
    }
  },

  toggleFavorite(cafeId) {
    let favs = this.getFavorites();
    const index = favs.indexOf(cafeId);
    let isAdded = false;
    if (index > -1) {
      favs.splice(index, 1);
      isAdded = false;
    } else {
      favs.push(cafeId);
      isAdded = true;
    }
    localStorage.setItem("coffeetalk_favorites", JSON.stringify(favs));
    return isAdded;
  },

  isFavorite(cafeId) {
    const favs = this.getFavorites();
    return favs.includes(cafeId);
  },

  getUserProfile() {
    const raw = localStorage.getItem("coffeetalk_user_profile");
    if (!raw) {
      const defaultUser = {
        name: "Sofía Martínez",
        handle: "@coffeelover_merida",
        level: "Barista Master Specialist",
        bio: "Catadora y entusiasta del café de especialidad. Exploradora de perfiles de tueste claro y barras con métodos artesanales V60 y Chemex.",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80",
        stats: {
          reviews: 18,
          favorites: 42,
          avgRating: "4.9"
        }
      };
      localStorage.setItem("coffeetalk_user_profile", JSON.stringify(defaultUser));
      return defaultUser;
    }
    return JSON.parse(raw);
  },

  saveUserProfile(profile) {
    localStorage.setItem("coffeetalk_user_profile", JSON.stringify(profile));
  }
};

// ==========================================================================
// 3. UI HELPERS & NOTIFICATIONS (Strict Vector SVG Icons)
// ==========================================================================

const SVG_ICONS = {
  check: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
  star: `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`,
  halfStar: `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>`,
  emptyStar: `<svg width="15" height="15" viewBox="0 0 24 24" fill="#EADBCF"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`,
  coffeeCup: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>`,
  pin: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
  heartFilled: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
  heartOutline: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
  user: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`
};

function showToast(message, customIconSvg = null) {
  let toast = document.getElementById("toast-notification");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast-notification";
    toast.className = "toast-notification";
    document.body.appendChild(toast);
  }

  const iconMarkup = customIconSvg || SVG_ICONS.check;
  toast.innerHTML = `
    <span class="toast-icon">${iconMarkup}</span>
    <span class="toast-text">${message}</span>
  `;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 4200);
}

function checkFlashToast() {
  const flash = localStorage.getItem("coffeetalk_flash_toast") || sessionStorage.getItem("coffeetalk_flash_toast");
  if (flash) {
    showToast(flash, SVG_ICONS.check);
    try {
      localStorage.removeItem("coffeetalk_flash_toast");
      sessionStorage.removeItem("coffeetalk_flash_toast");
    } catch (e) {}
  }
}

function renderStarsSVG(score) {
  const fullStars = Math.floor(score);
  const hasHalf = score % 1 >= 0.5;
  let starsHtml = "";

  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      starsHtml += SVG_ICONS.star;
    } else if (i === fullStars + 1 && hasHalf) {
      starsHtml += SVG_ICONS.halfStar;
    } else {
      starsHtml += SVG_ICONS.emptyStar;
    }
  }

  return starsHtml;
}

// ==========================================================================
// 4. SHARED APP COMPONENTS (Navigation, Trivia, Modals)
// ==========================================================================

function initNavigation() {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const mobileDrawer = document.getElementById("mobile-nav-drawer");
  const mobileOverlay = document.getElementById("mobile-nav-overlay");
  const closeDrawerBtn = document.getElementById("close-drawer-btn");

  if (!hamburgerBtn || !mobileDrawer) return;

  function toggleMenu(open) {
    if (open) {
      hamburgerBtn.classList.add("is-active");
      mobileDrawer.classList.add("open");
      if (mobileOverlay) mobileOverlay.classList.add("visible");
      document.body.style.overflow = "hidden";
    } else {
      hamburgerBtn.classList.remove("is-active");
      mobileDrawer.classList.remove("open");
      if (mobileOverlay) mobileOverlay.classList.remove("visible");
      document.body.style.overflow = "";
    }
  }

  hamburgerBtn.addEventListener("click", () => {
    const isOpen = mobileDrawer.classList.contains("open");
    toggleMenu(!isOpen);
  });

  if (mobileOverlay) {
    mobileOverlay.addEventListener("click", () => toggleMenu(false));
  }

  if (closeDrawerBtn) {
    closeDrawerBtn.addEventListener("click", () => toggleMenu(false));
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileDrawer.classList.contains("open")) {
      toggleMenu(false);
    }
  });
}

function initTriviaWidget() {
  const triviaToggleBtn = document.getElementById("trivia-toggle-btn");
  const triviaAnswerBox = document.getElementById("trivia-answer-box");

  if (!triviaToggleBtn || !triviaAnswerBox) return;

  triviaToggleBtn.addEventListener("click", () => {
    const isShown = triviaAnswerBox.classList.contains("revealed");
    if (isShown) {
      triviaAnswerBox.classList.remove("revealed");
      triviaToggleBtn.textContent = "Ver Respuesta";
    } else {
      triviaAnswerBox.classList.add("revealed");
      triviaToggleBtn.textContent = "Ocultar Respuesta";
    }
  });
}

// ==========================================================================
// 5. INDEX.HTML (Feed & Interactive Filters)
// ==========================================================================

function initIndexFeed() {
  const reviewsContainer = document.getElementById("reviews-feed-container");
  const searchInput = document.getElementById("review-search-input");
  const filterChips = document.querySelectorAll(".filter-chip-btn");
  const reviewsCountEl = document.getElementById("reviews-count-display");

  if (!reviewsContainer) return;

  let currentCategory = "Todas";
  let currentSearch = "";

  function getBadgeClass(cat) {
    switch (cat) {
      case "Especialidad": return "badge-terracotta";
      case "Coworking": return "badge-blue";
      case "Métodos de Extracción": return "badge-gold";
      case "Espresso Bars": return "badge-craft";
      default: return "badge-craft";
    }
  }

  function renderReviews() {
    const allReviews = StorageService.getReviews();

    const filtered = allReviews.filter((rev) => {
      const amenities = Array.isArray(rev.amenities) ? rev.amenities : [];
      const category = (rev.category || "").toLowerCase();
      const title = (rev.title || "").toLowerCase();
      const cafeName = (rev.cafeName || "").toLowerCase();
      const location = (rev.location || "").toLowerCase();
      const content = (rev.content || "").toLowerCase();
      const author = (rev.author || "").toLowerCase();

      let matchesCategory = true;
      if (currentCategory === "Más Valoradas (5 Estrellas)") {
        matchesCategory = Number(rev.rating) >= 4.9;
      } else if (currentCategory === "Para Trabajar / WiFi") {
        matchesCategory = category === "coworking" || amenities.some(a => (a || "").toLowerCase().includes("wifi") || (a || "").toLowerCase().includes("enchufes"));
      } else if (currentCategory === "Pet Friendly") {
        matchesCategory = amenities.some(a => (a || "").toLowerCase().includes("pet friendly"));
      } else if (currentCategory === "Espresso Bars") {
        matchesCategory = category === "espresso bars" || title.includes("espresso") || amenities.some(a => (a || "").toLowerCase().includes("espresso"));
      } else if (currentCategory === "Métodos de Extracción") {
        matchesCategory = category === "métodos de extracción" || amenities.some(a => {
          const al = (a || "").toLowerCase();
          return al.includes("v60") || al.includes("chemex") || al.includes("sifón") || al.includes("extracción");
        });
      } else if (currentCategory !== "Todas") {
        matchesCategory = category === currentCategory.toLowerCase();
      }

      const q = currentSearch.toLowerCase().trim();
      let matchesSearch = true;
      if (q) {
        matchesSearch =
          cafeName.includes(q) ||
          location.includes(q) ||
          title.includes(q) ||
          content.includes(q) ||
          author.includes(q);
      }

      return matchesCategory && matchesSearch;
    });

    if (reviewsCountEl) {
      reviewsCountEl.textContent = `Mostrando ${filtered.length} de ${allReviews.length} reseñas`;
    }

    if (filtered.length === 0) {
      reviewsContainer.innerHTML = `
        <div class="feed-empty-state" style="grid-column: 1 / -1;">
          <svg class="empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
            <line x1="6" y1="1" x2="6" y2="4"></line>
            <line x1="10" y1="1" x2="10" y2="4"></line>
            <line x1="14" y1="1" x2="14" y2="4"></line>
          </svg>
          <h3 style="font-family: var(--font-editorial); font-size: 1.4rem; margin-bottom: 0.5rem; color: var(--primary-dark);">No encontramos reseñas con ese criterio</h3>
          <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.25rem;">Intenta con otros términos o restablece los filtros para ver más resultados.</p>
          <button class="btn btn-outline btn-sm" onclick="resetFeedFilters()">Restablecer Filtros</button>
        </div>
      `;
      return;
    }

    const latestReviewId = localStorage.getItem("coffeetalk_latest_review_id") || "";

    reviewsContainer.innerHTML = filtered.map((item) => {
      const isNewlyPosted = item.id === latestReviewId || item.date === "Recién publicado";
      const amenitiesHtml = item.amenities && item.amenities.length
        ? item.amenities.slice(0, 3).map(a => `<span class="amenity-tag">${SVG_ICONS.check} ${a}</span>`).join("")
        : "";

      return `
        <article class="review-card ${isNewlyPosted ? 'review-card-newly-posted' : ''}" data-id="${item.id}">
          <div class="review-card-media">
            <img src="${item.imageUrl}" alt="${item.cafeName}" class="review-card-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80'">
            <span class="badge ${getBadgeClass(item.category)} review-card-badge">${item.category}</span>
            ${isNewlyPosted ? `<span class="badge" style="position: absolute; top: 0.85rem; right: 0.85rem; background: var(--primary-accent); color: #fff; font-weight: 700; z-index: 3; box-shadow: var(--shadow-sm);">★ Tu Reseña Publicada</span>` : `
            <div class="review-card-rating-float">
              ${SVG_ICONS.star}
              <span>${Number(item.rating).toFixed(1)}</span>
            </div>`}
          </div>
          
          <div class="review-card-body">
            <div class="review-cafe-header">
              <h3 class="review-cafe-name">${item.cafeName}</h3>
              <p class="review-cafe-location">
                ${SVG_ICONS.pin}
                ${item.location}
              </p>
            </div>

            <div style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
              <div class="stars-group">${renderStarsSVG(item.rating)}</div>
              <span class="stars-score">${Number(item.rating).toFixed(1)} / 5</span>
            </div>

            <h4 class="review-title-heading">"${item.title}"</h4>
            <p class="review-card-excerpt">${item.content}</p>

            ${amenitiesHtml ? `<div class="review-card-amenities">${amenitiesHtml}</div>` : ""}

            <div style="margin-top: 0.5rem; margin-bottom: 1rem;">
              <button class="btn btn-outline btn-sm read-full-review-btn" style="width: 100%;" data-id="${item.id}">
                Leer reseña completa
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </div>

            <div class="review-card-author-footer">
              <div class="reviewer-profile">
                <img src="${item.authorAvatar}" alt="${item.author}" class="reviewer-avatar">
                <div class="reviewer-info">
                  <span class="reviewer-name">${item.author}</span>
                  <span class="review-date">${item.date}</span>
                </div>
              </div>
            </div>
          </div>
        </article>
      `;
    }).join("");

    reviewsContainer.querySelectorAll(".read-full-review-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        openReviewModal(btn.getAttribute("data-id"));
      });
    });

    if (latestReviewId) {
      setTimeout(() => {
        const feedEl = document.getElementById("reviews-feed-container");
        if (feedEl) feedEl.scrollIntoView({ behavior: "smooth", block: "start" });
        localStorage.removeItem("coffeetalk_latest_review_id");
      }, 400);
    }
  }

  filterChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      filterChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      currentCategory = chip.getAttribute("data-filter") || "Todas";
      renderReviews();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value;
      renderReviews();
    });
  }

  window.resetFeedFilters = function () {
    currentCategory = "Todas";
    currentSearch = "";
    if (searchInput) searchInput.value = "";
    filterChips.forEach(c => {
      if (c.getAttribute("data-filter") === "Todas") c.classList.add("active");
      else c.classList.remove("active");
    });
    renderReviews();
  };

  renderReviews();
}

function openReviewModal(reviewId) {
  const reviews = StorageService.getReviews();
  const item = reviews.find(r => r.id === reviewId);
  if (!item) return;

  let modal = document.getElementById("review-details-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "review-details-modal";
    modal.className = "modal-overlay";
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="modal-box">
      <button class="modal-close-btn" id="modal-close-review" aria-label="Cerrar modal">&times;</button>
      
      <div style="position: relative; height: 260px; border-radius: var(--radius-md); overflow: hidden; margin-bottom: 1.25rem;">
        <img src="${item.imageUrl}" alt="${item.cafeName}" style="width: 100%; height: 100%; object-fit: cover;">
        <span class="badge badge-terracotta" style="position: absolute; top: 1rem; left: 1rem;">${item.category}</span>
        <div style="position: absolute; bottom: 1rem; right: 1rem; background: rgba(44,24,16,0.92); color: #fff; padding: 0.35rem 0.85rem; border-radius: var(--radius-full); font-weight: 700; display: flex; align-items: center; gap: 0.4rem; font-size: 0.875rem;">
          ${SVG_ICONS.star} ${Number(item.rating).toFixed(1)} / 5.0
        </div>
      </div>

      <div style="margin-bottom: 1rem;">
        <h2 style="font-family: var(--font-editorial); font-size: 1.75rem; color: var(--primary-dark); line-height: 1.2; margin-bottom: 0.25rem;">${item.cafeName}</h2>
        <p style="color: var(--text-muted); font-size: 0.9rem; display: flex; align-items: center; gap: 0.4rem;">
          ${SVG_ICONS.pin}
          ${item.location}
        </p>
      </div>

      <div style="background: var(--sand-tone); border-radius: var(--radius-sm); padding: 0.85rem 1rem; margin-bottom: 1.25rem; display: flex; justify-content: space-between; align-items: center;">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <div class="stars-group">${renderStarsSVG(item.rating)}</div>
          <span style="font-weight: 700; color: var(--primary-dark);">${Number(item.rating).toFixed(1)} / 5</span>
        </div>
        <span style="font-size: 0.8rem; font-weight: 600; color: var(--secondary-blue);">Publicado ${item.date}</span>
      </div>

      <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--primary-accent); margin-bottom: 0.75rem;">"${item.title}"</h3>
      <p style="color: var(--primary-dark); line-height: 1.7; font-size: 0.975rem; margin-bottom: 1.5rem;">${item.content}</p>

      ${item.amenities && item.amenities.length ? `
        <div style="margin-bottom: 1.5rem;">
          <h4 style="font-size: 0.825rem; text-transform: uppercase; letter-spacing: 0.6px; color: var(--text-muted); margin-bottom: 0.5rem; font-weight: 700;">Servicios y Amenidades Verificadas</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 0.45rem;">
            ${item.amenities.map(a => `<span class="amenity-tag" style="padding: 0.35rem 0.65rem; font-size: 0.8rem;">${SVG_ICONS.check} ${a}</span>`).join("")}
          </div>
        </div>
      ` : ""}

      <div style="display: flex; align-items: center; justify-content: space-between; padding-top: 1.25rem; border-top: 1px solid var(--border-craft);">
        <div class="reviewer-profile">
          <img src="${item.authorAvatar}" alt="${item.author}" class="reviewer-avatar" style="width: 44px; height: 44px;">
          <div class="reviewer-info">
            <span class="reviewer-name" style="font-size: 0.95rem;">${item.author}</span>
            <span style="font-size: 0.8rem; color: var(--text-muted);">${item.authorHandle || "@coffeelover"}</span>
          </div>
        </div>
        <button class="btn btn-primary btn-sm" onclick="document.getElementById('review-details-modal').classList.remove('active')">Cerrar Detalle</button>
      </div>
    </div>
  `;

  modal.classList.add("active");

  const closeBtn = document.getElementById("modal-close-review");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => modal.classList.remove("active"));
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("active");
  });
}

// ==========================================================================
// 6. CREAR-RESEÑA.HTML (Interactive Publication Form)
// ==========================================================================

function initCreateReviewForm() {
  const form = document.getElementById("create-review-form");
  const starButtons = document.querySelectorAll(".star-rating-btn");
  const ratingInput = document.getElementById("rating-value-input");
  const ratingFeedbackText = document.getElementById("rating-feedback-text");
  const imageUrlInput = document.getElementById("review-image-input");
  const imagePreviewContainer = document.getElementById("image-preview-box");

  if (!form) return;

  // Autofill fields if redirected from the Coffee Directory via URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const paramCafe = urlParams.get("cafe");
  const paramZona = urlParams.get("zona");
  const paramCat = urlParams.get("cat");

  const cafeNameInput = document.getElementById("cafe-name-input");
  const cafeLocationInput = document.getElementById("cafe-location-input");
  const cafeCategorySelect = document.getElementById("cafe-category-select");
  const reviewTitleInput = document.getElementById("review-title-input");
  const autofillNotice = document.getElementById("autofill-notice");

  let wasAutofilled = false;

  if (paramCafe && cafeNameInput) {
    cafeNameInput.value = decodeURIComponent(paramCafe);
    wasAutofilled = true;
  }

  if (paramZona && cafeLocationInput) {
    cafeLocationInput.value = decodeURIComponent(paramZona);
  }

  if (paramCat && cafeCategorySelect) {
    const targetCat = decodeURIComponent(paramCat).toLowerCase();
    for (let i = 0; i < cafeCategorySelect.options.length; i++) {
      const optVal = cafeCategorySelect.options[i].value.toLowerCase();
      const optText = cafeCategorySelect.options[i].text.toLowerCase();
      if (optVal === targetCat || optText.includes(targetCat) || targetCat.includes(optVal)) {
        cafeCategorySelect.selectedIndex = i;
        break;
      }
    }
  }

  if (wasAutofilled) {
    if (autofillNotice) {
      autofillNotice.style.display = "flex";
      autofillNotice.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.65rem;">
          ${SVG_ICONS.coffeeCup}
          <span>Escribiendo reseña para <strong>${decodeURIComponent(paramCafe)}</strong> (${paramZona ? decodeURIComponent(paramZona) : 'Directorio'}).</span>
        </div>
        <a href="crear-resena.html" class="autofill-clear-btn" title="Limpiar y elegir otra cafetería">&times; Cambiar Cafetería</a>
      `;
    }
    showToast(`Autocompletado para "${decodeURIComponent(paramCafe)}"`, SVG_ICONS.coffeeCup);
    if (reviewTitleInput) {
      setTimeout(() => reviewTitleInput.focus(), 300);
    }
  }

  const RATING_LABELS = {
    1: "1.0 - Por debajo del estándar",
    2: "2.0 - Regular con áreas de mejora",
    3: "3.0 - Aceptable / Servicio estándar",
    4: "4.0 - Muy buena extracción y ambiente",
    5: "5.0 - Calidad de especialidad excepcional"
  };

  let selectedRating = 5;

  function updateStars(val) {
    selectedRating = val;
    if (ratingInput) ratingInput.value = val;
    if (ratingFeedbackText) ratingFeedbackText.textContent = RATING_LABELS[val] || `${val} Estrellas`;

    starButtons.forEach((btn) => {
      const btnVal = parseInt(btn.getAttribute("data-star"), 10);
      if (btnVal <= val) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }

  starButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const val = parseInt(btn.getAttribute("data-star"), 10);
      updateStars(val);
    });

    btn.addEventListener("mouseenter", () => {
      const val = parseInt(btn.getAttribute("data-star"), 10);
      starButtons.forEach((b) => {
        const bVal = parseInt(b.getAttribute("data-star"), 10);
        if (bVal <= val) b.style.color = "var(--gold-star)";
        else b.style.color = "#D3C3B8";
      });
    });

    btn.addEventListener("mouseleave", () => {
      starButtons.forEach((b) => {
        b.style.color = "";
      });
    });
  });

  updateStars(5);

  if (imageUrlInput && imagePreviewContainer) {
    imageUrlInput.addEventListener("input", () => {
      const val = imageUrlInput.value.trim();
      if (val) {
        imagePreviewContainer.style.display = "block";
        imagePreviewContainer.innerHTML = `
          <img src="${val}" alt="Previsualización" style="width: 100%; height: 160px; object-fit: cover; border-radius: var(--radius-sm); border: 1px solid var(--border-craft);" onerror="this.parentElement.style.display='none'">
        `;
      } else {
        imagePreviewContainer.style.display = "none";
      }
    });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const cafeName = (cafeNameInput ? cafeNameInput.value : "").trim();
    const location = (cafeLocationInput ? cafeLocationInput.value : "").trim();
    const category = cafeCategorySelect ? cafeCategorySelect.value : "Especialidad";
    const title = (reviewTitleInput ? reviewTitleInput.value : "").trim();
    const content = (document.getElementById("review-content-input") ? document.getElementById("review-content-input").value : "").trim();
    let imageUrl = imageUrlInput ? imageUrlInput.value.trim() : "";

    // Client-side validations
    if (!cafeName) {
      showToast("Por favor indica el nombre de la cafetería");
      if (cafeNameInput) cafeNameInput.focus();
      return;
    }
    if (!location) {
      showToast("Por favor indica la ciudad o zona");
      if (cafeLocationInput) cafeLocationInput.focus();
      return;
    }
    if (!title) {
      showToast("Por favor ingresa un título para tu reseña");
      if (reviewTitleInput) reviewTitleInput.focus();
      return;
    }
    if (!content) {
      showToast("Por favor describe tu evaluación sensorial o visita");
      const contentEl = document.getElementById("review-content-input");
      if (contentEl) contentEl.focus();
      return;
    }

    if (!imageUrl) {
      imageUrl = "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80";
    }

    const checkedAmenities = [];
    document.querySelectorAll('input[name="amenities"]:checked').forEach((cb) => {
      checkedAmenities.push(cb.value);
    });

    const userProfile = StorageService.getUserProfile();

    const newReview = {
      id: "rev-" + Date.now(),
      cafeName,
      location,
      category,
      rating: parseFloat(selectedRating) || 5.0,
      title,
      content,
      author: userProfile.name || "Sofía Martínez",
      authorHandle: userProfile.handle || "@coffeelover_merida",
      authorAvatar: userProfile.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      date: "Recién publicado",
      imageUrl,
      amenities: checkedAmenities.length ? checkedAmenities : ["Café de Especialidad"]
    };

    StorageService.addReview(newReview);

    if (userProfile && userProfile.stats) {
      userProfile.stats.reviews = (userProfile.stats.reviews || 0) + 1;
      StorageService.saveUserProfile(userProfile);
    }

    // Save flash message and latest review ID
    const flashMsg = `¡Tu reseña de "${cafeName}" se publicó con éxito! Ya puedes verla destacada al inicio del feed.`;
    try {
      localStorage.setItem("coffeetalk_latest_review_id", newReview.id);
      localStorage.setItem("coffeetalk_flash_toast", flashMsg);
      sessionStorage.setItem("coffeetalk_flash_toast", flashMsg);
    } catch (err) {}

    window.location.href = "index.html#reviews-feed-container";
  });
}

// ==========================================================================
// 7. PERFIL.HTML (User Profile, Tabs & Achievements)
// ==========================================================================

function initUserProfilePage() {
  const profileContainer = document.getElementById("profile-page-content");
  if (!profileContainer) return;

  const userProfile = StorageService.getUserProfile();
  const allReviews = StorageService.getReviews();
  const allCafes = StorageService.getCafes();
  const favorites = StorageService.getFavorites();

  const userReviews = allReviews.filter(r => r.author === userProfile.name);

  const nameEl = document.getElementById("profile-name-text");
  const handleEl = document.getElementById("profile-handle-text");
  const bioEl = document.getElementById("profile-bio-text");
  const avatarEl = document.getElementById("profile-avatar-img");
  const countReviewsEl = document.getElementById("stat-reviews-count");
  const countFavsEl = document.getElementById("stat-favs-count");
  const avgRatingEl = document.getElementById("stat-avg-rating");

  if (nameEl) nameEl.textContent = userProfile.name;
  if (handleEl) handleEl.textContent = userProfile.handle;
  if (bioEl) bioEl.textContent = userProfile.bio;
  if (avatarEl) avatarEl.src = userProfile.avatar;
  if (countReviewsEl) countReviewsEl.textContent = userReviews.length || userProfile.stats.reviews;
  if (countFavsEl) countFavsEl.textContent = favorites.length;
  if (avgRatingEl) avgRatingEl.textContent = userProfile.stats.avgRating;

  // Render Tab 1: Mis Reseñas
  const userReviewsGrid = document.getElementById("tab-user-reviews-grid");
  if (userReviewsGrid) {
    if (userReviews.length === 0) {
      userReviewsGrid.innerHTML = `
        <div class="feed-empty-state" style="grid-column: 1 / -1;">
          <p style="color: var(--text-muted); font-size: 1rem; margin-bottom: 1rem;">Aún no has compartido ninguna reseña cafetera.</p>
          <a href="crear-resena.html" class="btn btn-primary btn-sm">+ Publicar mi primera reseña</a>
        </div>
      `;
    } else {
      userReviewsGrid.innerHTML = userReviews.map(item => `
        <article class="review-card">
          <div class="review-card-media">
            <img src="${item.imageUrl}" alt="${item.cafeName}" class="review-card-img" loading="lazy">
            <span class="badge badge-terracotta review-card-badge">${item.category}</span>
            <div class="review-card-rating-float">${SVG_ICONS.star} ${Number(item.rating).toFixed(1)}</div>
          </div>
          <div class="review-card-body">
            <h3 class="review-cafe-name">${item.cafeName}</h3>
            <p class="review-cafe-location" style="margin-bottom: 0.5rem;">${SVG_ICONS.pin} ${item.location}</p>
            <h4 class="review-title-heading">"${item.title}"</h4>
            <p class="review-card-excerpt">${item.content}</p>
            <div class="review-card-author-footer">
              <span class="review-date">${item.date}</span>
              <button class="btn btn-outline btn-sm read-full-review-btn" data-id="${item.id}">Ver Reseña</button>
            </div>
          </div>
        </article>
      `).join("");

      userReviewsGrid.querySelectorAll(".read-full-review-btn").forEach(btn => {
        btn.addEventListener("click", () => openReviewModal(btn.getAttribute("data-id")));
      });
    }
  }

  // Render Tab 2: Cafeterías Guardadas / Favoritas
  const favCafesGrid = document.getElementById("tab-favorites-grid");
  if (favCafesGrid) {
    const favoriteCafes = allCafes.filter(c => favorites.includes(c.id));
    if (favoriteCafes.length === 0) {
      favCafesGrid.innerHTML = `
        <div class="feed-empty-state" style="grid-column: 1 / -1;">
          <p style="color: var(--text-muted); font-size: 1rem; margin-bottom: 1rem;">No tienes cafeterías guardadas aún en tu lista de deseos.</p>
          <a href="cafeterias.html" class="btn btn-secondary btn-sm">Explorar Directorio</a>
        </div>
      `;
    } else {
      favCafesGrid.innerHTML = favoriteCafes.map(cafe => `
        <article class="cafe-directory-card">
          <div class="cafe-card-thumb-wrapper">
            <img src="${cafe.imageUrl}" alt="${cafe.name}" class="cafe-card-thumb-img">
            <button class="cafe-fav-btn is-favorite" data-cafe-id="${cafe.id}" title="Quitar de favoritos">
              ${SVG_ICONS.heartFilled}
            </button>
          </div>
          <div class="cafe-directory-info">
            <h3 class="cafe-name-title">${cafe.name}</h3>
            <p class="cafe-address-line">${SVG_ICONS.pin} ${cafe.address}</p>
            <div class="cafe-card-footer">
              <span style="font-weight: 700; color: var(--gold-star); display: inline-flex; align-items: center; gap: 0.3rem;">
                ${SVG_ICONS.star} ${cafe.rating} (${cafe.reviewsCount})
              </span>
              <button class="btn btn-primary btn-sm view-cafe-details-btn" data-cafe-id="${cafe.id}">Ver Menú / Info</button>
            </div>
          </div>
        </article>
      `).join("");

      favCafesGrid.querySelectorAll(".cafe-fav-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const cafeId = btn.getAttribute("data-cafe-id");
          StorageService.toggleFavorite(cafeId);
          showToast("Eliminado de tus cafeterías guardadas");
          initUserProfilePage();
        });
      });

      favCafesGrid.querySelectorAll(".view-cafe-details-btn").forEach(btn => {
        btn.addEventListener("click", () => openCafeModal(btn.getAttribute("data-cafe-id")));
      });
    }
  }

  // Tabs switching logic
  const tabButtons = document.querySelectorAll(".tab-nav-button");
  const tabPanes = document.querySelectorAll(".tab-pane-content");

  tabButtons.forEach(button => {
    button.addEventListener("click", () => {
      const targetTab = button.getAttribute("data-tab");
      tabButtons.forEach(b => b.classList.remove("active"));
      tabPanes.forEach(p => p.classList.remove("active"));

      button.classList.add("active");
      const targetPane = document.getElementById(targetTab);
      if (targetPane) targetPane.classList.add("active");
    });
  });

  const editProfileBtn = document.getElementById("edit-profile-btn");
  if (editProfileBtn) {
    editProfileBtn.addEventListener("click", openEditProfileModal);
  }
}

function openEditProfileModal() {
  const user = StorageService.getUserProfile();

  let modal = document.getElementById("edit-profile-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "edit-profile-modal";
    modal.className = "modal-overlay";
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="modal-box">
      <button class="modal-close-btn" id="modal-close-profile">&times;</button>
      <h3 style="font-family: var(--font-editorial); font-size: 1.6rem; color: var(--primary-dark); margin-bottom: 1.25rem;">Editar Mi Perfil Cafetero</h3>
      
      <form id="edit-profile-form" style="display: flex; flex-direction: column; gap: 1rem;">
        <div class="form-group">
          <label class="form-label">Nombre Completo</label>
          <input type="text" id="edit-user-name" class="form-control" value="${user.name}" required>
        </div>
        <div class="form-group">
          <label class="form-label">Nombre de Usuario (@)</label>
          <input type="text" id="edit-user-handle" class="form-control" value="${user.handle}" required>
        </div>
        <div class="form-group">
          <label class="form-label">Biografía Cafetera</label>
          <textarea id="edit-user-bio" class="form-control" style="min-height: 90px;">${user.bio}</textarea>
        </div>
        <div class="form-group">
          <label class="form-label">URL de Avatar</label>
          <input type="url" id="edit-user-avatar" class="form-control" value="${user.avatar}">
        </div>
        <div style="display: flex; justify-content: flex-end; gap: 0.75rem; margin-top: 1rem;">
          <button type="button" class="btn btn-outline btn-sm" id="cancel-edit-profile-btn">Cancelar</button>
          <button type="submit" class="btn btn-primary btn-sm">Guardar Cambios</button>
        </div>
      </form>
    </div>
  `;

  modal.classList.add("active");

  const closeBtn = document.getElementById("modal-close-profile");
  const cancelBtn = document.getElementById("cancel-edit-profile-btn");
  const close = () => modal.classList.remove("active");

  if (closeBtn) closeBtn.addEventListener("click", close);
  if (cancelBtn) cancelBtn.addEventListener("click", close);

  const editForm = document.getElementById("edit-profile-form");
  editForm.addEventListener("submit", (e) => {
    e.preventDefault();
    user.name = document.getElementById("edit-user-name").value.trim();
    user.handle = document.getElementById("edit-user-handle").value.trim();
    user.bio = document.getElementById("edit-user-bio").value.trim();
    user.avatar = document.getElementById("edit-user-avatar").value.trim() || user.avatar;

    StorageService.saveUserProfile(user);
    close();
    showToast("Perfil actualizado correctamente", SVG_ICONS.user);
    initUserProfilePage();
  });
}

// ==========================================================================
// 8. CAFETERIAS.HTML (Directory, Filters, Menu Modal & Favorites)
// ==========================================================================

function initCafesDirectory() {
  const directoryContainer = document.getElementById("cafes-directory-container");
  const searchInput = document.getElementById("cafe-directory-search");
  const scheduleSelect = document.getElementById("filter-schedule-select");
  const zoneSelect = document.getElementById("filter-zone-select");
  const categorySelect = document.getElementById("filter-category-select");

  if (!directoryContainer) return;

  function renderDirectory() {
    const allCafes = StorageService.getCafes();
    const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
    const scheduleFilter = scheduleSelect ? scheduleSelect.value : "all";
    const zoneFilter = zoneSelect ? zoneSelect.value : "all";
    const categoryFilter = categorySelect ? categorySelect.value : "all";

    const filtered = allCafes.filter(cafe => {
      const matchesSearch = !query ||
        cafe.name.toLowerCase().includes(query) ||
        cafe.zone.toLowerCase().includes(query) ||
        cafe.address.toLowerCase().includes(query) ||
        cafe.description.toLowerCase().includes(query);

      let matchesSchedule = true;
      if (scheduleFilter === "open") matchesSchedule = cafe.isOpen;
      else if (scheduleFilter === "closed") matchesSchedule = !cafe.isOpen;

      let matchesZone = true;
      if (zoneFilter !== "all") {
        matchesZone = cafe.zone.toLowerCase().includes(zoneFilter.toLowerCase());
      }

      let matchesCat = true;
      if (categoryFilter !== "all") {
        matchesCat = cafe.category.toLowerCase() === categoryFilter.toLowerCase();
      }

      return matchesSearch && matchesSchedule && matchesZone && matchesCat;
    });

    if (filtered.length === 0) {
      directoryContainer.innerHTML = `
        <div class="feed-empty-state" style="grid-column: 1 / -1;">
          <h3 style="font-family: var(--font-editorial); font-size: 1.35rem; margin-bottom: 0.5rem; color: var(--primary-dark);">No encontramos cafeterías con esos filtros</h3>
          <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.25rem;">Prueba modificando la zona o el estado de apertura.</p>
          <button class="btn btn-outline btn-sm" onclick="resetDirectoryFilters()">Restablecer Filtros</button>
        </div>
      `;
      return;
    }

    directoryContainer.innerHTML = filtered.map(cafe => {
      const isFav = StorageService.isFavorite(cafe.id);
      const statusBadge = cafe.isOpen
        ? `<span class="cafe-status-indicator status-open"><span style="width: 7px; height: 7px; background: #4ADE80; border-radius: 50%;"></span> Abierto ahora</span>`
        : `<span class="cafe-status-indicator status-closed"><span style="width: 7px; height: 7px; background: #F87171; border-radius: 50%;"></span> Cerrado</span>`;

      const tagsHtml = cafe.services.map(s => `<span class="amenity-tag">${SVG_ICONS.check} ${s}</span>`).join("");

      return `
        <article class="cafe-directory-card">
          <div class="cafe-card-thumb-wrapper">
            <img src="${cafe.imageUrl}" alt="${cafe.name}" class="cafe-card-thumb-img" loading="lazy">
            ${statusBadge}
            <button class="cafe-fav-btn ${isFav ? 'is-favorite' : ''}" data-cafe-id="${cafe.id}" title="${isFav ? 'Quitar de favoritos' : 'Guardar en favoritos'}">
              ${isFav ? SVG_ICONS.heartFilled : SVG_ICONS.heartOutline}
            </button>
          </div>

          <div class="cafe-directory-info">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.35rem;">
              <h3 class="cafe-name-title">${cafe.name}</h3>
              <span class="badge badge-terracotta" style="font-size: 0.7rem;">${cafe.priceRange}</span>
            </div>

            <p class="cafe-address-line">
              ${SVG_ICONS.pin}
              ${cafe.address}
            </p>

            <p class="cafe-schedule-line">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              ${cafe.schedule}
            </p>

            <div class="cafe-services-tags">${tagsHtml}</div>

            <div class="cafe-card-footer">
              <div style="display: flex; align-items: center; gap: 0.35rem;">
                <span style="color: var(--gold-star); line-height: 1;">${SVG_ICONS.star}</span>
                <span style="font-weight: 700; color: var(--primary-dark); font-size: 0.95rem;">${cafe.rating}</span>
                <span style="color: var(--text-muted); font-size: 0.8rem;">(${cafe.reviewsCount})</span>
              </div>
              <div style="display: flex; gap: 0.45rem; align-items: center; flex-wrap: wrap;">
                <button class="btn btn-outline btn-sm view-cafe-details-btn" data-cafe-id="${cafe.id}">Ver Ficha</button>
                <a href="crear-resena.html?cafe=${encodeURIComponent(cafe.name)}&zona=${encodeURIComponent(cafe.zone || cafe.address)}&cat=${encodeURIComponent(cafe.category)}" class="btn btn-primary btn-sm" title="Escribir reseña para ${cafe.name}">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                  Dar Reseña
                </a>
              </div>
            </div>
          </div>
        </article>
      `;
    }).join("");

    directoryContainer.querySelectorAll(".cafe-fav-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-cafe-id");
        const added = StorageService.toggleFavorite(id);
        if (added) {
          btn.classList.add("is-favorite");
          btn.innerHTML = SVG_ICONS.heartFilled;
          showToast("Cafetería guardada en tus favoritos", SVG_ICONS.heartFilled);
        } else {
          btn.classList.remove("is-favorite");
          btn.innerHTML = SVG_ICONS.heartOutline;
          showToast("Eliminado de tus favoritos");
        }
      });
    });

    directoryContainer.querySelectorAll(".view-cafe-details-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        openCafeModal(btn.getAttribute("data-cafe-id"));
      });
    });
  }

  if (searchInput) searchInput.addEventListener("input", renderDirectory);
  if (scheduleSelect) scheduleSelect.addEventListener("change", renderDirectory);
  if (zoneSelect) zoneSelect.addEventListener("change", renderDirectory);
  if (categorySelect) categorySelect.addEventListener("change", renderDirectory);

  window.resetDirectoryFilters = function () {
    if (searchInput) searchInput.value = "";
    if (scheduleSelect) scheduleSelect.value = "all";
    if (zoneSelect) zoneSelect.value = "all";
    if (categorySelect) categorySelect.value = "all";
    renderDirectory();
  };

  renderDirectory();
}

function openCafeModal(cafeId) {
  const cafes = StorageService.getCafes();
  const cafe = cafes.find(c => c.id === cafeId);
  if (!cafe) return;

  let modal = document.getElementById("cafe-details-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "cafe-details-modal";
    modal.className = "modal-overlay";
    document.body.appendChild(modal);
  }

  const menuRows = cafe.menuHighlights && cafe.menuHighlights.length
    ? cafe.menuHighlights.map(item => `
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.65rem 0; border-bottom: 1px dashed var(--border-craft);">
          <span style="font-weight: 600; color: var(--primary-dark); font-size: 0.95rem;">${item.name}</span>
          <span style="font-weight: 700; color: var(--primary-accent); font-size: 0.95rem;">${item.price}</span>
        </div>
      `).join("")
    : "<p style='color: var(--text-muted); font-size: 0.9rem;'>Menú en actualización en barra.</p>";

  modal.innerHTML = `
    <div class="modal-box">
      <button class="modal-close-btn" id="modal-close-cafe">&times;</button>
      
      <div style="position: relative; height: 250px; border-radius: var(--radius-md); overflow: hidden; margin-bottom: 1.25rem;">
        <img src="${cafe.imageUrl}" alt="${cafe.name}" style="width: 100%; height: 100%; object-fit: cover;">
        <div style="position: absolute; bottom: 1rem; left: 1rem; background: rgba(44,24,16,0.92); color: #fff; padding: 0.35rem 0.85rem; border-radius: var(--radius-full); font-weight: 700; font-size: 0.85rem; display: flex; align-items: center; gap: 0.35rem;">
          ${SVG_ICONS.star} ${cafe.rating} · ${cafe.reviewsCount} reseñas verificadas
        </div>
      </div>

      <h2 style="font-family: var(--font-editorial); font-size: 1.85rem; color: var(--primary-dark); margin-bottom: 0.3rem;">${cafe.name}</h2>
      <p style="color: var(--text-muted); font-size: 0.925rem; margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.4rem;">
        ${SVG_ICONS.pin}
        ${cafe.address}
      </p>

      <div style="background-color: var(--sand-tone); border: 1px solid var(--border-craft); border-radius: var(--radius-md); padding: 0.85rem 1rem; margin-bottom: 1.25rem;">
        <p style="font-size: 0.875rem; font-weight: 600; color: var(--primary-dark); margin-bottom: 0.25rem;">Horario: ${cafe.schedule}</p>
        <p style="font-size: 0.875rem; color: var(--text-muted);">${cafe.description}</p>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-family: var(--font-editorial); font-size: 1.2rem; color: var(--primary-dark); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.45rem;">
          ${SVG_ICONS.coffeeCup} Especialidades de la Barra & Carta
        </h4>
        <div>${menuRows}</div>
      </div>

      ${(() => {
        const cafeReviews = StorageService.getReviews().filter(r => 
          (r.cafeName && cafe.name && (r.cafeName.toLowerCase().includes(cafe.name.toLowerCase()) || cafe.name.toLowerCase().includes(r.cafeName.toLowerCase())))
        );
        return cafeReviews.length > 0
          ? `
            <div style="margin-bottom: 1.5rem; background: var(--bg-light); border: 1px solid var(--border-craft); border-radius: var(--radius-md); padding: 1rem;">
              <h4 style="font-family: var(--font-editorial); font-size: 1.15rem; color: var(--primary-dark); margin-bottom: 0.75rem; display: flex; align-items: center; justify-content: space-between;">
                <span style="display: flex; align-items: center; gap: 0.4rem;">${SVG_ICONS.check} Reseñas de la Comunidad</span>
                <span style="font-size: 0.8rem; font-family: var(--font-sans); color: var(--secondary-blue); font-weight: 700;">${cafeReviews.length} registradas</span>
              </h4>
              <div style="display: flex; flex-direction: column; gap: 0.65rem; max-height: 200px; overflow-y: auto;">
                ${cafeReviews.map(cr => `
                  <div style="background: #ffffff; border: 1px solid var(--border-craft); border-radius: var(--radius-sm); padding: 0.7rem 0.85rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.2rem;">
                      <span style="font-weight: 700; font-size: 0.875rem; color: var(--primary-dark);">${cr.author}</span>
                      <span style="font-size: 0.8rem; color: var(--gold-star); font-weight: 700;">★ ${Number(cr.rating).toFixed(1)}</span>
                    </div>
                    <p style="font-weight: 600; font-size: 0.85rem; color: var(--primary-accent); margin-bottom: 0.2rem;">"${cr.title}"</p>
                    <p style="font-size: 0.8rem; color: var(--text-muted); line-height: 1.4;">${cr.content}</p>
                  </div>
                `).join("")}
              </div>
            </div>
          `
          : `
            <div style="margin-bottom: 1.5rem; background: var(--sand-tone); border: 1px dashed var(--border-craft); border-radius: var(--radius-md); padding: 0.85rem 1rem; text-align: center;">
              <p style="font-size: 0.85rem; color: var(--text-muted);">Sé el primero en compartir tu experiencia sensorial sobre este café.</p>
            </div>
          `;
      })()}

      <div style="display: flex; gap: 0.75rem; justify-content: flex-end; padding-top: 1rem; border-top: 1px solid var(--border-craft); flex-wrap: wrap;">
        <button class="btn btn-outline btn-sm" onclick="document.getElementById('cafe-details-modal').classList.remove('active')">Cerrar</button>
        <a href="crear-resena.html?cafe=${encodeURIComponent(cafe.name)}&zona=${encodeURIComponent(cafe.zone || cafe.address)}&cat=${encodeURIComponent(cafe.category)}" class="btn btn-primary btn-sm">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
          + Dejar Reseña de este Café
        </a>
      </div>
    </div>
  `;

  modal.classList.add("active");

  const closeBtn = document.getElementById("modal-close-cafe");
  if (closeBtn) closeBtn.addEventListener("click", () => modal.classList.remove("active"));
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("active");
  });
}

// ==========================================================================
// 9. APP INITIALIZATION & STATIC PAGE TRANSITIONS
// ==========================================================================

function initPageTransitions() {
  // Fade in on page load
  document.body.classList.add("page-loaded");

  // Intercept internal page links for silky-smooth static transition
  document.querySelectorAll("a[href]").forEach((link) => {
    const href = link.getAttribute("href");
    if (
      href &&
      !href.startsWith("#") &&
      !href.startsWith("mailto:") &&
      !href.startsWith("javascript:") &&
      !link.target &&
      !href.startsWith("http")
    ) {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        document.body.classList.remove("page-loaded");
        document.body.classList.add("page-exiting");
        setTimeout(() => {
          window.location.href = href;
        }, 180);
      });
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initPageTransitions();

  StorageService.getReviews();
  StorageService.getCafes();
  StorageService.getFavorites();
  StorageService.getUserProfile();

  initNavigation();
  initTriviaWidget();
  checkFlashToast();

  initIndexFeed();
  initCreateReviewForm();
  initUserProfilePage();
  initCafesDirectory();
});

