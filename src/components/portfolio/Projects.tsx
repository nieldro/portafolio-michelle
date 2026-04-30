import { ArrowUpRight } from "lucide-react";
import editorial from "@/assets/proyecto-editorial.jpg";
import raiz from "@/assets/proyecto-raiz.jpg";
import app from "@/assets/proyecto-app.jpg";
import social from "@/assets/proyecto-social.jpg";
import packaging from "@/assets/proyecto-packaging.jpg";
import motion from "@/assets/proyecto-motion.jpg";

export const projects = [
  {
    title: "Floresía Magazine",
    category: "Diseño Editorial",
    year: "2025",
    client: "Editorial independiente",
    description:
      "Revista trimestral sobre botánica y cultura urbana. Diseño completo de diagramación, portada y sistema tipográfico.",
    tags: ["InDesign", "Diagramación", "Tipografía"],
    image: editorial,
    color: "from-primary/20 to-accent/20",
  },
  {
    title: "Raíz Café Orgánico",
    category: "Branding e Identidad",
    year: "2024",
    client: "Raíz Coffee Co.",
    description:
      "Identidad visual completa para marca de café orgánico colombiano: logo, paleta, packaging y manual de marca.",
    tags: ["Branding", "Packaging", "Illustrator"],
    image: raiz,
    color: "from-emerald-500/20 to-amber-500/20",
  },
  {
    title: "Pulse Music App",
    category: "UI/UX Design",
    year: "2025",
    client: "Proyecto académico · Compensar",
    description:
      "Diseño de interfaz para app de música streaming con foco en artistas emergentes latinoamericanos.",
    tags: ["Figma", "UI Design", "Prototipado"],
    image: app,
    color: "from-pink-500/30 to-orange-500/30",
  },
  {
    title: "Campaña #SéTuVoz",
    category: "Contenido Digital",
    year: "2025",
    client: "La Lupa de Hoy",
    description:
      "Campaña visual multiplataforma para redes sociales con foco en participación juvenil. +200 piezas entregadas.",
    tags: ["Social Media", "Photoshop", "Estrategia"],
    image: social,
    color: "from-fuchsia-500/30 to-yellow-500/30",
  },
  {
    title: "Mila Chocolatería",
    category: "Packaging",
    year: "2024",
    client: "Mila Artesanal",
    description:
      "Sistema de empaque para línea premium de chocolates artesanales. Patrones, etiquetas y collaterals.",
    tags: ["Packaging", "Print", "Patrones"],
    image: packaging,
    color: "from-rose-300/30 to-amber-300/30",
  },
  {
    title: "Sonora Festival",
    category: "Motion Graphics",
    year: "2025",
    client: "Sonora Producciones",
    description:
      "Identidad visual y piezas animadas para festival de música electrónica. Posters, reels y openers.",
    tags: ["After Effects", "Motion", "Posters"],
    image: motion,
    color: "from-blue-500/30 to-purple-500/30",
  },
];

export const Projects = () => {
  return (
    <section id="proyectos" className="py-24 sm:py-32 relative">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Proyectos seleccionados
            </span>
            <h2 className="font-display text-5xl sm:text-6xl font-black mt-4 leading-tight">
              Trabajo que cuenta <em className="text-gradient not-italic">historias</em>.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Una selección de proyectos recientes que muestran mi proceso, atención al detalle y
            sensibilidad visual.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${p.color} p-3 transition-all hover:-translate-y-2 duration-500`}
              style={{ marginTop: i % 2 === 1 ? "2.5rem" : "0" }}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-ink">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-background flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
              <div className="p-5 sm:p-6 flex flex-col gap-3">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider">
                  <span className="text-primary">{p.category}</span>
                  <span className="text-muted-foreground">{p.year}</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs rounded-full bg-background/60 backdrop-blur border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
