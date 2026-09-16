/* ==========================================================================
   HANCOCK PROSPECTING PTY LTD / FUNDACIÓN HANCOCK
   LOGIQUE APPLICATIVE, CARTE DYNAMIQUE LEAFLET & GESTION DES VISUELS
   ========================================================================== */

// 1. TOUTES LES 27 PHOTOS AUTHENTIQUES POUR LA GALERIE & LES PAGES
const GALLERY_ITEMS = [
  { id: 1, category: "philanthropy", title: "Mécénat Olympique — Natation Paris 2024", img: "./img/jo-paris-2024-natation-hancock.png" },
  { id: 2, category: "operations", title: "Flotte Minière Roy Hill & Extraction Pilbara", img: "./img/mine-roy-hill-flotte.png" },
  { id: 3, category: "leadership", title: "Gina Rinehart, Executive Chairman", img: "./img/gina-rinehart-portrait-officiel.png" },
  { id: 4, category: "philanthropy", title: "Vision Filantropique & Engagement Personnel", img: "./img/gina-rinehart-conviction.png" },
  { id: 5, category: "leadership", title: "Allocution Officielle — National Mining Day", img: "./img/gina-rinehart-allocution-nationale.png" },
  { id: 6, category: "operations", title: "Village Communautaire & Installations Pilbara", img: "./img/village-communaute-pilbara.png" },
  { id: 7, category: "leadership", title: "Gouvernance & Partenaires Internationaux", img: "./img/partenaires-internationaux-board.png" },
  { id: 8, category: "leadership", title: "Sommet d'Affaires & Réception Officielle au Japon", img: "./img/sommet-affaires-japon.png" },
  { id: 9, category: "leadership", title: "Délégation Exécutive & Alliances Mondiales", img: "./img/delegation-executifs-partenariat.png" },
  { id: 10, category: "operations", title: "Projet Senex — Transition & Énergie", img: "./img/senex-energie-inauguration.png" },
  { id: 11, category: "leadership", title: "Discours Inaugural Ressources d'Avenir", img: "./img/senex-discours-officiel.png" },
  { id: 12, category: "operations", title: "Équipe du Siège — Hancock Iron Ore", img: "./img/hancock-iron-ore-equipe-siege.png" },
  { id: 13, category: "operations", title: "Équipes Opérationnelles de Terrain", img: "./img/hancock-equipe-operations-mine.png" },
  { id: 14, category: "operations", title: "Ingénierie & Supervision de Sites", img: "./img/ingenieurs-supervision-operations.png" },
  { id: 15, category: "operations", title: "Inclusion & Nouveaux Talents Miniers", img: "./img/talents-jeunesse-inclusion-mine.png" },
  { id: 16, category: "leadership", title: "Rencontre Bilatérale avec le Président Javier Milei", img: "./img/rencontre-diplomatique-milei-1.png" },
  { id: 17, category: "leadership", title: "Échanges Stratégiques & Forums Économiques", img: "./img/rencontre-diplomatique-milei-2.png" },
  { id: 18, category: "leadership", title: "Dîner de Gala Diplomatique International", img: "./img/rencontre-diplomatique-milei-3.png" },
  { id: 19, category: "leadership", title: "Soirée Internationale & Relations Publiques", img: "./img/gala-international-farage-1.png" },
  { id: 20, category: "leadership", title: "Réception Institutionnelle de Prestige", img: "./img/gala-international-farage-2.png" },
  { id: 21, category: "philanthropy", title: "Kidman Hat Co & Patrimoine Pastoral", img: "./img/kidman-hat-co-patrimoine-rural.png" },
  { id: 22, category: "philanthropy", title: "Soutien aux Collectivités & Territoires Éloignés", img: "./img/subventions-communautes-rurales.png" },
  { id: 23, category: "philanthropy", title: "Allocution Filantropique Régionale", img: "./img/discours-philanthropique-rural.png" },
  { id: 24, category: "philanthropy", title: "Engagement de Proximité & Santé Rurale", img: "./img/engagement-communautaire-regional.png" },
  { id: 25, category: "philanthropy", title: "Remise des Bourses d'Excellence Universitaire", img: "./img/bourses-prix-excellence-rural.png" },
  { id: 26, category: "philanthropy", title: "Partenariats avec le Monde Rural Australien", img: "./img/celebration-partenaires-pastoraux.png" },
  { id: 27, category: "operations", title: "S. Kidman & Co — Élevage & Artisanat d'Exception", img: "./img/kidman-artisanat-agro-pastoral.png" }
];

