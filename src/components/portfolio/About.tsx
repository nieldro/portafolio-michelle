import avatarAsset from "@/assets/laura-foto.png.asset.json";

const avatar = avatarAsset.url;

const skills = [
  "Adobe Photoshop",
  "Illustrator",
  "InDesign",
  "Premiere Pro",
  "WordPress",
  "CapCut Pro",
  "PicsArt",
  "Affinity",
  "Canva Pro",
  "Maya 3D",
];

const formacion = [
  { titulo: "Profesional en Diseño Visual", lugar: "Fundación Universitaria Compensar", periodo: "2023 — Actualidad" },
  { titulo: "Tecnología en Gestión de Proyectos", lugar: "Fundación Universitaria Compensar", periodo: "2026 — Actualidad" },
  { titulo: "Técnico Profesional en Producción Multimedia", lugar: "Fundación Universitaria Compensar", periodo: "2025" },
  { titulo: "Técnico Laboral en Postprensa", lugar: "SENA — Industria Gráfica", periodo: "2021" },
];

const experiencia = [
  { rol: "Diseñadora Gráfica Freelancer", lugar: "Independiente", periodo: "2024 — Actualidad" },
  { rol: "Diseñadora Visual", lugar: "La Lupa de Hoy", periodo: "Ago. 2025 — Dic. 2025" },
  { rol: "Diseñadora Visual", lugar: "La Lupa de Hoy", periodo: "Sep. 2024 — Ene. 2025" },
  { rol: "Operaria de Postprensa", lugar: "Xpress Estudio Gráfico S.A.S", periodo: "Ene. 2022 — Jul. 2022" },
];

export const About = () => {
  return (
    <section id="sobre-mi" className="py-24 sm:py-32 bg-ink text-ink-foreground relative overflow-hidden grain">
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Avatar + datos */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-4 bg-hero rounded-3xl blur-xl opacity-50" />
              <img
                src={avatar}
                alt="Laura Michelle Herrera"
                loading="lazy"
                width={768}
                height={768}
                className="relative rounded-3xl w-full max-w-md shadow-bold"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-ink rounded-2xl p-4 shadow-bold animate-float">
                <div className="font-display font-black text-2xl">✦ Bogotá</div>
                <div className="text-xs font-semibold">Disponible para proyectos</div>
              </div>
            </div>
          </div>

          {/* Texto */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                Sobre mí
              </span>
              <h2 className="font-display text-5xl sm:text-6xl font-black mt-4 leading-tight">
                Hola, soy <em className="text-gradient not-italic">Michelle</em>.
              </h2>
            </div>

            <div className="space-y-4 text-ink-foreground/80 leading-relaxed text-lg">
              <p>
                Diseñadora visual y gráfica con formación técnica y profesional en producción
                multimedia, diseño editorial y gestión de proyectos. Trabajo con marcas y
                emprendimientos para construir identidades que se sientan auténticas.
              </p>
              <p>
                Mi proceso combina <strong className="text-ink-foreground">estrategia, intuición y oficio</strong>:
                desde el briefing inicial hasta la entrega final, cuido cada detalle como si la marca
                fuera mía.
              </p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="font-display text-sm uppercase tracking-widest text-accent mb-4">
                Herramientas
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="px-4 py-2 rounded-full border border-ink-foreground/20 text-sm font-medium hover:bg-primary hover:border-primary transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experiencia + Formación */}
        <div className="grid md:grid-cols-2 gap-12 mt-24 pt-16 border-t border-ink-foreground/10">
          <div>
            <h3 className="font-display text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="text-primary">●</span> Experiencia
            </h3>
            <ol className="space-y-6">
              {experiencia.map((e) => (
                <li key={e.rol + e.periodo} className="border-l-2 border-primary/40 pl-5">
                  <div className="text-xs uppercase tracking-widest text-accent font-semibold">
                    {e.periodo}
                  </div>
                  <div className="font-display text-xl font-bold mt-1">{e.rol}</div>
                  <div className="text-ink-foreground/70 text-sm">{e.lugar}</div>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="font-display text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="text-accent">●</span> Formación
            </h3>
            <ol className="space-y-6">
              {formacion.map((f) => (
                <li key={f.titulo} className="border-l-2 border-accent/40 pl-5">
                  <div className="text-xs uppercase tracking-widest text-primary font-semibold">
                    {f.periodo}
                  </div>
                  <div className="font-display text-xl font-bold mt-1">{f.titulo}</div>
                  <div className="text-ink-foreground/70 text-sm">{f.lugar}</div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
