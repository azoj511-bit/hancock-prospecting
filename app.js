/* ==========================================================================
   HANCOCK PROSPECTING PTY LTD / FUNDACIÓN HANCOCK
   LOGIQUE APPLICATIVE, CARTE DYNAMIQUE LEAFLET & GESTION DES VISUELS
   Version Révisée 2.0 — 100% Conforme au Cahier des Charges & Espagnol Institutionnel
   ========================================================================== */

// 1. TOUTES LES 27 PHOTOS AUTHENTIQUES POUR LA GALERIE (TITRES OFFICIELS EN ESPAGNOL)
const GALLERY_ITEMS = [
  { id: 1, category: "philanthropy", title: "Mecenazgo Deportivo — Natación Olímpica París 2024", img: "./img/jo-paris-2024-natation-hancock.png" },
  { id: 2, category: "operations", title: "Flota Minera Roy Hill & Extracción en Pilbara", img: "./img/mine-roy-hill-flotte.png" },
  { id: 3, category: "leadership", title: "Mrs. Gina Rinehart AO, Presidenta Ejecutiva", img: "./img/gina-rinehart-portrait-officiel.png" },
  { id: 4, category: "philanthropy", title: "Visión Filantrópica & Compromiso Personal", img: "./img/gina-rinehart-conviction.png" },
  { id: 5, category: "leadership", title: "Alocución Oficial — Día Nacional de la Minería", img: "./img/gina-rinehart-allocution-nationale.png" },
  { id: 6, category: "operations", title: "Villa Comunitaria & Centros Operativos Pilbara", img: "./img/village-communaute-pilbara.png" },
  { id: 7, category: "leadership", title: "Gobernanza Corporativa & Socios Internacionales", img: "./img/partenaires-internationaux-board.png" },
  { id: 8, category: "leadership", title: "Cumbre de Negocios & Recepción Oficial en Tokio", img: "./img/sommet-affaires-japon.png" },
  { id: 9, category: "leadership", title: "Delegación Ejecutiva & Cooperación Industrial Global", img: "./img/delegation-executifs-partenariat.png" },
  { id: 10, category: "operations", title: "Proyecto Senex — Energía & Recursos Estratégicos", img: "./img/senex-energie-inauguration.png" },
  { id: 11, category: "leadership", title: "Discurso Inaugural Senex: Recursos para el Futuro", img: "./img/senex-discours-officiel.png" },
  { id: 12, category: "operations", title: "Equipo Central — Sede Corporativa Hancock Iron Ore", img: "./img/hancock-iron-ore-equipe-siege.png" },
  { id: 13, category: "operations", title: "Equipos Operativos de Campo en Yacimiento", img: "./img/hancock-equipe-operations-mine.png" },
  { id: 14, category: "operations", title: "Ingeniería de Automatización & Supervisión Técnica", img: "./img/ingenieurs-supervision-operations.png" },
  { id: 15, category: "operations", title: "Inclusión & Formación de Nuevos Talentos Mineros", img: "./img/talents-jeunesse-inclusion-mine.png" },
  { id: 16, category: "leadership", title: "Encuentro Bilateral con el Presidente Javier Milei", img: "./img/rencontre-diplomatique-milei-1.png" },
  { id: 17, category: "leadership", title: "Diálogo Estratégico en Foros Económicos Globales", img: "./img/rencontre-diplomatique-milei-2.png" },
  { id: 18, category: "leadership", title: "Cena de Gala Diplomática & Alianzas Internacionales", img: "./img/rencontre-diplomatique-milei-3.png" },
  { id: 19, category: "leadership", title: "Recepción de Alto Nivel & Relaciones Institucionales", img: "./img/gala-international-farage-1.png" },
  { id: 20, category: "leadership", title: "Gala de Prestigio & Cooperación Bilateral", img: "./img/gala-international-farage-2.png" },
  { id: 21, category: "philanthropy", title: "S. Kidman & Co — Sombreros Tradicionales & Patrimonio Rural", img: "./img/kidman-hat-co-patrimoine-rural.png" },
  { id: 22, category: "philanthropy", title: "Subvenciones a Comunidades Rurales & Asentamientos Aislados", img: "./img/subventions-communautes-rurales.png" },
  { id: 23, category: "philanthropy", title: "Alocución Filantrópica sobre Desarrollo Regional", img: "./img/discours-philanthropique-rural.png" },
  { id: 24, category: "philanthropy", title: "Atención Sanitaria de Proximidad & Salud en el Interior", img: "./img/engagement-communautaire-regional.png" },
  { id: 25, category: "philanthropy", title: "Ceremonia Oficial de Becas Universitarias de Excelencia", img: "./img/bourses-prix-excellence-rural.png" },
  { id: 26, category: "philanthropy", title: "Celebración con Productores y Familias Pastorales", img: "./img/celebration-partenaires-pastoraux.png" },
  { id: 27, category: "operations", title: "S. Kidman & Co — Ganadería Bovina Premium & Artesanía Australiana", img: "./img/kidman-artisanat-agro-pastoral.png" }
];