// 2. PROJETS DU MAPPE MONDE (CHARTE SOBRE ET FACTUELLE)
const MAP_PROJECTS = [
  {
    id: "aus-pilbara",
    cause: "salud",
    country: "australia",
    status: "activo",
    title: "Centros Médicos de Pilbara & Mécénat Olympique",
    lat: -22.5,
    lng: 118.5,
    icon: "fa-hospital",
    desc: "Financement intégral de scanners oncologiques de dépistage précoce dans les hôpitaux régionaux du Pilbara et bourses d'entraînement de haut niveau pour les athlètes.",
    invested: "$5,072,500 AUD"
  },
  {
    id: "aus-perth",
    cause: "educacion",
    country: "australia",
    status: "activo",
    title: "Programme de Bourses Universitaires d'Excellence",
    lat: -31.95,
    lng: 115.86,
    icon: "fa-graduation-cap",
    desc: "Financement de 45 cursus universitaires complets en ingénierie et médecine pour des jeunes méritants issus de communautés isolées et rurales.",
    invested: "$2,500,000 AUD"
  },
  {
    id: "aus-kidman",
    cause: "comunidad",
    country: "australia",
    status: "activo",
    title: "Infrastructures d'Eau & Énergie Solaire en Milieu Pastoral",
    lat: -25.27,
    lng: 133.77,
    icon: "fa-handshake-angle",
    desc: "Puits solaires et unités de désalinisation assurant l'autonomie en eau potable pour les localités pastorales isolées.",
    invested: "$1,900,000 AUD"
  },
  {
    id: "esp-madrid",
    cause: "salud",
    country: "espana",
    status: "alianza",
    title: "Partenariat International de Recherche Oncologique",
    lat: 40.41,
    lng: -3.70,
    icon: "fa-hospital",
    desc: "Coopération scientifique et dotation d'équipements de pointe pour les protocoles de recherche thérapeutique conjointe.",
    invested: "€1,800,000"
  },
  {
    id: "mex-cdmx",
    cause: "comunidad",
    country: "mexico",
    status: "activo",
    title: "Équipement de Dispensaires & Cliniques Locales",
    lat: 19.43,
    lng: -99.13,
    icon: "fa-handshake-angle",
    desc: "Dotation directe de matériel biomédical essentiel et unités de diagnostic mobile pour les populations rurales.",
    invested: "$1,200,000 USD"
  },
  {
    id: "col-bogota",
    cause: "educacion",
    country: "colombia",
    status: "activo",
    title: "Centres Numériques Éducatifs en Zones Isolées",
    lat: 4.71,
    lng: -74.07,
    icon: "fa-graduation-cap",
    desc: "Création d'espaces informatiques autonomes connectés par satellite et formation technique pour collèges ruraux.",
    invested: "$950,000 USD"
  },
  {
    id: "fra-paris",
    cause: "deporte",
    country: "francia",
    status: "alianza",
    title: "Dispositif d'Accompagnement Olympique Paris 2024",
    lat: 48.85,
    lng: 2.35,
    icon: "fa-person-swimming",
    desc: "Plateforme logistique et d'accompagnement direct des délégations australiennes de natation, aviron et athlétisme aux Jeux Olympiques.",
    invested: "$1,272,500 AUD"
  }
];

// 3. ARTICLES DE PRESSE & PUBLICATIONS OFFICIELLES
const PRESS_ITEMS = [
  {
    id: 1,
    date: "16 Septembre 2026",
    title: "Gina Rinehart's wealth soars as Hancock Prospecting reports $4b profit",
    desc: "Grâce à une discipline de gestion rigoureuse et au rendement de la mine Roy Hill, le groupe consolide ses capacités d'investissement philanthropique sans équivalent.",
    img: "./img/mine-roy-hill-flotte.png"
  },
  {
    id: 2,
    date: "12 Août 2026",
    title: "Rinehart rewards Aussie athletes with $1,272,500 in bonuses — Paris 2024",
    desc: "Un hommage historique aux sportifs australiens médaillés et finalistes, leur offrant une stabilité financière totale pour préparer les futures olympiades.",
    img: "./img/jo-paris-2024-natation-hancock.png"
  },
  {
    id: 3,
    date: "28 Juillet 2026",
    title: "Inside Hancock's Rural Heritage and Pastoral Investments",
    desc: "Présentation des investissements stratégiques et du mécénat dans le pastoralisme australien avec la sauvegarde des traditions de S. Kidman & Co.",
    img: "./img/kidman-hat-co-patrimoine-rural.png"
  }
];

