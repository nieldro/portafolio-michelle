import { useState } from "react";
import { ArrowUpRight, Filter } from "lucide-react";
import editorial from "@/assets/proyecto-editorial.jpg";
import raiz from "@/assets/proyecto-raiz.jpg";
import app from "@/assets/proyecto-app.jpg";
import social from "@/assets/proyecto-social.jpg";
import packaging from "@/assets/proyecto-packaging.jpg";
import motion from "@/assets/proyecto-motion.jpg";
import publicidad from "@/assets/proyecto-publicidad.jpg";
import ecommerce from "@/assets/proyecto-ecommerce.jpg";
import evento from "@/assets/proyecto-evento.jpg";
import ilustracion from "@/assets/proyecto-ilustracion.jpg";
import editorial2 from "@/assets/proyecto-editorial-2.jpg";
import editorial3 from "@/assets/proyecto-editorial-3.jpg";
import branding2 from "@/assets/proyecto-branding-2.jpg";
import branding3 from "@/assets/proyecto-branding-3.jpg";
import app2 from "@/assets/proyecto-app-2.jpg";
import app3 from "@/assets/proyecto-app-3.jpg";
import social2 from "@/assets/proyecto-social-2.jpg";
import packaging2 from "@/assets/proyecto-packaging-2.jpg";
import motion2 from "@/assets/proyecto-motion-2.jpg";
import publicidad2 from "@/assets/proyecto-publicidad-2.jpg";
import ecommerce2 from "@/assets/proyecto-ecommerce-2.jpg";
import evento2 from "@/assets/proyecto-evento-2.jpg";
import ilustracion2 from "@/assets/proyecto-ilustracion-2.jpg";
import { ProjectModal } from "./ProjectModal";

const brumaHouse = "/__l5e/assets-v1/e7f1022a-9f8e-4e43-9f48-e4a31b8e41fc/pieza-promocional-03.png";
const heladelica = "/__l5e/assets-v1/37db52d0-c1e4-4d89-bfac-15eb6ec3134f/pieza-promocional-04.png";
const ferrariIcons = "/__l5e/assets-v1/f7a5044f-45cb-4625-a150-ebba1514eb41/poster-02.jpeg";
const mitchMuCherry = "/__l5e/assets-v1/f537cbd0-43be-4ddd-bf44-0025aff9b2a9/pieza-promocional-01.png";
const mitchMuTones = "/__l5e/assets-v1/d98ca0c8-a2ba-4098-9a37-efa5f1271429/pieza-promocional-02.png";
const kaomiArcana = "/__l5e/assets-v1/a5acd706-c52c-4bc2-ad8a-34476ddec589/empaque-01.png";
const taironsVodka = "/__l5e/assets-v1/222989f6-7207-4ec4-a1cf-2303f20150ed/empaque-02.png";
const ecoVidaFolleto = "/__l5e/assets-v1/234e8b81-105f-495b-9eac-c4b5795fbb8b/folleto-02-page-1.jpg";
const ferrari288Poster = "/__l5e/assets-v1/42b1cd0d-03f6-46d1-881d-a58963aeb194/poster-01-page-1.jpg";
const papeleriaKaomi = "/__l5e/assets-v1/f8f71292-db19-4820-ac31-0d5b6606470f/papeleria-01.png";
const papeleriaAstral = "/__l5e/assets-v1/6a4bc4f0-f0a1-4b1c-9974-25f772aa6037/papeleria-02.png";
const algoquestImg = "/__l5e/assets-v1/921f4d75-701a-4282-b613-f586de5bb934/algoquest.png";
const valorantImg = "/__l5e/assets-v1/d6553cf6-52ef-4bef-bae6-65d9d19bffcb/valorant-web.png";

export type Project = {
  title: string;
  category: string;
  year: string;
  client: string;
  role?: string;
  description: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  results: { value: string; label: string }[];
  tags: string[];
  image: string;
  color: string;
};