// 2. PROJETS DE LA CARTE MONDIALE INTERACTIVE
const MAP_PROJECTS = [
  {
    id: "aus-pilbara",
    cause: "salud",
    country: "australia",
    status: "activo",
    title: "Centros Médicos de Pilbara & Mécénat Olímpico",
    lat: -22.5,
    lng: 118.5,
    icon: "fa-hospital",
    desc: "Financiación integral de escáneres oncológicos de detección temprana en hospitales comarcales de Pilbara y becas de élite para deportistas olímpicos.",
    invested: "$5,072,500 AUD",
    location: "Pilbara, Australia Occidental"
  },
  {
    id: "aus-perth",
    cause: "educacion",
    country: "australia",
    status: "activo",
    title: "Programa de Becas Universitarias de Excelencia",
    lat: -31.95,
    lng: 115.86,
    icon: "fa-graduation-cap",
    desc: "Subvención de 45 matrículas universitarias completas en ingeniería y medicina para jóvenes con talento procedentes de comunidades rurales e indígenas.",
    invested: "$2,500,000 AUD",
    location: "Perth, Australia Occidental"
  },
  {
    id: "aus-kidman",
    cause: "comunidad",
    country: "australia",
    status: "activo",
    title: "Infraestructuras de Agua Solar en Territorios Pastorales",
    lat: -25.27,
    lng: 133.77,
    icon: "fa-handshake-angle",
    desc: "Pozos solares y plantas de purificación que garantizan agua potable continua a poblaciones ganaderas y pequeños poblados aislados.",
    invested: "$1,900,000 AUD",
    location: "Territorio Central & Outback Australiano"
  },
  {
    id: "esp-madrid",
    cause: "salud",
    country: "espana",
    status: "alianza",
    title: "Alianza Internacional en Investigación Oncológica",
    lat: 40.41,
    lng: -3.70,
    icon: "fa-hospital",
    desc: "Convenio de cooperación biomédica y dotación de tecnología diagnóstica de alta complejidad para ensayos clínicos terapéuticos.",
    invested: "€1,800,000 EUR",
    location: "Madrid, España"
  },
  {
    id: "mex-cdmx",
    cause: "comunidad",
    country: "mexico",
    status: "activo",
    title: "Equipamiento de Dispensarios & Brigadas de Salud Móvil",
    lat: 19.43,
    lng: -99.13,
    icon: "fa-handshake-angle",
    desc: "Donación directa de equipos biomédicos y unidades móviles de diagnóstico médico para comunidades rurales alejadas.",
    invested: "$1,200,000 USD",
    location: "Regiones Rurales, México"
  },
  {
    id: "col-bogota",
    cause: "educacion",
    country: "colombia",
    status: "activo",
    title: "Aulas Digitales & Conectividad Rural",
    lat: 4.71,
    lng: -74.07,
    icon: "fa-graduation-cap",
    desc: "Instalación de centros informáticos satelitales con energía solar para colegios técnicos y capacitación juvenil.",
    invested: "$950,000 USD",
    location: "Zonas de Difícil Acceso, Colombia"
  },
  {
    id: "fra-paris",
    cause: "deporte",
    country: "francia",
    status: "alianza",
    title: "Centro de Apoyo a Delegaciones Olímpicas París 2024",
    lat: 48.85,
    lng: 2.35,
    icon: "fa-person-swimming",
    desc: "Plataforma logística e incentivos directos para los atletas australianos clasificados en natación, remo y vóley.",
    invested: "$1,272,500 AUD",
    location: "París, Francia"
  }
];

