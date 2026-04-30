import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Calendar, User, Briefcase, ArrowUpRight, X } from "lucide-react";
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
  if (!project) return null;
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl w-[96vw] max-h-[94vh] overflow-y-auto p-0 rounded-3xl border-0 bg-background [&>button]:hidden">
        {/* Close */}
        <button
          onClick={() => onOpenChange(false)}
          className="fixed sm:absolute top-4 right-4 z-10 w-11 h-11 rounded-full bg-background/90 backdrop-blur border border-border flex items-center justify-center hover:bg-ink hover:text-ink-foreground transition-colors shadow-soft"
          aria-label="Cerrar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero */}
        <div className={`relative aspect-[16/10] sm:aspect-[21/9] overflow-hidden bg-gradient-to-br ${project.color}`}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover animate-scale-in"
          />
        </div>

        <div className="px-6 sm:px-16 py-12 sm:py-16 space-y-16">
          {/* Title block */}
          <header className="max-w-3xl animate-fade-in-up">
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6">
              <span>{project.category}</span>
              <span className="w-8 h-px bg-primary/40" />
              <span className="text-muted-foreground">{project.year}</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-black leading-[1.05] tracking-tight">
              {project.title}
            </h2>
            <p className="mt-8 text-xl text-muted-foreground leading-relaxed font-light">
              {project.description}
            </p>
          </header>

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
              onClick={() => onOpenChange(false)}
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-ink text-ink-foreground font-semibold hover:bg-primary transition-colors shrink-0"
            >
              ¿Quieres algo así?
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