export const projects: Project[] = [
  {
    title: "Bruma House · Poltronas",
    category: "Publicidad",
    year: "2025",
    client: "Bruma House",
    role: "Diseño publicitario",
    description:
      "Pieza promocional para mobiliario con estética editorial, enfoque en producto premium y una narrativa visual suave orientada a venta.",
    challenge:
      "Comunicar elegancia, confort y valor percibido en una sola pieza digital, manteniendo legibilidad y atractivo comercial sin saturar la composición.",
    solution:
      "Construí una composición con paleta blush, tipografía serif refinada, formas orgánicas y una escena ambientada que dirige toda la atención hacia la poltrona protagonista.",
    deliverables: ["Pieza promocional principal", "Adaptación para redes", "Sistema visual para campañas", "Dirección de arte del producto"],
    results: [
      { value: "1", label: "Pieza hero" },
      { value: "100%", label: "Foco en producto" },
      { value: "Soft", label: "Estilo visual" },
      { value: "Premium", label: "Percepción" },
    ],
    tags: ["Publicidad", "Mobiliario", "Photoshop", "Dirección de arte"],
    image: brumaHouse,
    color: "from-rose-200/40 to-stone-200/30",
  },
  {
    title: "Heladélica · Sabor Pistacho",
    category: "Publicidad",
    year: "2025",
    client: "Heladélica",
    role: "Diseño de campaña",
    description:
      "Pieza de lanzamiento para nuevo sabor de helado artesanal con ambientación fresca, color sensorial y comunicación directa del producto.",
    challenge:
      "Presentar un nuevo sabor de manera apetecible y memorable, generando deseo inmediato y una identidad visual coherente con una marca artesanal.",
    solution:
      "Desarrollé una pieza con paleta verde pistacho, fotografía de alto impacto, jerarquía tipográfica clara y elementos naturales que refuerzan frescura y origen.",
    deliverables: ["Key visual de campaña", "Pieza para pauta digital", "Versión para historias", "Sistema de color por sabores"],
    results: [
      { value: "Nuevo", label: "Lanzamiento" },
      { value: "1", label: "Sabor destacado" },
      { value: "Fresh", label: "Concepto" },
      { value: "Alto", label: "Impacto visual" },
    ],
    tags: ["Publicidad", "Food Design", "Campaña", "Photoshop"],
    image: heladelica,
    color: "from-lime-200/40 to-green-200/30",
  },
  {
    title: "MitchMu · Cherry Editorial",
    category: "Publicidad",
    year: "2025",
    client: "MitchMu",
    role: "Dirección de arte + retoque",
    description:
      "Visual promocional de producto cosmético con enfoque sensorial, acabado glossy y una composición inspirada en el universo cromático de la cereza.",
    challenge:
      "Hacer que un solo tono transmitiera personalidad de marca y textura de producto, equilibrando estética beauty y lectura comercial.",
    solution:
      "Usé una puesta en escena minimalista, color coordinado entre labial y fruta, brillos controlados y una composición central que resalta el empaque.",
    deliverables: ["Hero visual de producto", "Pieza para feed", "Adaptación vertical", "Dirección cromática"],
    results: [
      { value: "1", label: "Tono protagonista" },
      { value: "Beauty", label: "Lenguaje visual" },
      { value: "Glossy", label: "Acabado" },
      { value: "Premium", label: "Look & feel" },
    ],
    tags: ["Cosmética", "Publicidad", "Beauty", "Retoque"],
    image: mitchMuCherry,
    color: "from-pink-200/40 to-rose-300/30",
  },
  {
    title: "MitchMu · Colección de tonos",
    category: "Social Media",
    year: "2025",
    client: "MitchMu",
    role: "Diseño para redes",
    description:
      "Pieza comparativa de tonos para colección de labiales, pensada para comunicar variedad, universo cromático y atributos del producto de forma rápida.",
    challenge:
      "Mostrar varias referencias en una misma composición sin perder orden, claridad ni atractivo visual para redes sociales.",
    solution:
      "Organicé la información con una estructura vertical limpia, swatches asociados a sabores/tonos y una jerarquía visual que hace fácil escanear cada referencia.",
    deliverables: ["Post informativo", "Carrusel base", "Sistema para tonos", "Plantilla editable"],
    results: [
      { value: "4", label: "Tonos" },
      { value: "1", label: "Sistema visual" },
      { value: "Claro", label: "Escaneo visual" },
      { value: "Escalable", label: "Formato" },
    ],
    tags: ["Social Media", "Cosmética", "Templates", "Producto"],
    image: mitchMuTones,
    color: "from-rose-200/40 to-orange-200/30",
  },
  {
    title: "Ferrari · The Icons of the 80s",
    category: "Publicidad",
    year: "2025",
    client: "Proyecto conceptual Hot Wheels",
    role: "Diseño de póster",
    description:
      "Afiche promocional con estética retro para celebrar modelos icónicos de Ferrari de los años 80, con composición dinámica y alto impacto cromático.",
    challenge:
      "Reunir varios vehículos en una sola pieza sin perder jerarquía, manteniendo una atmósfera nostálgica y coleccionable.",
    solution:
      "Diseñé un póster de fuerte presencia roja, con tipografía bold, superposición de modelos y tratamiento visual inspirado en memorabilia automotriz.",
    deliverables: ["Póster principal", "Arte para impresión", "Versión digital", "Composición de colección"],
    results: [
      { value: "80s", label: "Concepto" },
      { value: "4", label: "Autos destacados" },
      { value: "Retro", label: "Estética" },
      { value: "Bold", label: "Tipografía" },
    ],
    tags: ["Poster Design", "Automotriz", "Publicidad", "Print"],
    image: ferrariIcons,
    color: "from-red-500/30 to-orange-300/20",
  },
  {
    title: "Ferrari 288 GTO · Race Poster",
    category: "Publicidad",
    year: "2025",
    client: "Proyecto conceptual Hot Wheels",
    role: "Diseño gráfico publicitario",
    description:
      "Póster enfocado en el Ferrari 288 GTO con una lectura más directa de producto, inspirado en afiches de competencia y coleccionismo.",
    challenge:
      "Crear una pieza de un solo modelo que conservara fuerza visual y narrativa sin depender de múltiples elementos complementarios.",
    solution:
      "Aposté por una composición limpia con protagonismo total del vehículo, tipografía extendida y una estética deportiva que remite a carreras y colección.",
    deliverables: ["Póster vertical", "Versión print", "Adaptación para display", "Arte promocional"],
    results: [
      { value: "288", label: "Modelo" },
      { value: "1984", label: "Referencia" },
      { value: "Retro", label: "Look visual" },
      { value: "Hero", label: "Producto" },
    ],
    tags: ["Poster", "Hot Wheels", "Automotriz", "Publicidad"],
    image: ferrari288Poster,
    color: "from-red-400/30 to-neutral-200/20",
  },
  {
    title: "EcoVida Market · Folleto Comercial",
    category: "Editorial",
    year: "2025",
    client: "EcoVida Market",
    role: "Diseño editorial",
    description:
      "Folleto corporativo de dos páginas para marca eco-sostenible, con diagramación informativa, mensajes de valor y beneficios del producto.",
    challenge:
      "Ordenar información institucional, comercial y promocional en un formato breve, visualmente amable y fácil de leer.",
    solution:
      "Diseñé una pieza editorial con bloques bien jerarquizados, paleta natural, llamadas de descuento y una narrativa enfocada en bienestar y sostenibilidad.",
    deliverables: ["Folleto 2 páginas", "Portada comercial", "Página informativa", "Arte listo para impresión"],
    results: [
      { value: "2", label: "Páginas" },
      { value: "Eco", label: "Enfoque" },
      { value: "Claro", label: "Sistema informativo" },
      { value: "Print", label: "Formato" },
    ],
    tags: ["Editorial", "Folleto", "InDesign", "Print"],
    image: ecoVidaFolleto,
    color: "from-green-200/40 to-lime-100/30",
  },
  {
    title: "Kaomi Arcana · Packaging conceptual",
    category: "Packaging",
    year: "2025",
    client: "Kaomi Arcana",
    role: "Diseño de empaque",
    description:
      "Empaque conceptual de estética gótica para producto premium, con estructura tipo ataúd, patrones oscuros y un acabado visual coleccionable.",
    challenge:
      "Diseñar un empaque memorable y coherente con una narrativa de marca oscura, cuidando forma, ornamentación y presencia en exhibición.",
    solution:
      "Desarrollé una estructura diferenciadora, un sistema ornamental en tonos vino y detalles gráficos que refuerzan el carácter místico de la marca.",
    deliverables: ["Estructura del empaque", "Frente y reverso", "Patrón gráfico", "Mockup de presentación"],
    results: [
      { value: "Concept", label: "Propuesta" },
      { value: "Premium", label: "Posicionamiento" },
      { value: "1", label: "Forma icónica" },
      { value: "Dark", label: "Universo visual" },
    ],
    tags: ["Packaging", "Conceptual", "Brand Experience", "Mockup"],
    image: kaomiArcana,
    color: "from-rose-900/30 to-stone-800/30",
  },
  {
    title: "Tairons · El vodka de los dioses",
    category: "Packaging",
    year: "2025",
    client: "Tairons",
    role: "Packaging + storytelling visual",
    description:
      "Diseño de empaque para vodka premium inspirado en la cultura Tairona, con gráfica ornamental, storytelling y exhibición de alto valor percibido.",
    challenge:
      "Crear un empaque culturalmente evocador, llamativo en anaquel y al mismo tiempo funcional para comunicar producto, origen e identidad.",
    solution:
      "Combiné una estructura de exhibición visible, ilustración ornamental vibrante, símbolos solares y una narrativa escrita integrada al reverso del empaque.",
    deliverables: ["Caja exhibidora", "Diseño frontal y posterior", "Sistema ornamental", "Presentación de marca"],
    results: [
      { value: "750 ml", label: "Presentación" },
      { value: "Premium", label: "Segmento" },
      { value: "Cultural", label: "Narrativa" },
      { value: "Alto", label: "Valor visual" },
    ],
    tags: ["Packaging", "Bebidas", "Ilustración", "Brand Story"],
    image: taironsVodka,
    color: "from-amber-300/30 to-cyan-300/20",
  },
  {
    title: "Kaomi Arcana · Papelería ritual",
    category: "Branding",
    year: "2025",
    client: "Kaomi Arcana",
    role: "Identidad + papelería",
    description:
      "Sistema completo de papelería ritual con estética arcana: empaques, sobres con sello de cera, business cards, bolsas y papel patrón.",
    challenge:
      "Trasladar el universo místico de la marca a un sistema de papelería coherente, lujoso y con presencia física fuerte.",
    solution:
      "Construí un sistema en torno al símbolo arcano, paleta vino + negro, sellos de cera roja y un patrón ornamental aplicado a todo el ecosistema.",
    deliverables: ["Carpeta + sobre con sello", "Tarjetas y empaques", "Bolsa retail", "Papel patrón y caja premium"],
    results: [
      { value: "9", label: "Piezas del sistema" },
      { value: "Premium", label: "Posicionamiento" },
      { value: "Ritual", label: "Concepto" },
      { value: "1", label: "Sistema unificado" },
    ],
    tags: ["Branding", "Papelería", "Sellos", "Print"],
    image: papeleriaKaomi,
    color: "from-rose-900/30 to-stone-800/30",
  },
  {
    title: "Astral · Papelería corporativa",
    category: "Branding",
    year: "2025",
    client: "Astral Studio",
    role: "Branding + papelería",
    description:
      "Sistema de papelería corporativa minimalista en púrpura profundo y plata: folder, carta, sobre, caja regalo, etiquetas y papel patrón.",
    challenge:
      "Crear una identidad sobria con presencia premium, capaz de funcionar en presentaciones B2B y en empaques de obsequio para clientes.",
    solution:
      "Símbolo abstracto en forma de estrella circundada, paleta púrpura + blanco roto, mockups de papelería y un patrón decorativo escalable.",
    deliverables: ["Folder presentación", "Sobre + carta", "Caja regalo", "Etiquetas y papel patrón"],
    results: [
      { value: "9", label: "Piezas" },
      { value: "Premium", label: "Posicionamiento" },
      { value: "1", label: "Sistema escalable" },
      { value: "B2B", label: "Aplicación" },
    ],
    tags: ["Branding", "Papelería", "Corporate", "Print"],
    image: papeleriaAstral,
    color: "from-purple-700/30 to-slate-800/30",
  },
  {
    title: "AlgoQuest · Plataforma educativa",
    category: "UI/UX",
    year: "2025",
    client: "Daniel Páez",
    role: "Diseño UI + branding digital",
    description:
      "Plataforma gamificada para aprender algoritmos de ordenamiento jugando. Diseño de interfaz dark mode, mascota propia y sistema de niveles.",
    challenge:
      "Hacer que un tema técnico (algoritmos) se sintiera amigable y motivante para estudiantes, con una ruta de aprendizaje clara.",
    solution:
      "Interfaz dark mode con acentos verde neón, mascota búho como guía, barra de progreso por módulos y tarjetas de niveles desbloqueables.",
    deliverables: ["Home + rutas de aprendizaje", "Sistema de niveles", "Mascota e iconografía", "Componentes UI completos"],
    results: [
      { value: "9", label: "Módulos" },
      { value: "100%", label: "Niveles desbloqueables" },
      { value: "Dark", label: "Mode" },
      { value: "Edu", label: "Vertical" },
    ],
    tags: ["UI/UX", "EdTech", "Dark Mode", "Gamificación"],
    image: algoquestImg,
    color: "from-emerald-500/30 to-slate-800/30",
  },
  {
    title: "Valorant · Web personalizada",
    category: "UI/UX",
    year: "2025",
    client: "Proyecto personal",
    role: "Diseño UI + maquetación",
    description:
      "Sitio web fan-made para Valorant con fichas de agentes, galería de skins y navegación inmersiva inspirada en la estética gamer del juego.",
    challenge:
      "Replicar la atmósfera competitiva del juego en una web fluida, manteniendo legibilidad y jerarquía sobre fondos complejos.",
    solution:
      "Composición asimétrica con tipografía glitch, paleta púrpura/teal, tarjetas de habilidades (Q/E/C/X) y navegación lateral vertical.",
    deliverables: ["Home + ficha de agente", "Galería de colección", "Sistema de navegación", "Componentes UI gamer"],
    results: [
      { value: "1", label: "Sitio completo" },
      { value: "Gamer", label: "Lenguaje visual" },
      { value: "Inmersivo", label: "Diseño" },
      { value: "Web", label: "Formato" },
    ],
    tags: ["UI/UX", "Gaming", "Web Design", "Dark Mode"],
    image: valorantImg,
    color: "from-purple-600/30 to-indigo-900/30",
  },
  {
    title: "Raíz Café Orgánico",
    category: "Branding",
    year: "2024",
    client: "Raíz Coffee Co.",
    role: "Identidad e ilustración",
    description:
      "Identidad visual completa para marca de café orgánico colombiano: logo, paleta, packaging y manual de marca de 80 páginas.",
    challenge:
      "Diferenciar una marca emergente de café especial frente a competidores con presupuestos diez veces mayores, comunicando origen y trazabilidad.",
    solution:
      "Diseñé un logotipo construido a partir de raíces tipográficas, con ilustraciones botánicas hechas a mano y un sistema de colores derivado de los terruños colombianos.",
    deliverables: ["Logo + variantes", "Manual de marca 80pp", "Packaging para 3 referencias", "Papelería + redes sociales"],
    results: [
      { value: "+180%", label: "Ventas trimestre" },
      { value: "4", label: "Cafés aliados" },
      { value: "8K", label: "Seguidores nuevos" },
      { value: "1°", label: "Top café Bogotá" },
    ],
    tags: ["Branding", "Packaging", "Illustrator", "Manual"],
    image: raiz,
    color: "from-emerald-500/20 to-amber-500/20",
  },
  {
    title: "Campaña #SéTuVoz",
    category: "Social Media",
    year: "2025",
    client: "La Lupa de Hoy",
    role: "Diseñadora visual líder",
    description:
      "Campaña visual multiplataforma para redes sociales con foco en participación juvenil electoral. +200 piezas entregadas en 4 meses.",
    challenge:
      "Movilizar a jóvenes 18-25 a informarse sobre la coyuntura política sin caer en el tono panfletario habitual del sector.",
    solution:
      "Construí un lenguaje visual con tipografía expresiva, paleta saturada y un sistema de plantillas que permitía publicar 10+ piezas semanales sin perder identidad.",
    deliverables: ["+200 piezas para Instagram/TikTok", "Reels y stories animados", "Plantillas editables", "Manual de uso para redacción"],
    results: [
      { value: "+1.2M", label: "Alcance orgánico" },
      { value: "+45K", label: "Nuevos seguidores" },
      { value: "8.7%", label: "Engagement promedio" },
      { value: "200+", label: "Piezas creadas" },
    ],
    tags: ["Social Media", "Photoshop", "Estrategia", "Reels"],
    image: social,
    color: "from-fuchsia-500/30 to-yellow-500/30",
  },
  {
    title: "Mila Chocolatería",
    category: "Packaging",
    year: "2024",
    client: "Mila Artesanal",
    role: "Diseño de empaque",
    description:
      "Sistema de empaque para línea premium de chocolates artesanales. Patrones, etiquetas, cajas y collaterals para 6 referencias.",
    challenge:
      "Comunicar el origen artesanal y los porcentajes de cacao en un anaquel saturado de chocolates importados premium.",
    solution:
      "Desarrollé un sistema de patrones inspirados en cerámica colombiana, con un código cromático según el porcentaje de cacao y acabados con foil dorado.",
    deliverables: ["6 empaques individuales", "Caja regalo de lujo", "Etiquetas adhesivas", "Bolsas de papel kraft impresas"],
    results: [
      { value: "+220%", label: "Recompra" },
      { value: "3", label: "Tiendas premium" },
      { value: "92%", label: "Aprobación consumidor" },
      { value: "6", label: "SKUs lanzados" },
    ],
    tags: ["Packaging", "Print", "Patrones", "Foil"],
    image: packaging,
    color: "from-rose-300/30 to-amber-300/30",
  },
  {
    title: "Acclie Fashion Store",
    category: "E-commerce",
    year: "2025",
    client: "Acclie Studio",
    role: "Diseño UI + branding digital",
    description:
      "Diseño completo de tienda online de moda femenina contemporánea: home, catálogo, fichas, carrito, checkout y app móvil complementaria.",
    challenge:
      "Convertir una marca con presencia solo física en un destino digital deseable, con una experiencia de compra que reflejara el lujo accesible de la marca.",
    solution:
      "Diseñé una interfaz editorial-shoppable con grilla flexible, fichas con video, wishlist persistente y un checkout en 2 pasos optimizado para mobile.",
    deliverables: ["Home + colección + ficha", "Carrito y checkout", "Cuenta de usuario", "App iOS complementaria"],
    results: [
      { value: "+260%", label: "Ventas online" },
      { value: "3.8%", label: "Conversión" },
      { value: "−45%", label: "Bounce rate" },
      { value: "1.9s", label: "Tiempo de carga" },
    ],
    tags: ["E-commerce", "Figma", "Mobile", "UX"],
    image: ecommerce,
    color: "from-orange-400/30 to-amber-200/30",
  },
  {
    title: "Wine & Co. Festival",
    category: "Evento",
    year: "2024",
    client: "Cellier de Bogotá",
    role: "Branding de evento",
    description:
      "Identidad y piezas para festival anual de cata de vinos. Cartel, programa, señalética, menús, copas grabadas y kit para asistentes VIP.",
    challenge:
      "Construir una identidad sofisticada con guiños art-déco que se mantuviera elegante en print de gran formato y delicada en piezas pequeñas.",
    solution:
      "Pareja tipográfica display + serif, paleta vino-mostaza con detalles dorados, y un sistema de cenefas modulables para todas las aplicaciones.",
    deliverables: ["Cartel principal", "Programa impreso 24pp", "Señalética y menús", "Kit VIP con grabados"],
    results: [
      { value: "+1.200", label: "Asistentes" },
      { value: "30", label: "Bodegas" },
      { value: "100%", label: "Aforo" },
      { value: "+60%", label: "vs. edición previa" },
    ],
    tags: ["Branding", "Evento", "Print", "Señalética"],
    image: evento,
    color: "from-rose-700/30 to-amber-400/30",
  },
  {
    title: "Lóelido Fashion",
    category: "Editorial",
    year: "2024",
    client: "Lóelido Magazine",
    role: "Diseño editorial",
    description:
      "Editorial de moda atemporal con diagramación minimalista, fotografía de autor y un sistema tipográfico depurado en blanco y negro.",
    challenge:
      "Diseñar un especial de moda que se sintiera atemporal y se diferenciara del ruido visual de las revistas comerciales del sector.",
    solution:
      "Apostá por amplio espacio en blanco, una pareja tipográfica display + serif clásica, y una grilla flexible que respira en cada doble página.",
    deliverables: ["48 pp. impresas", "Versión digital scrollable", "Sistema editorial replicable", "Plantillas de portada"],
    results: [
      { value: "+2.000", label: "Ejemplares" },
      { value: "9", label: "Editoriales" },
      { value: "100%", label: "Aprobación cliente" },
      { value: "1", label: "Mención en Behance" },
    ],
    tags: ["Editorial", "InDesign", "Fashion", "Print"],
    image: editorial2,
    color: "from-stone-300/30 to-neutral-400/30",
  },
  {
    title: "Cooldey Recetario",
    category: "Editorial",
    year: "2024",
    client: "Cooldey Cocina",
    role: "Diagramación + dirección de arte",
    description:
      "Libro de recetas de cocina contemporánea con fotografía cenital y tipografía serif cálida, impreso a 4 tintas en papel ahuesado.",
    challenge:
      "Convertir 60 recetas en un objeto físico deseable, fácil de seguir en la cocina y a la vez bello como pieza de mesa de centro.",
    solution:
      "Diagramación en grilla de 2 columnas con jerarquía clara entre ingredientes y pasos, fotografía cenital uniforme y un código cromático por capítulo.",
    deliverables: ["Libro 192 pp.", "Cubierta con sobrecubierta", "Marcador de tela", "Versión PDF interactiva"],
    results: [
      { value: "+1.500", label: "Copias vendidas" },
      { value: "60", label: "Recetas" },
      { value: "4.8★", label: "Rating Goodreads" },
      { value: "2", label: "Reimpresiones" },
    ],
    tags: ["Libro", "Diagramación", "Food", "Print"],
    image: editorial3,
    color: "from-amber-300/30 to-rose-300/30",
  },
  {
    title: "Sainte Skincare",
    category: "Branding",
    year: "2025",
    client: "Sainte Cosmetics",
    role: "Identidad + dirección de arte",
    description:
      "Identidad para línea de skincare francesa minimalista. Logo, paleta rosa pastel, etiquetas y campaña de lanzamiento digital.",
    challenge:
      "Lanzar una marca premium en un mercado saturado con un presupuesto inicial limitado, transmitiendo lujo accesible y rigor cosmético.",
    solution:
      "Identidad minimalista con logotipo serif, paleta rosa empolvado + crema y etiquetas tipográficas tipo farmacia francesa contemporánea.",
    deliverables: ["Logo + manual", "Etiquetas para 6 productos", "Sitio one-page", "Campaña digital de lanzamiento"],
    results: [
      { value: "+150%", label: "Ventas mes 1" },
      { value: "6", label: "Productos" },
      { value: "12K", label: "Seguidores IG" },
      { value: "3", label: "Tiendas multimarca" },
    ],
    tags: ["Branding", "Skincare", "Packaging", "Web"],
    image: branding2,
    color: "from-pink-200/40 to-rose-300/30",
  },
  {
    title: "Verde Hotel Boutique",
    category: "Branding",
    year: "2024",
    client: "Verde Hotel Boutique",
    role: "Identidad de marca",
    description:
      "Identidad para hotel boutique con foco en sostenibilidad. Logo monograma, papelería con foil dorado y señalética interior.",
    challenge:
      "Comunicar lujo discreto y compromiso ambiental sin caer en clichés ecológicos ni en estética corporativa de hotel internacional.",
    solution:
      "Monograma elegante, paleta verde bosque + dorado, papelería con foil y un sistema de señalética en madera grabada para los espacios físicos.",
    deliverables: ["Logo + monograma", "Papelería completa", "Señalética interior", "Manual 60pp"],
    results: [
      { value: "+92%", label: "Ocupación" },
      { value: "4.9★", label: "Booking score" },
      { value: "1", label: "Premio diseño" },
      { value: "20", label: "Habitaciones" },
    ],
    tags: ["Branding", "Hospitality", "Print", "Foil"],
    image: branding3,
    color: "from-emerald-700/30 to-amber-400/30",
  },
  {
    title: "Nexa Fintech",
    category: "UI/UX",
    year: "2025",
    client: "Nexa Banking (proyecto académico)",
    role: "UI Designer",
    description:
      "Dashboard financiero móvil con dark mode, visualización de gastos en tiempo real y flujos de transferencia simplificados.",
    challenge:
      "Hacer accesibles datos financieros complejos a usuarios jóvenes sin sacrificar densidad de información ni claridad visual.",
    solution:
      "Modo oscuro con acentos verde neón, gráficas custom de gran legibilidad y arquitectura de información jerárquica por prioridad de uso.",
    deliverables: ["50+ pantallas", "Design system completo", "Prototipo high-fidelity", "Guía de componentes"],
    results: [
      { value: "9.5/10", label: "Calificación" },
      { value: "50+", label: "Pantallas" },
      { value: "92%", label: "Éxito en tareas" },
      { value: "Top 3", label: "Concurso Fintech UX" },
    ],
    tags: ["Figma", "Fintech", "Dark Mode", "Dashboard"],
    image: app3,
    color: "from-emerald-500/30 to-slate-700/40",
  },
  {
    title: "Pop Color Fashion",
    category: "Social Media",
    year: "2025",
    client: "Pop Color Studio",
    role: "Social media designer",
    description:
      "Grid editorial vibrante para marca de moda emergente. 90+ piezas, reels semanales y plantillas para el equipo interno.",
    challenge:
      "Construir un feed reconocible a primera vista en un mercado saturado, escalable a 3+ publicaciones semanales sin perder identidad.",
    solution:
      "Sistema de plantillas con paleta saturada amarillo-coral, tipografía display contundente y composiciones mixtas foto+ilustración.",
    deliverables: ["+90 piezas IG/TikTok", "20 reels animados", "Plantillas Canva para equipo", "Guía de marca digital"],
    results: [
      { value: "+320%", label: "Engagement" },
      { value: "+30K", label: "Nuevos seguidores" },
      { value: "12", label: "Reels virales" },
      { value: "+90", label: "Piezas" },
    ],
    tags: ["Social Media", "Fashion", "Reels", "Templates"],
    image: social2,
    color: "from-yellow-300/40 to-orange-400/30",
  },
  {
    title: "Miel Permaliue",
    category: "Packaging",
    year: "2025",
    client: "Permaliue Apicultura",
    role: "Packaging + branding",
    description:
      "Packaging artesanal para miel premium de altura. Etiqueta con foil dorado, sello de garantía y caja para edición limitada.",
    challenge:
      "Comunicar el carácter artesanal y la trazabilidad del producto, justificando un precio premium frente a marcas industriales.",
    solution:
      "Etiqueta tipográfica con sello vintage, foil dorado y sistema de etiquetas secundarias que indican origen y temporada de cosecha.",
    deliverables: ["Etiqueta principal", "Sello de garantía", "Caja edición limitada", "Etiquetas secundarias"],
    results: [
      { value: "+200%", label: "Ventas" },
      { value: "5", label: "Tiendas gourmet" },
      { value: "1", label: "Premio Dieline" },
      { value: "98%", label: "Satisfacción" },
    ],
    tags: ["Packaging", "Foil", "Premium", "Artesanal"],
    image: packaging2,
    color: "from-amber-400/30 to-yellow-200/30",
  },
  {
    title: "Palenta Furniture Store",
    category: "E-commerce",
    year: "2024",
    client: "Palenta Diseño",
    role: "UI Designer",
    description:
      "Tienda online de mobiliario premium con configurador de productos, checkout simplificado y app móvil complementaria.",
    challenge:
      "Vender mobiliario de alto ticket online requería transmitir confianza, calidad de materiales y facilidad de configuración.",
    solution:
      "Diseño editorial con fotografía ambientada, configurador visual de tapizados y maderas, y un checkout de 1 sola página optimizado.",
    deliverables: ["Home + catálogo", "Configurador visual", "Checkout 1 paso", "App móvil iOS"],
    results: [
      { value: "+180%", label: "Ventas online" },
      { value: "4.2%", label: "Conversión" },
      { value: "−38%", label: "Bounce rate" },
      { value: "2.1s", label: "Tiempo de carga" },
    ],
    tags: ["E-commerce", "Furniture", "Configurator", "Mobile"],
    image: ecommerce2,
    color: "from-stone-400/30 to-amber-200/30",
  },
  {
    title: "Whisper Wedding",
    category: "Evento",
    year: "2024",
    client: "Whisper Bodas",
    role: "Branding de evento",
    description:
      "Suite de invitaciones, papelería y señalética para boda destino. Caligrafía moderna, paleta blush y detalles botánicos.",
    challenge:
      "Crear una identidad romántica pero contemporánea, que se sintiera personal y se aplicara coherentemente en 12+ piezas.",
    solution:
      "Pareja tipográfica caligrafía + serif modernista, paleta blush-arena con dorados sutiles, y una hoja de estilo aplicada a cada detalle.",
    deliverables: ["Suite invitación + RSVP", "Programa ceremonia", "Señalética + menús", "Tarjetas de agradecimiento"],
    results: [
      { value: "200", label: "Invitados" },
      { value: "12", label: "Piezas" },
      { value: "100%", label: "Aprobación novios" },
      { value: "+8", label: "Referidos directos" },
    ],
    tags: ["Wedding", "Caligrafía", "Print", "Evento"],
    image: evento2,
    color: "from-rose-200/40 to-amber-200/30",
  },
  {
    title: "Cuentos del Bosque",
    category: "Ilustración",
    year: "2024",
    client: "Editorial Pequeños Lectores",
    role: "Ilustradora",
    description:
      "Libro infantil ilustrado en acuarela digital. 24 ilustraciones a doble página y portada para colección de cuentos clásicos.",
    challenge:
      "Reinterpretar cuentos clásicos infantiles con una estética cálida y contemporánea, diferenciada del look digital plano dominante.",
    solution:
      "Técnica acuarela digital con texturas reales escaneadas, paleta cálida primaveral y composiciones narrativas que invitan a buscar detalles.",
    deliverables: ["24 ilustraciones doble página", "Portada y contraportada", "8 viñetas decorativas", "Versión para merchandising"],
    results: [
      { value: "+5.000", label: "Copias 1ra edición" },
      { value: "24", label: "Ilustraciones" },
      { value: "4.9★", label: "Reseñas Amazon" },
      { value: "2", label: "Reimpresiones" },
    ],
    tags: ["Ilustración", "Acuarela", "Infantil", "Editorial"],
    image: ilustracion2,
    color: "from-green-300/30 to-amber-200/30",
  },
];