// 3. PROFILS DÉTAILLÉS DE L'ÉQUIPE DIRIGEANTE (SPECIFICATION F5 CAHIER DES CHARGES)
const TEAM_PROFILES = {
  1: {
    name: "Mrs. Gina Rinehart AO",
    role: "Presidenta Ejecutiva (Executive Chairman)",
    company: "Hancock Prospecting, Roy Hill Holdings, S. Kidman & Co",
    category: "Presidencia & Dirección General",
    img: "./img/comite-gina-rinehart.png",
    quote: "«El verdadero valor del éxito industrial reside en nuestra capacidad de devolver a la sociedad y construir un futuro digno y próspero para nuestros ciudadanos.»",
    bio: `Gina Rinehart es la figura empresarial y filantrópica más influyente de Australia. Tras asumir el liderazgo de Hancock Prospecting en 1992, rescató la compañía de una situación financiera crítica y la convirtió en uno de los conglomerados mineros, energéticos y agropecuarios privados más prósperos y admirados del planeta.
    
    Bajo su dirección se concibió y financió el megaproyecto integrado de mineral de hierro Roy Hill (10.000 millones de USD), dotado de ferrocarril propio de 344 km y terminal portuaria automatizada.
    
    Paralelamente, Gina Rinehart es la mayor mecenas individual de Australia: sostiene incondicionalmente a los atletas olímpicos de natación, remo y voleibol, financia equipos oncológicos de última generación en hospitales regionales y otorga becas integrales a estudiantes del interior rural.`,
    achievements: [
      "Presidenta Ejecutiva desde 1992",
      "Promotora del megaproyecto minero Roy Hill ($10B USD)",
      "Mayor donante privada del deporte olímpico australiano",
      "Pionera en el desarrollo ganadero y agropecuario de S. Kidman & Co"
    ]
  },
  2: {
    name: "Mr. Tad Watroba",
    role: "Director Ejecutivo (Executive Director)",
    company: "Hancock Prospecting PTY LTD",
    category: "Comité Ejecutivo",
    img: "./img/comite-tad-watroba.png",
    quote: "«El rigor en la ingeniería y la visión a largo plazo son los cimientos inmutables de cada yacimiento que convertimos en motor de prosperidad.»",
    bio: `Tad Watroba cuenta con más de cinco décadas de experiencia en la industria minera internacional, tanto en operaciones a cielo abierto como subterráneas. Ha sido una pieza fundamental en el desarrollo de los proyectos de mineral de hierro más emblemáticos de Australia Occidental.
    
    Su dilatada trayectoria abarca la planificación operativa, estudios de viabilidad geológica, evaluación financiera de adquisiciones complejas y negociaciones comerciales de alto nivel con socios de Asia y Europa.`,
    achievements: [
      "Más de 50 años de experiencia técnica minera",
      "Líder en estudios de viabilidad y relaciones internacionales",
      "Miembro del Consejo de Administración de las principales filiales del grupo"
    ]
  },
  3: {
    name: "Mr. Jay Newby",
    role: "Director Ejecutivo (Executive Director)",
    company: "Hancock Prospecting PTY LTD",
    category: "Comité Ejecutivo",
    img: "./img/comite-jay-newby.png",
    quote: "«La solvencia financiera, la disciplina contable y la transparencia ética permiten que nuestra fundación mantenga su independencia total.»",
    bio: `Contador colegiado incorporado al Instituto de Contadores Públicos de Australia (ICAA) en 1988. Jay Newby aporta una sólida maestría en finanzas corporativas, auditoría fiscal, estructuración de capital y fusiones & adquisiciones.
    
    Ha supervisado las transacciones estratégicas más determinantes de Hancock Prospecting durante las últimas dos décadas, garantizando una posición de tesorería y solvencia institucional inigualables en el mercado privado australiano.`,
    achievements: [
      "Miembro distinguido de Chartered Accountants Australia",
      "Especialista en estructuración financiera de proyectos de recursos naturales",
      "Supervisión de la gobernanza contable y fiscal corporativa"
    ]
  },
  4: {
    name: "Mr. Garry Korte",
    role: "Director General del Grupo (Group CEO)",
    company: "Hancock Prospecting PTY LTD",
    category: "Dirección General",
    img: "./img/comite-garry-korte.png",
    quote: "«Nuestra misión operativa es ejecutar con excelencia para que el beneficio de los recursos naturales impacte positivamente a toda la sociedad.»",
    bio: `Con más de 30 años de experiencia directiva en el sector minero global, Garry Korte se incorporó a Roy Hill como director financiero (CFO) en 2012, liderando la histórica financiación sindicada de proyectos por 7.200 millones de USD, la más grande de la historia en el sector de recursos minerales.
    
    En 2016 fue nombrado CEO de Hancock Prospecting, coordinando el crecimiento integral de los negocios de hierro, gas, carbón y ganadería extensiva.`,
    achievements: [
      "Liderazgo en la financiación sindicada de $7.2B USD para Roy Hill",
      "CEO del Grupo Hancock Prospecting desde 2016",
      "Supervisión ejecutiva de más de 4.000 colaboradores y contratistas"
    ]
  },
  5: {
    name: "Stuart Johnston",
    role: "CEO de Hancock Energy",
    company: "Hancock Energy & Senex Energy",
    category: "Energía & Gas",
    img: "./img/equipe-stuart-johnston.png",
    quote: "«El desarrollo energético confiable y la transición responsable son indispensables para la soberanía económica de nuestra nación.»",
    bio: `Más de tres décadas al frente de grandes empresas de gasoductos, infraestructuras energéticas y suministros industriales. Anteriormente ejerció como CEO de Squadron Energy y del gasoducto troncal Dampier-Bunbury (DBP), eje vertebral del gas en Australia Occidental.
    
    Actualmente lidera las inversiones en gas natural de Senex Energy y el portfolio de transición energética con los más elevados estándares medioambientales.`,
    achievements: [
      "Ex Director General de Dampier-Bunbury Pipeline (DBP)",
      "CEO de Hancock Energy y líder en la expansión de Senex",
      "Especialista en seguridad de suministro y tecnologías de reducción de emisiones"
    ]
  },
  6: {
    name: "Adam Giles",
    role: "CEO de Hancock Agriculture & S. Kidman & Co",
    company: "Hancock Agriculture",
    category: "Agricultura & Kidman",
    img: "./img/equipe-adam-giles.png",
    quote: "«Preservar el orgullo pastoral australiano e invertir en tecnología ganadera de precisión garantiza alimentos de calidad para el mundo entero.»",
    bio: `Adam Giles ocupó el cargo de 10º Ministro Principal del Territorio del Norte de Australia (2013-2016). Cuenta con una profunda experiencia en administración pública, desarrollo de infraestructuras regionales y relaciones con comunidades autóctonas.
    
    Como CEO de Hancock Agriculture y de la histórica S. Kidman & Co, supervisa millones de hectáreas de producción ganadera bovina premium (Wagyu y Angus) y la emblemática línea de calzado y sombreros artesanales Kidman.`,
    achievements: [
      "10º Ministro Principal del Territorio del Norte (2013-2016)",
      "CEO de Hancock Agriculture y S. Kidman & Co",
      "Impulsor del bienestar animal y la digitalización de fincas ganaderas"
    ]
  },
  7: {
    name: "Gerhard Veldsman",
    role: "CEO de Operaciones Mineras",
    company: "Roy Hill & Atlas Iron",
    category: "Minería & Operaciones",
    img: "./img/equipe-gerhard-veldsman.png",
    quote: "«La seguridad absoluta de nuestros trabajadores y la fiabilidad de nuestros sistemas automatizados son innegociables.»",
    bio: `Gerhard Veldsman posee una vasta trayectoria internacional en la gestión de operaciones de mineral de hierro a gran escala. Tiene bajo su responsabilidad la producción continua y la eficiencia logística de la mina Roy Hill y las operaciones de Atlas Iron en la cuenca de Pilbara.`,
    achievements: [
      "Supervisión directa de las operaciones de extracción y procesamiento",
      "Récords históricos de exportación anual de mineral de hierro",
      "Implementación de estándares mundiales en seguridad laboral"
    ]
  },
  8: {
    name: "Sanjiv Manchanda",
    role: "CEO de Proyectos Estratégicos",
    company: "Hancock Prospecting PTY LTD",
    category: "Proyectos & Expansión",
    img: "./img/equipe-sanjiv-manchanda.png",
    quote: "«Transformamos planos de ingeniería en infraestructuras industriales de vanguardia que perduran por generaciones.»",
    bio: `Sanjiv Manchanda supervisa la cartera integral de proyectos de capital y expansiones del grupo, incluyendo nuevas reservas de hierro, puertos automatizados e infraestructuras ferroviarias en Pilbara.`,
    achievements: [
      "Dirección técnica de megaproyectos de infraestructura",
      "Gestión de adquisiciones de plantas de trituración y vías férreas",
      "Coordinación de estudios de impacto ambiental y licencias"
    ]
  },
  9: {
    name: "Jabez Huang",
    role: "Director Financiero (CFO)",
    company: "Hancock Prospecting PTY LTD",
    category: "Finanzas Corporativas",
    img: "./img/equipe-jabez-huang.png",
    quote: "«La disciplina fiscal y la gobernanza financiera transparente son la garantía de sostenibilidad de todos nuestros programas.»",
    bio: `Con más de dos décadas de experiencia en auditoría, planificación fiscal corporativa y tesorería en el sector minero, Jabez Huang asegura la estabilidad contable y el cumplimiento regulatorio de todas las sociedades del grupo.`,
    achievements: [
      "Supervisión del cumplimiento regulatorio australiano e internacional",
      "Gestión de tesorería y relaciones con entidades bancarias",
      "Auditoría interna y control financiero corporativo"
    ]
  }
};