let leafletMapInstance = null;
let leafletMarkersLayer = null;

// 4. INITIALISATION AU CHARGEMENT DU DOM
document.addEventListener("DOMContentLoaded", () => {
  renderNews();
  renderGallery(GALLERY_ITEMS);
  setupNavigation();
  setupDonWizard();
  initLeafletMap();
  setupScrollEffects();
  initCookieBanner();
  setupActiveNavTracking();
});

// 5. NAVIGATION & MENU MOBILE ACCESSIBLE
function setupNavigation() {
  const mobileToggle = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");
  const dropdownBtn = document.getElementById("dropdownBtn");
  const navDropdown = document.getElementById("navDropdown");

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      navMenu.classList.toggle("active");
    });
  }

  if (dropdownBtn && navDropdown) {
    dropdownBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      navDropdown.classList.toggle("active");
    });
  }

  document.addEventListener("click", (e) => {
    if (navDropdown && !navDropdown.contains(e.target)) {
      navDropdown.classList.remove("active");
    }
    if (navMenu && !navMenu.contains(e.target) && mobileToggle && !mobileToggle.contains(e.target)) {
      navMenu.classList.remove("active");
    }
  });

  document.querySelectorAll(".nav-link, .dropdown-item").forEach(link => {
    link.addEventListener("click", () => {
      if (navMenu) navMenu.classList.remove("active");
      if (navDropdown) navDropdown.classList.remove("active");
    });
  });

  const openDonWizardBtn = document.getElementById("openDonWizardBtn");
  if (openDonWizardBtn) {
    openDonWizardBtn.addEventListener("click", () => {
      scrollToSection("don-mecenat");
    });
  }
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

// Active nav link highlighting on scroll
function setupActiveNavTracking() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${entry.target.id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, {
    threshold: 0.3,
    rootMargin: '-80px 0px -60% 0px'
  });

  sections.forEach(section => sectionObserver.observe(section));
}

// 6. CARTE LEAFLET INTERACTIVE — REFONTE CHROMATIQUE & MARQUEURS INSTITUTIONNELS
function initLeafletMap() {
  const mapContainer = document.getElementById("leafletMap");
  if (!mapContainer || typeof L === 'undefined') return;

  // Initialisation avec vue équilibrée
  leafletMapInstance = L.map('leafletMap', {
    center: [15.0, 10.0],
    zoom: 2,
    scrollWheelZoom: false,
    minZoom: 2,
    maxZoom: 14
  });

  // Fond de carte épuré CartoDB Positron / Voyager — Tonalités sobres, aucun fond criard
  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(leafletMapInstance);

  leafletMarkersLayer = L.layerGroup().addTo(leafletMapInstance);

  updateLeafletMapMarkers();

  // Redimensionnement automatique pour éviter tout bug d'affichage
  setTimeout(() => {
    if (leafletMapInstance) {
      leafletMapInstance.invalidateSize();
    }
  }, 400);

  window.addEventListener("resize", () => {
    if (leafletMapInstance) {
      leafletMapInstance.invalidateSize();
    }
  });
}