const categories = ["Todos", "Branding", "Editorial", "UI/UX", "E-commerce", "Publicidad", "Packaging", "Motion", "Social Media", "Evento", "Ilustración"];

export const Projects = () => {
  const [filter, setFilter] = useState("Todos");
  const [active, setActive] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);

  const filtered = filter === "Todos" ? projects : projects.filter((p) => p.category === filter);

  const openProject = (p: Project) => {
    setActive(p);
    setOpen(true);
  };

  return (
    <section id="proyectos" className="py-24 sm:py-32 relative">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Proyectos seleccionados
            </span>
            <h2 className="font-display text-5xl sm:text-6xl font-black mt-4 leading-tight">
              Trabajo que cuenta <em className="text-gradient not-italic">historias</em>.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Haz click en cualquier proyecto para ver el caso de estudio completo: reto, proceso,
            entregables y resultados.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex items-center gap-2 mb-12 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
          <Filter className="w-4 h-4 text-muted-foreground shrink-0" />
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                filter === c
                  ? "bg-ink text-ink-foreground shadow-soft"
                  : "bg-secondary text-secondary-foreground hover:bg-muted"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((p, i) => (
            <button
              key={p.title}
              onClick={() => openProject(p)}
              className="group flex flex-col text-left animate-fade-in-up focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 rounded-3xl"
              style={{ animationDelay: `${i * 60}ms`, opacity: 0 }}
            >
              <div className={`relative overflow-hidden rounded-3xl aspect-[4/3] bg-gradient-to-br ${p.color}`}>
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="pt-6 flex flex-col gap-3">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider">
                  <span className="text-primary">{p.category}</span>
                  <span className="text-muted-foreground">{p.year}</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold leading-tight group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <span className="shrink-0 mt-1 w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-ink group-hover:text-ink-foreground group-hover:border-ink transition-colors">
                    <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {p.tags.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <ProjectModal project={active} open={open} onOpenChange={setOpen} />
    </section>
  );
};