// 4. ARTICLES DE PRESSE & PUBLICATIONS OFFICIELLES
const PRESS_ITEMS = [
  {
    id: 1,
    date: "16 Septiembre 2026",
    title: "La sólida gestión de Hancock Prospecting consolida sus beneficios y su fondo filantrópico",
    desc: "Gracias a la eficiencia productiva de la mina Roy Hill y a la diversificación en energía y ganadería, el grupo amplía su capacidad de mecenazgo social sin precedentes en Australia.",
    img: "./img/mine-roy-hill-flotte.png"
  },
  {
    id: 2,
    date: "12 Agosto 2026",
    title: "Gina Rinehart premia a los atletas olímpicos australianos con $1,272,500 AUD en París 2024",
    desc: "Un reconocimiento histórico al esfuerzo y dedicación de nadadores, remeros y atletas, garantizándoles tranquilidad material para su preparación hacia las próximas citas olímpicas.",
    img: "./img/jo-paris-2024-natation-hancock.png"
  },
  {
    id: 3,
    date: "28 Julio 2026",
    title: "El patrimonio pastoral y la salvaguarda de las tradiciones australianas con S. Kidman & Co",
    desc: "Un informe sobre las inversiones estratégicas y el respaldo a las comunidades ganaderas del interior, combinando tecnología moderna con el respeto por la artesanía clásica.",
    img: "./img/kidman-hat-co-patrimoine-rural.png"
  }
];

// 5. TEXTES LÉGAUX INTÉGRAUX EN ESPAGNOL (CONFORMES AU CAHIER DES CHARGES SECTIONS 8, 9, 10)
const LEGAL_TEXTS = {
  mentions: {
    title: "Aviso Legal & Información Corporativa",
    content: `
      <h4>1. Editor del Sitio Web</h4>
      <p><strong>Hancock Prospecting PTY LTD</strong><br>
      Forma jurídica: Proprietary Limited Company (Constituida bajo las leyes de Australia)<br>
      ACN: 008 676 417 | ABN: 69 008 676 417<br>
      Sede corporativa: 28-42 Ventnor Avenue, West Perth, Western Australia (WA 6005), Australia.<br>
      Teléfono / WhatsApp oficial: +33 7 57 75 40 14<br>
      Correo electrónico de secretaría: prospectinghancock0@gmail.com<br>
      Directora de la publicación: Mrs. Gina Rinehart AO (Presidenta Ejecutiva / Executive Chairman)</p>

      <h4>2. Alojamiento e Infraestructura Técnica</h4>
      <p>Alojamiento provisto por Vercel Inc., 440 N Barranca Ave #4133 Covina, CA 91723, Estados Unidos.<br>
      Transmisión de datos bajo cifrado seguro TLS/HTTPS con certificación SSL de 256 bits.</p>

      <h4>3. Propiedad Intelectual y Derechos Reservados</h4>
      <p>Todos los elementos del portal (fotografías oficiales, logotipos, marcas comerciales, material audiovisual, textos informativos, arquitectura de software y código fuente) son propiedad exclusiva de Hancock Prospecting PTY LTD o de sus licenciatarios autorizados. Queda terminantemente prohibida cualquier reproducción, modificación o difusión sin consentimiento previo por escrito.</p>

      <h4>4. Exención de Responsabilidad</h4>
      <p>La información difundida en este portal institucional se brinda a título informativo respecto a las actividades filantrópicas y comerciales del grupo. Hancock Prospecting PTY LTD no se responsabiliza de posibles interrupciones técnicas ni del contenido de sitios externos enlazados.</p>
    `
  },
  confidentialite: {
    title: "Política de Privacidad & Protección de Datos",
    content: `
      <h4>1. Responsable del Tratamiento</h4>
      <p><strong>Hancock Prospecting PTY LTD</strong>, 28-42 Ventnor Avenue, West Perth, WA 6005, Australia.<br>
      Delegado de Protección de Datos (DPO): John Macklender (prospectinghancock0@gmail.com).</p>

      <h4>2. Datos Recabados y Finalidad</h4>
      <p>En el marco del proceso de solicitud de subvenciones y donaciones, recabamos los datos estrictamente necesarios para la evaluación del expediente oficial: identidad del solicitante, organización, cargo, coordenadas de contacto, presupuesto solicitado y memoria descriptiva del proyecto.</p>

      <h4>3. Base Legal y Destinatarios</h4>
      <p>El tratamiento se fundamenta en el consentimiento expreso del usuario al remitir su solicitud y en el interés legítimo de procesar debidamente las peticiones filantrópicas. Los expedientes son analizados exclusivamente por la secretaría ejecutiva y el comité evaluador de la fundación. <strong>En ningún caso los datos se comercializan o ceden a terceros con fines publicitarios.</strong></p>

      <h4>4. Derechos del Interesado</h4>
      <p>De conformidad con las normativas internacionales aplicables (Privacy Act 1988 y RGPD), usted puede solicitar en todo momento el acceso, rectificación, portabilidad o supresión de sus datos personales dirigiendo una solicitud motivada a <a href="mailto:prospectinghancock0@gmail.com">prospectinghancock0@gmail.com</a>.</p>
    `
  },
  cgu: {
    title: "Términos y Condiciones Generales de Uso",
    content: `
      <h4>1. Objeto y Ámbito de Aplicación</h4>
      <p>Las presentes condiciones rigen el acceso y uso del portal oficial de Hancock Prospecting PTY LTD y de su Fundación. La navegación por el sitio o la cumplimentación del formulario de subvenciones implica la aceptación plena de estos términos.</p>

      <h4>2. Procedimiento de Solicitud de Donación</h4>
      <p>Toda solicitud formulada a través del formulario interactivo genera un número de expediente institucional único. Dicha solicitud es remitida directamente a nuestra secretaría ejecutiva mediante el canal oficial de WhatsApp (+33 7 57 75 40 14) para su registro, validación documental y posterior evaluación técnica.</p>

      <h4>3. Veracidad de la Información</h4>
      <p>El solicitante certifica bajo juramento que toda la documentación y datos consignados en su expediente oficial son auténticos, verificables y responden fielmente a la realidad del proyecto presentado.</p>

      <h4>4. Ley Aplicable</h4>
      <p>Las presentes condiciones se rigen e interpretan de conformidad con las leyes vigentes en el estado de Western Australia (Australia), sometiéndose las partes a los tribunales competentes de dicha jurisdicción.</p>
    `
  },
  cookies: {
    title: "Política de Gestión de Cookies",
    content: `
      <h4>1. Uso de Cookies Técnicas</h4>
      <p>Este sitio web utiliza única y exclusivamente cookies de carácter técnico y estrictamente necesarias para garantizar la navegación segura, almacenar sus preferencias de visualización y permitir la transmisión encriptada de solicitudes.</p>

      <h4>2. Ausencia de Rastreo Publicitario</h4>
      <p>No empleamos cookies publicitarias de terceros ni herramientas intrusivas de perfilado de comportamiento comercial. Puede configurar o revocar el consentimiento técnico en cualquier momento.</p>
    `
  }
};