function updateLeafletMapMarkers() {
  if (!leafletMapInstance || !leafletMarkersLayer) return;

  leafletMarkersLayer.clearLayers();

  const causeFilter = document.getElementById("mapFilterCause") ? document.getElementById("mapFilterCause").value : "all";
  const countryFilter = document.getElementById("mapFilterCountry") ? document.getElementById("mapFilterCountry").value : "all";
  const statusFilter = document.getElementById("mapFilterStatus") ? document.getElementById("mapFilterStatus").value : "all";

  const filteredProjects = MAP_PROJECTS.filter(p => {
    const matchCause = (causeFilter === "all") || (p.cause === causeFilter);
    const matchCountry = (countryFilter === "all") || (p.country === countryFilter);
    const matchStatus = (statusFilter === "all") || (p.status === statusFilter);

    return matchCause && matchCountry && matchStatus;
  });

  filteredProjects.forEach(p => {
    // Médaillons institutionnels en Bleu Marine (#163A5C) avec bordure or/blanc
    const customIcon = L.divIcon({
      className: 'custom-leaflet-marker',
      html: `<div class="marker-pin-inner" title="${p.title}"><i class="fa-solid ${p.icon || 'fa-location-dot'}"></i></div>`,
      iconSize: [28, 28],
      iconAnchor: [14, 14]
    });

    const marker = L.marker([p.lat, p.lng], { icon: customIcon });

    marker.bindPopup(`
      <div style="padding: 0.4rem; font-family: var(--font-body); max-width: 260px;">
        <h4 style="font-family: var(--font-heading); color: var(--color-primary); font-size: 1.05rem; margin-bottom: 0.35rem; line-height: 1.25;">${p.title}</h4>
        <p style="font-size: 0.85rem; color: var(--color-text-secondary); margin-bottom: 0.6rem; line-height: 1.45;">${p.desc}</p>
        <div style="font-size: 0.88rem; font-weight: 700; color: var(--color-primary);">
          Dotation: <span style="color: var(--color-accent);">${p.invested}</span>
        </div>
      </div>
    `);

    marker.on('click', () => {
      displayProjectDetail(p);
    });

    leafletMarkersLayer.addLayer(marker);
  });
}

function displayProjectDetail(p) {
  const panel = document.getElementById("leafletInfoPanel");
  if (!panel) return;

  panel.innerHTML = `
    <div class="info-panel-content">
      <div>
        <h4 class="info-panel-title"><i class="fa-solid fa-circle-check" style="color: var(--color-accent); margin-right: 0.4rem;"></i> ${p.title}</h4>
        <p class="info-panel-desc">${p.desc}</p>
      </div>
      <div style="text-align: right;">
        <span class="info-panel-badge">Statut: ${p.status.toUpperCase()}</span>
        <div class="info-panel-invested mt-2">
          Financement accordé : <span>${p.invested}</span>
        </div>
      </div>
    </div>
  `;
}

// 7. GESTION DE LA GALERIE (AFFICHAGE DES 27 IMAGES DANS LA MODALE LIGHTBOX)
function renderGallery(items) {
  const grid = document.getElementById("galleryGrid");
  if (!grid) return;

  grid.innerHTML = "";

  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "gallery-card";
    card.onclick = () => openGalleryModal(item.img, item.title);

    card.innerHTML = `
      <div class="gallery-img-wrapper">
        <img src="${item.img}" alt="${item.title}" loading="lazy">
      </div>
      <div class="gallery-caption">
        <i class="fa-solid fa-expand"></i> ${item.title}
      </div>
    `;

    grid.appendChild(card);
  });
}

function filterGallery(category, btnElement) {
  document.querySelectorAll(".gallery-controls .filter-btn").forEach(b => b.classList.remove("active"));
  if (btnElement) btnElement.classList.add("active");

  if (category === "all") {
    renderGallery(GALLERY_ITEMS);
  } else {
    const filtered = GALLERY_ITEMS.filter(i => i.category === category);
    renderGallery(filtered);
  }
}

function openGalleryModal(imgSrc, title) {
  const modal = document.getElementById("galleryModal");
  const img = document.getElementById("galleryModalImg");
  const modalTitle = document.getElementById("galleryModalTitle");

  if (modal && img && modalTitle) {
    img.src = imgSrc;
    modalTitle.innerText = title;
    modal.classList.add("active");
  }
}

function closeGalleryModal() {
  const modal = document.getElementById("galleryModal");
  if (modal) modal.classList.remove("active");
}

// 8. FORMULAIRE INTERACTIF DE DON / SUBVENTION (WHATSAPP WIZARD)
let currentDonStep = 1;
let currentExpedienteNum = "";
let currentFechaRegistro = "";

function generateExpedienteNum() {
  const year = new Date().getFullYear();
  const num = String(Math.floor(10000 + Math.random() * 89999));
  return `FPH-${year}-DON-${num}`;
}

function getFormattedDateSpanish() {
  const now = new Date();
  const months = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
  ];
  const day = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  return `${day} de ${month} de ${year} a las ${hours}:${minutes}`;
}

function setupDonWizard() {
  // Wizard setup placeholder for potential interactive helpers
}

