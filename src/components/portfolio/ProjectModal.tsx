import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Calendar, User, Briefcase, ArrowUpRight, X, Maximize2 } from "lucide-react";
import { useState, useEffect } from "react";
import type { MouseEvent } from "react";
import type { Project } from "./Projects";

export const ProjectModal = ({
  project,
  open,
  onOpenChange,
}: {
  project: Project | null;
  open: boolean;
  onOpenChange: (o: boolean) => void;
}) => {
  const [lightbox, setLightbox] = useState(false);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLightbox(false);
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [lightbox]);

  if (!project) return null;

  const scrollToContact = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onOpenChange(false);
    window.setTimeout(() => {
      document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="block left-1/2 top-4 translate-y-0 max-w-5xl w-[94vw] max-h-[calc(100vh-2rem)] overflow-y-auto p-0 rounded-2xl border border-border bg-background shadow-bold [&>button]:hidden">
        {/* Close */}
        <button
          onClick={() => onOpenChange(false)}
          className="sticky top-4 ml-auto mr-4 mt-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/95 shadow-soft backdrop-blur transition-colors hover:bg-ink hover:text-ink-foreground"
          aria-label="Cerrar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="px-4 pb-8 pt-2 sm:px-10 lg:px-14 lg:pb-14">
          {/* Title block — separado de la imagen para que nada se monte encima */}
          <header className="animate-fade-in-up border-b border-border pb-8 sm:pb-10">
            <div className="mb-5 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              <span>{project.category}</span>
              <span className="w-8 h-px bg-primary/40" />
              <span className="text-muted-foreground">{project.year}</span>
            </div>
            <DialogTitle className="font-display text-3xl font-black leading-[1.05] tracking-normal text-foreground sm:text-6xl break-words">
              {project.title}
            </DialogTitle>
            <DialogDescription className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {project.description}
            </DialogDescription>
          </header>

          {/* Imagen: clic para verla completa en pantalla */}
          <button
            type="button"
            onClick={() => setLightbox(true)}
            className={`group relative mt-8 block w-full overflow-hidden rounded-2xl bg-gradient-to-br ${project.color} focus:outline-none focus-visible:ring-2 focus-visible:ring-primary`}
            aria-label="Ver imagen en pantalla completa"
          >
            <img
              src={project.image}
              alt={project.title}
              className="block aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] sm:aspect-[16/9]"
            />
            <span className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-full bg-background/90 px-3 py-1.5 text-xs font-semibold text-foreground shadow-soft backdrop-blur opacity-90 group-hover:opacity-100">
              <Maximize2 className="w-3.5 h-3.5" /> Ver completa
            </span>
          </button>

          <div className="space-y-12 pt-10 sm:space-y-14 sm:pt-12">

          {/* Meta row */}
          <div className="grid sm:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            {[
              { icon: User, label: "Cliente", value: project.client },
              { icon: Calendar, label: "Año", value: project.year },
              { icon: Briefcase, label: "Rol", value: project.role || "Diseño completo" },
            ].map((m) => (
              <div key={m.label} className="bg-background p-6">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  <m.icon className="w-3.5 h-3.5" />
                  {m.label}
                </div>
                <div className="font-display text-lg font-bold">{m.value}</div>
              </div>
            ))}
          </div>

          {/* Reto + Solución */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-primary font-bold mb-4">
                01 · El reto
              </div>
              <p className="text-lg leading-relaxed text-foreground/80">{project.challenge}</p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-accent font-bold mb-4">
                02 · La solución
              </div>
              <p className="text-lg leading-relaxed text-foreground/80">{project.solution}</p>
            </div>
          </div>

          {/* Entregables */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-bold mb-6">
              03 · Entregables
            </div>
            <ul className="grid sm:grid-cols-2 gap-x-12 gap-y-1 divide-y divide-border sm:divide-y-0">
              {project.deliverables.map((d, i) => (
                <li key={d} className="flex items-baseline gap-4 py-4 border-b border-border">
                  <span className="font-mono text-xs text-muted-foreground tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base font-medium">{d}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Resultados */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-bold mb-6">
              04 · Resultados
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 rounded-3xl overflow-hidden">
              {project.results.map((r) => (
                <div key={r.label} className="bg-ink text-ink-foreground p-6 sm:p-8 text-center">
                  <div className="font-display text-4xl sm:text-5xl font-black text-gradient leading-none">
                    {r.value}
                  </div>
                  <div className="text-[11px] uppercase tracking-widest text-ink-foreground/60 mt-3">
                    {r.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tags + CTA */}
          <div className="pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 text-xs rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href="#contacto"
              onClick={scrollToContact}
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-ink text-ink-foreground font-semibold hover:bg-primary transition-colors shrink-0"
            >
              ¿Quieres algo así?
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
          </div>
        </div>
      </DialogContent>

      {/* Lightbox a pantalla completa */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-3 sm:p-6 animate-fade-in-up"
          onClick={() => setLightbox(false)}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox(false); }}
            aria-label="Cerrar"
            className="absolute top-4 right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={project.image}
            alt={project.title}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[92vh] max-w-[96vw] w-auto h-auto object-contain rounded-xl shadow-bold"
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-xs uppercase tracking-widest font-semibold">
            Toca fuera para cerrar
          </div>
        </div>
      )}
    </Dialog>
  );
};