// VARIABLES GLOBALES
let leafletMapInstance = null;
let leafletMarkersLayer = null;
let currentGalleryIndex = 0;
let currentDonStep = 1;
let currentExpedienteNum = "";
let currentFechaRegistro = "";

// HERO BACKGROUND IMAGES POUR LE SWITCHER DYNAMIQUE (CARTE BLANCHE)
const HERO_BG_IMAGES = [
  "./img/mine-roy-hill-flotte.png",
  "./img/jo-paris-2024-natation-hancock.png",
  "./img/hancock-iron-ore-equipe-siege.png"
];

// 6. INITIALISATION PRINCIPALE AU CHARGEMENT
document.addEventListener("DOMContentLoaded", () => {
  renderNews();
  renderGallery(GALLERY_ITEMS);
  setupNavigation();
  initHeroDynamicBg();
  initLeafletMap();
  setupScrollEffectsAndProgress();
  initCookieBanner();
  setupActiveNavTracking();
  setupKeyboardShortcuts();
});

// 7. HERO SECTION DYNAMIQUE (FOND AU CHOIX & DIAPORAMA)
function initHeroDynamicBg() {
  const bgEl = document.getElementById("heroDynamicBg");
  if (!bgEl) return;
  bgEl.style.backgroundImage = `url('${HERO_BG_IMAGES[0]}')`;
}