function nextDonStep(step) {
  if (step === 2) {
    const prenom = document.getElementById("donPrenom") ? document.getElementById("donPrenom").value.trim() : "";
    const nom = document.getElementById("donNom") ? document.getElementById("donNom").value.trim() : "";
    const profesion = document.getElementById("donProfesion") ? document.getElementById("donProfesion").value.trim() : "";
    const salaire = document.getElementById("donSalaire") ? document.getElementById("donSalaire").value.trim() : "";
    const email = document.getElementById("donEmail") ? document.getElementById("donEmail").value.trim() : "";
    const tel = document.getElementById("donTel") ? document.getElementById("donTel").value.trim() : "";
    const pais = document.getElementById("donPais") ? document.getElementById("donPais").value.trim() : "";
    const ville = document.getElementById("donVille") ? document.getElementById("donVille").value.trim() : "";
    const adresse = document.getElementById("donAdresse") ? document.getElementById("donAdresse").value.trim() : "";

    if (!prenom || !nom || !profesion || !salaire || !email || !tel || !pais || !ville || !adresse) {
      alert("Por favor, complete todos los campos obligatorios del Paso 1 (Nombre, Apellidos, Profesión, Salario, Email, Teléfono, País, Ciudad y Dirección).");
      return;
    }
  }

  if (step === 3) {
    const categorie = document.getElementById("donCategorie") ? document.getElementById("donCategorie").value : "";
    const montant = document.getElementById("donMontant") ? document.getElementById("donMontant").value.trim() : "";
    const beneficiaires = document.getElementById("donBeneficiaires") ? document.getElementById("donBeneficiaires").value.trim() : "";
    const calendario = document.getElementById("donCalendario") ? document.getElementById("donCalendario").value.trim() : "";
    const desc = document.getElementById("donDescription") ? document.getElementById("donDescription").value.trim() : "";

    if (!categorie || !montant || !beneficiaires || !calendario || !desc) {
      alert("Por favor, complete todas las especificaciones del proyecto (Causa, Monto solicitado, Beneficiarios, Calendario y Memoria explicativa).");
      return;
    }

    if (!currentExpedienteNum) {
      currentExpedienteNum = generateExpedienteNum();
      currentFechaRegistro = getFormattedDateSpanish();
    }

    generateDonSummary();
  }

  currentDonStep = step;
  
  document.querySelectorAll(".wizard-step-content").forEach(el => el.classList.remove("active"));
  const targetStep = document.getElementById(`wizardStep${step}`);
  if (targetStep) targetStep.classList.add("active");

  document.querySelectorAll(".step-item").forEach((item, index) => {
    if (index + 1 <= step) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  // Smooth scroll to form card header on step change
  const wizardCard = document.querySelector(".don-wizard-card");
  if (wizardCard) {
    wizardCard.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function prevDonStep(step) {
  currentDonStep = step;
  
  document.querySelectorAll(".wizard-step-content").forEach(el => el.classList.remove("active"));
  const targetStep = document.getElementById(`wizardStep${step}`);
  if (targetStep) targetStep.classList.add("active");

  document.querySelectorAll(".step-item").forEach((item, index) => {
    if (index + 1 <= step) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

function generateDonSummary() {
  const prenom = document.getElementById("donPrenom").value.trim();
  const nom = document.getElementById("donNom").value.trim();
  const rawOrganisme = document.getElementById("donOrganisme").value.trim();
  const entidad = rawOrganisme || "Particular";
  const profesion = document.getElementById("donProfesion").value.trim();
  const salaire = document.getElementById("donSalaire").value.trim();

  const email = document.getElementById("donEmail").value.trim();
  const tel = document.getElementById("donTel").value.trim();
  const pais = document.getElementById("donPais").value.trim();
  const ville = document.getElementById("donVille").value.trim();
  const adresse = document.getElementById("donAdresse").value.trim();

  const categorie = document.getElementById("donCategorie").value;
  const montant = document.getElementById("donMontant").value.trim();
  const beneficiaires = document.getElementById("donBeneficiaires").value.trim();
  const calendario = document.getElementById("donCalendario").value.trim();
  const desc = document.getElementById("donDescription").value.trim();

  const box = document.getElementById("summaryBox");
  if (!box) return;

  box.innerHTML = `
    <div class="expediente-banner">
      <div class="expediente-banner-top">
        <div class="expediente-badge-inst">
          <i class="fa-solid fa-landmark-dome"></i>
          <div>
            <strong>FUNDACIÓN PROSPECCIÓN HANCOCK</strong>
            <span>EXPEDIENTE OFICIAL DE SOLICITUD DE SUBVENCIÓN Y APOYO FINANCIERO</span>
          </div>
        </div>
        <div class="expediente-code-tag">
          <span class="code-label">Nº Expediente Oficial</span>
          <span class="code-value">${currentExpedienteNum}</span>
        </div>
      </div>
      <div class="expediente-date-line">
        <i class="fa-regular fa-calendar-check"></i> <strong>Fecha de Registro:</strong> ${currentFechaRegistro}
      </div>
    </div>

    <div class="expediente-block">
      <h4 class="expediente-block-title"><i class="fa-solid fa-circle-user"></i> 1. Identidad del Solicitante</h4>
      <div class="summary-row">
        <span class="summary-label">Nombre & Apellidos:</span>
        <span class="summary-val">${prenom} ${nom}</span>
      </div>
      <div class="summary-row">
        <span class="summary-label">Organización / Entidad (o indique 'Particular'):</span>
        <span class="summary-val">${entidad}</span>
      </div>
      <div class="summary-row">
        <span class="summary-label">Profesión / Cargo:</span>
        <span class="summary-val">${profesion}</span>
      </div>
      <div class="summary-row">
        <span class="summary-label">Salario mensual (rango):</span>
        <span class="summary-val">${salaire}</span>
      </div>
    </div>

    <div class="expediente-block">
      <h4 class="expediente-block-title"><i class="fa-solid fa-map-location-dot"></i> 2. Coordenadas y Ubicación Geográfica</h4>
      <div class="summary-row">
        <span class="summary-label">Email:</span>
        <span class="summary-val">${email}</span>
      </div>
      <div class="summary-row">
        <span class="summary-label">Teléfono (con indicativo internacional):</span>
        <span class="summary-val">${tel}</span>
      </div>
      <div class="summary-row">
        <span class="summary-label">País:</span>
        <span class="summary-val">${pais}</span>
      </div>
      <div class="summary-row">
        <span class="summary-label">Ciudad:</span>
        <span class="summary-val">${ville}</span>
      </div>
      <div class="summary-row">
        <span class="summary-label">Dirección completa:</span>
        <span class="summary-val">${adresse}</span>
      </div>
    </div>

    <div class="expediente-block">
      <h4 class="expediente-block-title"><i class="fa-solid fa-coins"></i> 3. Especificaciones del Proyecto y Presupuesto</h4>
      <div class="summary-row">
        <span class="summary-label">Causa asociada al proyecto:</span>
        <span class="summary-val">${categorie}</span>
      </div>
      <div class="summary-row">
        <span class="summary-label">Monto solicitado (con divisa):</span>
        <span class="summary-val highlight">${montant}</span>
      </div>
      <div class="summary-row">
        <span class="summary-label">Número estimado de beneficiarios:</span>
        <span class="summary-val">${beneficiaires}</span>
      </div>
      <div class="summary-row">
        <span class="summary-label">Calendario estimado del proyecto:</span>
        <span class="summary-val">${calendario}</span>
      </div>
    </div>

    <div class="expediente-block">
      <h4 class="expediente-block-title"><i class="fa-solid fa-file-lines"></i> 4. Memoria Explicativa del Proyecto</h4>
      <div class="expediente-memo-content">${escapeHtml(desc)}</div>
    </div>

    <div class="expediente-legal-seal">
      <i class="fa-solid fa-shield-check"></i>
      <div>
        <p>Acepto la política de privacidad y autorizo el procesamiento de mis datos. Certifico bajo juramento que toda la información provista es verídica.</p>
        <span class="seal-inst">Fundación Prospección Hancock • Sede Global Perth, Australia</span>
      </div>
    </div>
  `;
}

function escapeHtml(text) {
  if (!text) return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/\n/g, "<br>");
}

function sendDonToWhatsApp() {
  const consent = document.getElementById("donConsent");
  if (consent && !consent.checked) {
    alert("Por favor, marque la casilla de certificación bajo juramento y aceptación de privacidad antes de enviar.");
    return;
  }

  const prenom = document.getElementById("donPrenom").value.trim();
  const nom = document.getElementById("donNom").value.trim();
  const rawOrganisme = document.getElementById("donOrganisme").value.trim();
  const entidad = rawOrganisme || "Particular";
  const profesion = document.getElementById("donProfesion").value.trim();
  const salaire = document.getElementById("donSalaire").value.trim();

  const email = document.getElementById("donEmail").value.trim();
  const tel = document.getElementById("donTel").value.trim();
  const pais = document.getElementById("donPais").value.trim();
  const ville = document.getElementById("donVille").value.trim();
  const adresse = document.getElementById("donAdresse").value.trim();

  const categorie = document.getElementById("donCategorie").value;
  const montant = document.getElementById("donMontant").value.trim();
  const beneficiaires = document.getElementById("donBeneficiaires").value.trim();
  const calendario = document.getElementById("donCalendario").value.trim();
  const desc = document.getElementById("donDescription").value.trim();

  if (!currentExpedienteNum) {
    currentExpedienteNum = generateExpedienteNum();
    currentFechaRegistro = getFormattedDateSpanish();
  }

  let message = `FUNDACIÓN PROSPECCIÓN HANCOCK\n`;
  message += `EXPEDIENTE OFICIAL DE SOLICITUD DE SUBVENCIÓN Y APOYO FINANCIERO\n`;
  message += `Nº Expediente Oficial: ${currentExpedienteNum}\n`;
  message += `Fecha de Registro: ${currentFechaRegistro}\n\n`;

  message += `1. Identidad del Solicitante\n`;
  message += `Nombre & Apellidos: ${prenom} ${nom}\n`;
  message += `Organización / Entidad (o indique 'Particular'): ${entidad}\n`;
  message += `Profesión / Cargo: ${profesion}\n`;
  message += `Salario mensual (rango): ${salaire}\n\n`;

  message += `2. Coordenadas y Ubicación Geográfica\n`;
  message += `Email: ${email}\n`;
  message += `Teléfono (con indicativo internacional, ej. +34...): ${tel}\n`;
  message += `País: ${pais}\n`;
  message += `Ciudad: ${ville}\n`;
  message += `Dirección completa: ${adresse}\n\n`;

  message += `3. Especificaciones del Proyecto y Presupuesto\n`;
  message += `Causa asociada al proyecto: ${categorie}\n`;
  message += `Monto solicitado (con divisa): ${montant}\n`;
  message += `Número estimado de beneficiarios: ${beneficiaires}\n`;
  message += `Calendario estimado del proyecto: ${calendario}\n\n`;

  message += `4. Memoria Explicativa del Proyecto\n`;
  message += `${desc}\n\n`;

  message += `Acepto la política de privacidad y autorizo el procesamiento de mis datos.\n`;
  message += `Certifico bajo juramento que toda la información provista es verídica.\n\n`;
  message += `Fundación Prospección Hancock • Sede Global Perth, Australia`;

  const encodedMessage = encodeURIComponent(message);
  const waUrl = `https://wa.me/33757754014?text=${encodedMessage}`;

  window.open(waUrl, "_blank");
}

// 9. RENDU DES ACTUALITÉS ET DE LA PRESSE
function renderNews() {
  const grid = document.getElementById("newsGrid");
  if (!grid) return;

  grid.innerHTML = "";

  PRESS_ITEMS.forEach(item => {
    const card = document.createElement("div");
    card.className = "news-card";

    card.innerHTML = `
      <div class="news-img">
        <img src="${item.img}" alt="${item.title}" loading="lazy">
      </div>
      <div class="news-body">
        <div class="news-date"><i class="fa-regular fa-calendar-check"></i> ${item.date}</div>
        <h3 class="news-title">${item.title}</h3>
        <p class="news-desc">${item.desc}</p>
        <a href="https://wa.me/33757754014?text=Bonjour,%20je%20souhaite%20des%20informations%20sur%20la%20publication:%20${encodeURIComponent(item.title)}" target="_blank" class="news-link">
          Consulter le communiqué <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    `;

    grid.appendChild(card);
  });
}

// 10. FORMULAIRE GÉNÉRAL DE CONTACT
function handleContactSubmit(e) {
  e.preventDefault();
  const nom = document.getElementById("contactNom").value;
  const email = document.getElementById("contactEmail").value;
  const sujet = document.getElementById("contactSujet").value;

  alert(`Merci ${nom}. Votre message concernant « ${sujet} » a bien été transmis. Notre secrétariat vous répondra sous peu à l'adresse ${email}.`);
  e.target.reset();
}

// 11. MENTIONS LÉGALES & CONFORMITÉ
const LEGAL_TEXTS = {
  mentions: {
    title: "Mentions Légales",
    content: `
      <h4>Éditeur du site</h4>
      <p><strong>Hancock Prospecting PTY LTD</strong><br>
      Forme juridique : Proprietary Limited Company (Australie)<br>
      ACN / ABN : 008 676 417 / 69 008 676 417<br>
      Siège social : 28-42 Ventnor Avenue, West Perth, WA 6005, Australie<br>
      Téléphone / WhatsApp : +33 7 57 75 40 14 — Email : prospectinghancock0@gmail.com<br>
      Directeur de publication : Gina Rinehart (Executive Chairman)</p>

      <h4>Hébergement</h4>
      <p>Vercel Inc. — 440 N Barranca Ave #4133 Covina, CA 91723, États-Unis.</p>
      
      <h4>Propriété intellectuelle</h4>
      <p>L'ensemble des photographies, textes et éléments de marque demeurent la propriété exclusive de Hancock Prospecting PTY LTD et de ses partenaires autorisés.</p>
    `
  },
  confidentialite: {
    title: "Politique de Confidentialité",
    content: `
      <h4>Responsable du traitement</h4>
      <p>Hancock Prospecting PTY LTD (Western Australia). Délégué à la protection des données : John Macklender (prospectinghancock0@gmail.com).</p>
      <h4>Finalité du traitement</h4>
      <p>Les données collectées via le formulaire de don sont utilisées exclusivement pour l'étude et le suivi des demandes de subvention par la direction.</p>
    `
  },
  cgu: {
    title: "Conditions Générales d'Utilisation",
    content: `
      <h4>Objet</h4>
      <p>Les présentes conditions régissent l'accès et l'utilisation du site institutionnel officiel de Hancock Prospecting PTY LTD.</p>
    `
  },
  cookies: {
    title: "Gestion des Cookies",
    content: `
      <p>Ce site utilise uniquement des cookies techniques strictement nécessaires au fonctionnement de la navigation et à l'interaction sécurisée avec le service WhatsApp.</p>
    `
  }
};

function openLegalModal(type) {
  const modal = document.getElementById("legalModal");
  const title = document.getElementById("legalModalTitle");
  const body = document.getElementById("legalModalBody");

  if (LEGAL_TEXTS[type]) {
    title.innerText = LEGAL_TEXTS[type].title;
    body.innerHTML = LEGAL_TEXTS[type].content;
    modal.classList.add("active");
  }
}

function closeLegalModal() {
  const modal = document.getElementById("legalModal");
  if (modal) modal.classList.remove("active");
}

function acceptCookies() {
  const banner = document.getElementById("cookieBanner");
  if (banner) {
    banner.style.display = "none";
    localStorage.setItem("hancock_cookies_accepted", "true");
  }
}

// 12. EFFETS DE DÉFILEMENT & ANIMATIONS INSTITUTIONNELLES
function setupScrollEffects() {
  const navbar = document.getElementById('navbar');

  // Navbar shadow on scroll
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // Intersection Observer for fade-in animations
  const animatableSelectors = [
    '.stat-card',
    '.cause-card',
    '.kpi-card',
    '.news-card',
    '.testimonio-card',
    '.ops-card',
    '.timeline-item',
    '.cause-story-card',
    '.reassurance-item',
    '.section-header'
  ].join(',');

  const targets = document.querySelectorAll(animatableSelectors);
  targets.forEach(el => el.classList.add('animate-hidden'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('animate-hidden');
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  targets.forEach(el => observer.observe(el));
}

// 13. INITIALISATION DU BANDEAU COOKIES
function initCookieBanner() {
  const banner = document.getElementById('cookieBanner');
  if (!banner) return;

  if (localStorage.getItem('hancock_cookies_accepted') === 'true') {
    banner.style.display = 'none';
  } else {
    banner.style.display = 'block';
  }
}



// Fonctions globales exposées au HTML
window.scrollToSection = scrollToSection;
window.updateLeafletMapMarkers = updateLeafletMapMarkers;
window.filterGallery = filterGallery;
window.openGalleryModal = openGalleryModal;
window.closeGalleryModal = closeGalleryModal;
window.nextDonStep = nextDonStep;
window.prevDonStep = prevDonStep;
window.sendDonToWhatsApp = sendDonToWhatsApp;
window.handleContactSubmit = handleContactSubmit;
window.openLegalModal = openLegalModal;
window.closeLegalModal = closeLegalModal;
window.acceptCookies = acceptCookies;
