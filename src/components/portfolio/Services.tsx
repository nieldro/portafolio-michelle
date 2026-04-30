import { Palette, Layout, Sparkles, Layers, Smartphone, Package } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Branding & Identidad",
    desc: "Logos, sistemas de color, tipografía y guías de marca que construyen identidades memorables.",
  },
  {
    icon: Layout,
    title: "Diseño Editorial",
    desc: "Revistas, libros, catálogos y diagramación con jerarquía visual cuidada al detalle.",
  },
  {
    icon: Smartphone,
    title: "Contenido Digital",
    desc: "Piezas para redes sociales, campañas multiplataforma y comunicación de marca con foco en engagement.",
  },
  {
    icon: Sparkles,
    title: "Motion Graphics",
    desc: "Animaciones, transiciones y micro-interacciones que dan vida a las marcas.",
  },
  {
    icon: Package,
    title: "Packaging & Print",
    desc: "Empaques, etiquetas y producción impresa con conocimiento técnico de postprensa.",
  },
  {
    icon: Layers,
    title: "UI/UX Básico",
    desc: "Interfaces limpias y prototipos en Figma para apps, sitios y landing pages.",
  },
];

export const Services = () => {
  return (
    <section id="servicios" className="py-24 sm:py-32">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Servicios
          </span>
          <h2 className="font-display text-5xl sm:text-6xl font-black mt-4 leading-tight">
            De la idea al <em className="text-gradient not-italic">pixel final</em>.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative p-8 rounded-3xl bg-card border border-border hover:border-primary hover:shadow-soft transition-all"
            >
              <div className="absolute top-6 right-6 font-display text-5xl font-black text-muted/40 group-hover:text-primary/20 transition-colors">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="w-14 h-14 rounded-2xl bg-hero flex items-center justify-center mb-6 shadow-soft">
                <s.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