function switchHeroBg(index) {
  if (index < 0 || index >= HERO_BG_IMAGES.length) return;
  const bgEl = document.getElementById("heroDynamicBg");
  if (!bgEl) return;

  // Effet de fondu enchaîné subtil
  bgEl.style.opacity = "0.3";
  setTimeout(() => {
    bgEl.style.backgroundImage = `url('${HERO_BG_IMAGES[index]}')`;
    bgEl.style.opacity = "1";
  }, 200);

  // Mettre à jour l'état actif des boutons
  const btns = document.querySelectorAll(".hero-bg-switcher .switcher-btn");
  btns.forEach((btn, i) => {
    if (i === index) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

// 8. NAVIGATION & MENU MOBILE
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

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// 9. CARTE LEAFLET INTERACTIVE — CORRECTION RADICALE SANS CLÉ API
function initLeafletMap() {
  const mapContainer = document.getElementById("leafletMap");
  if (!mapContainer || typeof L === 'undefined') return;

  // Si déjà initialisée, réinitialiser proprement
  if (leafletMapInstance) {
    leafletMapInstance.remove();
    leafletMapInstance = null;
  }

  // Vue mondiale équilibrée centrée sur un panorama clair
  leafletMapInstance = L.map('leafletMap', {
    center: [10.0, 30.0],
    zoom: 2,
    scrollWheelZoom: false,
    minZoom: 2,
    maxZoom: 16
  });

  // TUILES OPENSTREETMAP OFFICIELLES HAUTE DÉFINITION — 100% GRATUIT, AUCUNE CLÉ REQUISE
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors • Hancock Philanthropic Map',
    maxZoom: 19
  }).addTo(leafletMapInstance);

  leafletMarkersLayer = L.layerGroup().addTo(leafletMapInstance);

  updateLeafletMapMarkers();

  // Forcer le redimensionnement Leaflet à intervalles pour garantir un affichage immédiat et parfait
  setTimeout(() => {
    if (leafletMapInstance) leafletMapInstance.invalidateSize();
  }, 100);

  setTimeout(() => {
    if (leafletMapInstance) leafletMapInstance.invalidateSize();
  }, 500);

  setTimeout(() => {
    if (leafletMapInstance) leafletMapInstance.invalidateSize();
  }, 1500);

  window.addEventListener("resize", () => {
    if (leafletMapInstance) leafletMapInstance.invalidateSize();
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
    // Médaillon doré et bleu marine institutionnel sans bordure blanche parasite
    const customIcon = L.divIcon({
      className: 'custom-leaflet-marker-wrapper',
      html: `<div class="marker-pin-inner" id="marker-${p.id}" title="${p.title}"><i class="fa-solid ${p.icon || 'fa-location-dot'}"></i></div>`,
      iconSize: [32, 32],
      iconAnchor: [16, 16]
    });

    const marker = L.marker([p.lat, p.lng], { icon: customIcon });

    marker.bindPopup(`
      <div class="leaflet-custom-popup">
        <h4>${p.title}</h4>
        <span class="popup-loc"><i class="fa-solid fa-location-dot"></i> ${p.location}</span>
        <p>${p.desc}</p>
        <div class="popup-bottom">
          <span class="popup-invested">Subvención: <strong>${p.invested}</strong></span>
          <button class="btn btn-sm btn-navy popup-zoom-btn" onclick="zoomToProject(${p.lat}, ${p.lng})">
            <i class="fa-solid fa-magnifying-glass-plus"></i> Centrar
          </button>
        </div>
      </div>
    `);

    marker.on('click', () => {
      displayProjectDetail(p);
      highlightMarker(p.id);
    });

    leafletMarkersLayer.addLayer(marker);
  });
}

function zoomToProject(lat, lng) {
  if (leafletMapInstance) {
    leafletMapInstance.setView([lat, lng], 6, { animate: true });
  }
}

function highlightMarker(projectId) {
  document.querySelectorAll(".marker-pin-inner").forEach(el => el.classList.remove("active-pin"));
  const currentPin = document.getElementById(`marker-${projectId}`);
  if (currentPin) {
    currentPin.classList.add("active-pin");
  }
}

function displayProjectDetail(p) {
  const panel = document.getElementById("leafletInfoPanel");
  if (!panel) return;

  const statusBadge = p.status === 'activo' 
    ? '<span class="info-panel-badge badge-active"><i class="fa-solid fa-circle-check"></i> Proyecto Activo</span>'
    : '<span class="info-panel-badge badge-alliance"><i class="fa-solid fa-handshake"></i> Alianza Internacional</span>';

  panel.innerHTML = `
    <div class="info-panel-content">
      <div class="info-panel-main">
        <h4 class="info-panel-title"><i class="fa-solid fa-location-dot" style="color: var(--color-accent); margin-right: 0.4rem;"></i> ${p.title}</h4>
        <p class="info-panel-loc"><i class="fa-solid fa-earth-oceania"></i> ${p.location}</p>
        <p class="info-panel-desc">${p.desc}</p>
      </div>
      <div class="info-panel-side">
        ${statusBadge}
        <div class="info-panel-invested">
          Subvención asignada: <span>${p.invested}</span>
        </div>
        <button class="btn btn-sm btn-outline-navy mt-2" onclick="zoomToProject(${p.lat}, ${p.lng})">
          <i class="fa-solid fa-crosshairs"></i> Acercar en el mapa
        </button>
      </div>
    </div>
  `;
}

// 10. GESTION DE LA GALERIE (27 PHOTOS, LIGHTBOX FLÉCHÉE & COMPTEUR)
function renderGallery(items) {
  const grid = document.getElementById("galleryGrid");
  if (!grid) return;

  grid.innerHTML = "";

  items.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "gallery-card";
    card.onclick = () => openGalleryModal(index);

    card.innerHTML = `
      <div class="gallery-img-wrapper">
        <img src="${item.img}" alt="${item.title}" loading="lazy">
        <div class="gallery-hover-overlay">
          <i class="fa-solid fa-expand"></i>
          <span>Ampliar</span>
        </div>
      </div>
      <div class="gallery-caption">
        <strong>${item.title}</strong>
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

function openGalleryModal(index) {
  currentGalleryIndex = index;
  updateGalleryModalContent();

  const modal = document.getElementById("galleryModal");
  if (modal) modal.classList.add("active");
}

function updateGalleryModalContent() {
  const item = GALLERY_ITEMS[currentGalleryIndex];
  if (!item) return;

  const img = document.getElementById("galleryModalImg");
  const title = document.getElementById("galleryModalTitle");
  const counter = document.getElementById("galleryModalCounter");

  if (img) img.src = item.img;
  if (title) title.innerText = item.title;
  if (counter) counter.innerText = `Fotografía ${currentGalleryIndex + 1} de ${GALLERY_ITEMS.length}`;
}

function nextGalleryImage() {
  currentGalleryIndex = (currentGalleryIndex + 1) % GALLERY_ITEMS.length;
  updateGalleryModalContent();
}

function prevGalleryImage() {
  currentGalleryIndex = (currentGalleryIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
  updateGalleryModalContent();
}

function closeGalleryModal() {
  const modal = document.getElementById("galleryModal");
  if (modal) modal.classList.remove("active");
}

// 11. GESTION DE LA SECTION ÉQUIPE (FILTRES, RECHERCHE ET MODALE DÉTAILLÉE)
function filterTeamMembers() {
  const searchInput = document.getElementById("teamSearchInput");
  const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
  const cards = document.querySelectorAll("#teamUnifiedGrid .team-card");

  cards.forEach(card => {
    const name = (card.getAttribute("data-name") || "").toLowerCase();
    const role = (card.getAttribute("data-role") || "").toLowerCase();
    const textContent = card.innerText.toLowerCase();

    if (!query || name.includes(query) || role.includes(query) || textContent.includes(query)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}

function filterTeamCategory(category, btnElement) {
  const tabs = document.querySelectorAll("#teamFilterGroup .team-tab-btn");
  tabs.forEach(t => t.classList.remove("active"));
  if (btnElement) btnElement.classList.add("active");

  const cards = document.querySelectorAll("#teamUnifiedGrid .team-card");
  cards.forEach(card => {
    const cardCat = card.getAttribute("data-category") || "";
    if (category === "all" || cardCat.includes(category)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });

  const searchInput = document.getElementById("teamSearchInput");
  if (searchInput) searchInput.value = "";
}

function openTeamModal(id) {
  const profile = TEAM_PROFILES[id];
  if (!profile) return;

  const modal = document.getElementById("teamModal");
  const body = document.getElementById("teamModalBody");
  if (!modal || !body) return;

  const achievementsList = profile.achievements.map(a => `<li><i class="fa-solid fa-circle-check"></i> ${a}</li>`).join("");

  body.innerHTML = `
    <div class="team-modal-grid">
      <div class="team-modal-photo-col">
        <img src="${profile.img}" alt="${profile.name}" class="team-modal-avatar">
        <span class="team-modal-category">${profile.category}</span>
        <div class="team-modal-company">${profile.company}</div>
      </div>
      <div class="team-modal-info-col">
        <h3 class="team-modal-name">${profile.name}</h3>
        <span class="team-modal-role">${profile.role}</span>

        <blockquote class="team-modal-quote">
          <i class="fa-solid fa-quote-left"></i>
          <p>${profile.quote}</p>
        </blockquote>

        <div class="team-modal-bio-text">
          <p>${profile.bio.replace(/\n\n/g, '</p><p>')}</p>
        </div>

        <div class="team-modal-achievements">
          <h4><i class="fa-solid fa-award"></i> Responsabilidades &amp; Logros Principales</h4>
          <ul>${achievementsList}</ul>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("active");
}

function closeTeamModal() {
  const modal = document.getElementById("teamModal");
  if (modal) modal.classList.remove("active");
}

// 12. GESTION DU FORMULAIRE DE DON (WHATSAPP WIZARD & EXPORT EXPEDIENTE)
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
      showToast("Por favor, complete todos los campos obligatorios del Paso 1 (Nombre, Apellidos, Profesión, Salario, Email, Teléfono, País, Ciudad y Dirección).", "error");
      highlightMissingFields(["donPrenom", "donNom", "donProfesion", "donSalaire", "donEmail", "donTel", "donPais", "donVille", "donAdresse"]);
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
      showToast("Por favor, complete todas las especificaciones del proyecto (Causa, Monto solicitado, Beneficiarios, Calendario y Memoria descriptiva).", "error");
      highlightMissingFields(["donCategorie", "donMontant", "donBeneficiaires", "donCalendario", "donDescription"]);
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

function highlightMissingFields(fieldIds) {
  fieldIds.forEach(id => {
    const el = document.getElementById(id);
    if (el && !el.value.trim()) {
      el.classList.add("input-error");
      el.addEventListener("input", () => el.classList.remove("input-error"), { once: true });
    }
  });
}

function generateDonSummary() {
  const prenom = document.getElementById("donPrenom").value.trim();
  const nom = document.getElementById("donNom").value.trim();
  const rawOrganisme = document.getElementById("donOrganisme").value.trim();
  const entidad = rawOrganisme || "Particular / Solicitud a título individual";
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
            <strong>FUNDACIÓN PROSPECCIÓN HANCOCK PTY LTD</strong>
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
        <span class="summary-label">Nombre &amp; Apellidos:</span>
        <span class="summary-val">${prenom} ${nom}</span>
      </div>
      <div class="summary-row">
        <span class="summary-label">Organización / Entidad:</span>
        <span class="summary-val">${entidad}</span>
      </div>
      <div class="summary-row">
        <span class="summary-label">Profesión / Cargo:</span>
        <span class="summary-val">${profesion}</span>
      </div>
      <div class="summary-row">
        <span class="summary-label">Rango salarial mensual:</span>
        <span class="summary-val">${salaire}</span>
      </div>
    </div>

    <div class="expediente-block">
      <h4 class="expediente-block-title"><i class="fa-solid fa-map-location-dot"></i> 2. Coordenadas y Ubicación Geográfica</h4>
      <div class="summary-row">
        <span class="summary-label">Correo electrónico:</span>
        <span class="summary-val">${email}</span>
      </div>
      <div class="summary-row">
        <span class="summary-label">Teléfono oficial:</span>
        <span class="summary-val">${tel}</span>
      </div>
      <div class="summary-row">
        <span class="summary-label">País / Ciudad:</span>
        <span class="summary-val">${pais} — ${ville}</span>
      </div>
      <div class="summary-row">
        <span class="summary-label">Dirección completa:</span>
        <span class="summary-val">${adresse}</span>
      </div>
    </div>

    <div class="expediente-block">
      <h4 class="expediente-block-title"><i class="fa-solid fa-coins"></i> 3. Especificaciones del Proyecto y Presupuesto</h4>
      <div class="summary-row">
        <span class="summary-label">Área / Causa:</span>
        <span class="summary-val">${categorie}</span>
      </div>
      <div class="summary-row">
        <span class="summary-label">Monto solicitado:</span>
        <span class="summary-val highlight">${montant}</span>
      </div>
      <div class="summary-row">
        <span class="summary-label">Beneficiarios estimados:</span>
        <span class="summary-val">${beneficiaires} personas</span>
      </div>
      <div class="summary-row">
        <span class="summary-label">Calendario previsto:</span>
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
        <p>Declaración jurada de veracidad documental y conformidad de procesamiento según la política de privacidad de Hancock Prospecting.</p>
        <span class="seal-inst">Fundación Hancock Prospecting • Sede Central West Perth (WA 6005), Australia</span>
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

function getStructuredExpedienteText() {
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

  let message = `FUNDACIÓN PROSPECCIÓN HANCOCK PTY LTD\n`;
  message += `EXPEDIENTE OFICIAL DE SOLICITUD DE SUBVENCIÓN Y APOYO FINANCIERO\n`;
  message += `Nº Expediente Oficial: ${currentExpedienteNum}\n`;
  message += `Fecha de Registro: ${currentFechaRegistro}\n\n`;

  message += `1. Identidad del Solicitante\n`;
  message += `Nombre & Apellidos: ${prenom} ${nom}\n`;
  message += `Organización / Entidad: ${entidad}\n`;
  message += `Profesión / Cargo: ${profesion}\n`;
  message += `Salario mensual (rango): ${salaire}\n\n`;

  message += `2. Coordenadas y Ubicación Geográfica\n`;
  message += `Email: ${email}\n`;
  message += `Teléfono: ${tel}\n`;
  message += `País: ${pais}\n`;
  message += `Ciudad: ${ville}\n`;
  message += `Dirección completa: ${adresse}\n\n`;

  message += `3. Especificaciones del Proyecto y Presupuesto\n`;
  message += `Causa asociada al proyecto: ${categorie}\n`;
  message += `Monto solicitado: ${montant}\n`;
  message += `Beneficiarios estimados: ${beneficiaires}\n`;
  message += `Calendario del proyecto: ${calendario}\n\n`;

  message += `4. Memoria Explicativa del Proyecto\n`;
  message += `${desc}\n\n`;

  message += `Certifico bajo juramento que toda la información provista es verídica.\n`;
  message += `Fundación Prospección Hancock • Sede Global Perth, Australia`;

  return message;
}

function sendDonToWhatsApp() {
  const consent = document.getElementById("donConsent");
  if (consent && !consent.checked) {
    showToast("Por favor, marque la casilla de certificación bajo juramento y aceptación de privacidad antes de enviar.", "error");
    return;
  }

  const message = getStructuredExpedienteText();
  const encodedMessage = encodeURIComponent(message);
  const waUrl = `https://wa.me/33757754014?text=${encodedMessage}`;

  showToast("Abriendo canal oficial de WhatsApp...", "success");
  window.open(waUrl, "_blank");
}

function copyDonSummaryText() {
  const message = getStructuredExpedienteText();
  navigator.clipboard.writeText(message).then(() => {
    showToast("¡Texto oficial del expediente copiado al portapapeles!", "success");
  }).catch(() => {
    showToast("No se pudo copiar automáticamente. Por favor, seleccione el texto manualmente.", "error");
  });
}

function printDonExpediente() {
  const summaryBox = document.getElementById("summaryBox");
  if (!summaryBox) return;

  const printWindow = window.open('', '_blank', 'width=800,height=900');
  printWindow.document.write(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Expediente Oficial — Fundación Hancock Prospecting</title>
      <style>
        body { font-family: 'Times New Roman', serif; padding: 2rem; color: #163A5C; line-height: 1.5; }
        .expediente-banner { border-bottom: 2px solid #163A5C; padding-bottom: 1rem; margin-bottom: 1.5rem; }
        .expediente-code-tag { font-weight: bold; font-size: 1.2rem; color: #8C6420; }
        .expediente-block { margin-bottom: 1.25rem; border-bottom: 1px solid #E7E5E4; padding-bottom: 0.8rem; }
        .expediente-block-title { font-size: 1.1rem; color: #163A5C; border-left: 3px solid #8C6420; padding-left: 0.5rem; margin-bottom: 0.5rem; }
        .summary-row { display: flex; justify-content: space-between; margin-bottom: 0.3rem; font-size: 0.95rem; }
        .summary-label { font-weight: bold; }
        .summary-val.highlight { font-weight: bold; color: #8C6420; }
        .expediente-memo-content { background: #f9f9f9; padding: 1rem; border: 1px solid #ddd; margin-top: 0.5rem; font-size: 0.92rem; }
        .expediente-legal-seal { margin-top: 2rem; text-align: center; border-top: 2px solid #8C6420; padding-top: 1rem; font-size: 0.85rem; color: #666; }
      </style>
    </head>
    <body>
      <div style="text-align: center; margin-bottom: 1.5rem;">
        <h2>HANCOCK PROSPECTING PTY LTD</h2>
        <p>FUNDACIÓN HANCOCK — REGISTRO OFICIAL DE SUBVENCIONES</p>
      </div>
      ${summaryBox.innerHTML}
      <script>
        window.onload = function() { window.print(); }
      </script>
    </body>
    </html>
  `);
  printWindow.document.close();
}

// 13. RENDU DES ACTUALITÉS
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
        <a href="https://wa.me/33757754014?text=Hola,%20deseo%20informaci%C3%B3n%20sobre%20el%20comunicado:%20${encodeURIComponent(item.title)}" target="_blank" class="news-link">
          Consultar comunicado oficial <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    `;

    grid.appendChild(card);
  });
}

// 14. FORMULAIRE GÉNÉRAL DE CONTACT
function handleContactSubmit(e) {
  e.preventDefault();
  const nom = document.getElementById("contactNom").value.trim();
  const email = document.getElementById("contactEmail").value.trim();
  const sujet = document.getElementById("contactSujet").value.trim();
  const msg = document.getElementById("contactMsg").value.trim();

  showToast(`¡Gracias ${nom}! Su mensaje institucional ha sido registrado con éxito. Nuestra secretaría le responderá a la brevedad en ${email}.`, "success");
  e.target.reset();
}

function sendContactViaWhatsApp() {
  const nom = document.getElementById("contactNom").value.trim();
  const email = document.getElementById("contactEmail").value.trim();
  const sujet = document.getElementById("contactSujet").value.trim();
  const msg = document.getElementById("contactMsg").value.trim();

  if (!nom || !email || !sujet || !msg) {
    showToast("Por favor complete los campos del formulario antes de enviar por WhatsApp.", "error");
    return;
  }

  const text = `CONSULTA INSTITUCIONAL WEB\nNombre: ${nom}\nEmail: ${email}\nAsunto: ${sujet}\nMensaje: ${msg}`;
  const url = `https://wa.me/33757754014?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}

// 15. MENTIONS LÉGALES
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

// 16. TOAST NOTIFICATIONS (REMPLACE ALERT())
function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast-item toast-${type}`;

  const iconClass = type === "success" ? "fa-circle-check" : (type === "error" ? "fa-circle-exclamation" : "fa-circle-info");

  toast.innerHTML = `
    <i class="fa-solid ${iconClass}"></i>
    <div class="toast-text">${message}</div>
    <button class="toast-close" onclick="this.parentElement.remove()"><i class="fa-solid fa-xmark"></i></button>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 10);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 5000);
}

// 17. SCROLL PROGRESS BAR & BACK TO TOP BUTTON
function setupScrollEffectsAndProgress() {
  const navbar = document.getElementById('navbar');
  const scrollProgress = document.getElementById('scrollProgress');
  const backToTopBtn = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progressPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    if (scrollProgress) {
      scrollProgress.style.width = `${progressPercent}%`;
    }

    if (navbar) {
      if (scrollTop > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    if (backToTopBtn) {
      if (scrollTop > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  }, { passive: true });
}

// 18. ACTIVE NAVIGATION TRACKING
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

// 19. CLAVIER ET RACCOURCIS ACCESSIBLES
function setupKeyboardShortcuts() {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeGalleryModal();
      closeTeamModal();
      closeLegalModal();
    } else if (e.key === "ArrowRight") {
      const galleryModal = document.getElementById("galleryModal");
      if (galleryModal && galleryModal.classList.contains("active")) {
        nextGalleryImage();
      }
    } else if (e.key === "ArrowLeft") {
      const galleryModal = document.getElementById("galleryModal");
      if (galleryModal && galleryModal.classList.contains("active")) {
        prevGalleryImage();
      }
    }
  });
}

// 20. BANDEAU DE COOKIES
function initCookieBanner() {
  const banner = document.getElementById('cookieBanner');
  if (!banner) return;

  if (localStorage.getItem('hancock_cookies_accepted') === 'true') {
    banner.style.display = 'none';
  } else {
    banner.style.display = 'block';
  }
}

function acceptCookies() {
  const banner = document.getElementById("cookieBanner");
  if (banner) {
    banner.style.display = "none";
    localStorage.setItem("hancock_cookies_accepted", "true");
    showToast("Preferencias de cookies guardadas.", "success");
  }
}

// FONCTIONS GLOBALES EXPOSÉES À WINDOW POUR LES CLICS INLINE DU HTML
window.scrollToSection = scrollToSection;
window.scrollToTop = scrollToTop;
window.switchHeroBg = switchHeroBg;
window.updateLeafletMapMarkers = updateLeafletMapMarkers;
window.zoomToProject = zoomToProject;
window.filterGallery = filterGallery;
window.openGalleryModal = openGalleryModal;
window.closeGalleryModal = closeGalleryModal;
window.nextGalleryImage = nextGalleryImage;
window.prevGalleryImage = prevGalleryImage;
window.filterTeamMembers = filterTeamMembers;
window.filterTeamCategory = filterTeamCategory;
window.openTeamModal = openTeamModal;
window.closeTeamModal = closeTeamModal;
window.nextDonStep = nextDonStep;
window.prevDonStep = prevDonStep;
window.sendDonToWhatsApp = sendDonToWhatsApp;
window.copyDonSummaryText = copyDonSummaryText;
window.printDonExpediente = printDonExpediente;
window.handleContactSubmit = handleContactSubmit;
window.sendContactViaWhatsApp = sendContactViaWhatsApp;
window.openLegalModal = openLegalModal;
window.closeLegalModal = closeLegalModal;
window.acceptCookies = acceptCookies;
