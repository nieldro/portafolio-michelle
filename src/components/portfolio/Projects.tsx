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
import { ProjectModal } from "./ProjectModal";

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
    title: "Floresía Magazine",
    category: "Editorial",
    year: "2025",
    client: "Editorial Floresía Independiente",
    role: "Dirección de arte + Diagramación",
    description:
      "Revista trimestral sobre botánica y cultura urbana. Diseño completo de diagramación, portada y sistema tipográfico para 4 ediciones.",
    challenge:
      "Crear un objeto editorial deseable en una era digital, que conjugara rigor periodístico con sensibilidad visual contemporánea.",
    solution:
      "Construí un sistema modular de retícula con 12 columnas, una pareja tipográfica entre serif moderna y sans humanista, y un manejo cromático estacional inspirado en pigmentos naturales.",
    deliverables: ["4 ediciones impresas (96 pp.)", "Sistema editorial replicable", "Plantillas para colaboradores", "Versión digital interactiva"],
    results: [
      { value: "+3.500", label: "Tiraje vendido" },
      { value: "12", label: "Puntos de venta" },
      { value: "94%", label: "Reseñas positivas" },
      { value: "2", label: "Premios locales" },
    ],
    tags: ["InDesign", "Diagramación", "Tipografía", "Print"],
    image: editorial,
    color: "from-primary/20 to-accent/20",
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
    title: "Pulse Music App",
    category: "UI/UX",
    year: "2025",
    client: "Proyecto académico · Compensar",
    role: "Diseño UI/UX",
    description:
      "Diseño de interfaz para app de música streaming con foco en artistas emergentes latinoamericanos. 60+ pantallas y prototipo funcional.",
    challenge:
      "Crear una experiencia de descubrimiento musical que no compitiera por catálogo, sino por curaduría afectiva y cercanía con el artista.",
    solution:
      "Diseñé una arquitectura basada en 'salas' temáticas curadas, con un sistema visual oscuro, gradientes neón y micro-interacciones que celebran cada reproducción.",
    deliverables: ["60+ pantallas en Figma", "Sistema de diseño completo", "Prototipo interactivo", "User flows y wireframes"],
    results: [
      { value: "9.2/10", label: "Calificación final" },
      { value: "85%", label: "Tasa de éxito UX test" },
      { value: "5", label: "Usuarios test" },
      { value: "60+", label: "Pantallas" },
    ],
    tags: ["Figma", "UI Design", "Prototipado", "Design System"],
    image: app,
    color: "from-pink-500/30 to-orange-500/30",
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
    title: "Sonora Festival",
    category: "Motion",
    year: "2025",
    client: "Sonora Producciones",
    role: "Motion designer",
    description:
      "Identidad visual y piezas animadas para festival de música electrónica. Posters, reels, openers y contenido para pantallas LED del escenario.",
    challenge:
      "Crear una identidad que funcionara estática (afiches, redes) y en movimiento (LED, video) sin perder consistencia en escenarios complejos.",
    solution:
      "Diseñé un sistema generativo basado en formas líquidas reactivas al beat, animado en After Effects y exportado en loops perfectos para todas las plataformas.",
    deliverables: ["Logo animado", "20+ posters", "12 reels promocionales", "Visuales para 3 escenarios LED"],
    results: [
      { value: "+8.000", label: "Asistentes" },
      { value: "+500K", label: "Views en reels" },
      { value: "3", label: "Escenarios" },
      { value: "100%", label: "Sold out" },
    ],
    tags: ["After Effects", "Motion", "Posters", "VJ"],
    image: motion,
    color: "from-blue-500/30 to-purple-500/30",
  },
  {
    title: "Lumière Outdoor",
    category: "Publicidad",
    year: "2025",
    client: "Lumière Cosméticos",
    role: "Dirección de arte",
    description:
      "Campaña publicitaria 360° para línea de cosméticos premium. Vallas, mupis, prensa, digital y POP para lanzamiento nacional en 8 ciudades.",
    challenge:
      "Posicionar una marca local como alternativa premium frente a referentes europeos, en una campaña con cobertura nacional y presupuesto controlado.",
    solution:
      "Concepto creativo 'Tu luz, tu firma': fotografía de producto con luz cinematográfica, claim emocional y un sistema de adaptaciones por ciudad y formato.",
    deliverables: ["12 vallas + mupis", "Avisos de prensa", "Banners digitales", "POP para 80 puntos de venta"],
    results: [
      { value: "+72%", label: "Awareness marca" },
      { value: "8", label: "Ciudades" },
      { value: "+340%", label: "Tráfico web" },
      { value: "1°", label: "Categoría premium" },
    ],
    tags: ["Publicidad", "OOH", "Dirección arte", "Campaña 360"],
    image: publicidad,
    color: "from-yellow-400/30 to-rose-500/30",
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
    title: "Florare Ilustración",
    category: "Ilustración",
    year: "2025",
    client: "Proyecto personal",
    role: "Ilustradora",
    description:
      "Serie de 12 ilustraciones editoriales sobre mujeres y botánica, exploradas en lápiz de color digital y publicadas en libro auto-editado.",
    challenge:
      "Desarrollar una voz ilustrativa propia que pudiera ofrecerse comercialmente a editoriales y marcas de cuidado personal.",
    solution:
      "Trabajé sobre una paleta acotada coral/ocre, técnica mixta lápiz-acuarela digital y composiciones de retrato con elementos botánicos simbólicos.",
    deliverables: ["12 ilustraciones originales", "Libro auto-editado 32pp", "Prints firmados serie limitada", "Portfolio para licenciamiento"],
    results: [
      { value: "+80", label: "Prints vendidos" },
      { value: "3", label: "Encargos editoriales" },
      { value: "12", label: "Ilustraciones" },
      { value: "2", label: "Exposiciones" },
    ],
    tags: ["Ilustración", "Procreate", "Editorial", "Print"],
    image: ilustracion,
    color: "from-orange-300/30 to-rose-400/30",
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
