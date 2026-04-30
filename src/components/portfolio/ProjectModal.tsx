import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Calendar, Tag, User, CheckCircle2, ArrowUpRight } from "lucide-react";
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
      <DialogContent className="max-w-5xl w-[95vw] max-h-[92vh] overflow-y-auto p-0 rounded-3xl border-0">
        <div className={`relative aspect-[16/9] overflow-hidden bg-gradient-to-br ${project.color}`}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover animate-scale-in"
          />
          <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur text-xs font-bold uppercase tracking-widest">
            {project.category}
          </div>
        </div>

        <div className="p-6 sm:p-10 space-y-8">
          <div className="animate-fade-in-up">
            <h2 className="font-display text-4xl sm:text-5xl font-black leading-tight">
              {project.title}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="p-4 rounded-2xl bg-muted/50">
              <User className="w-4 h-4 text-primary mb-2" />
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Cliente</div>
              <div className="font-semibold mt-1">{project.client}</div>
            </div>
            <div className="p-4 rounded-2xl bg-muted/50">
              <Calendar className="w-4 h-4 text-primary mb-2" />
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Año</div>
              <div className="font-semibold mt-1">{project.year}</div>
            </div>
            <div className="p-4 rounded-2xl bg-muted/50">
              <Tag className="w-4 h-4 text-primary mb-2" />
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Rol</div>
              <div className="font-semibold mt-1">{project.role || "Diseño completo"}</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div>
              <h3 className="font-display text-2xl font-bold mb-4">El reto</h3>
              <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold mb-4">La solución</h3>
              <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <h3 className="font-display text-2xl font-bold mb-4">Entregables</h3>
            <ul className="grid sm:grid-cols-2 gap-3">
              {project.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3 p-3 rounded-xl bg-muted/30">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">{d}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            {project.results.map((r) => (
              <div key={r.label} className="p-5 rounded-2xl bg-ink text-ink-foreground text-center">
                <div className="font-display text-3xl font-black text-gradient">{r.value}</div>
                <div className="text-xs uppercase tracking-widest text-ink-foreground/70 mt-1">
                  {r.label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-border animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            {project.tags.map((t) => (
              <span key={t} className="px-3 py-1.5 text-xs rounded-full bg-secondary font-medium">
                #{t}
              </span>
            ))}
          </div>

          <a
            href="#contacto"
            onClick={() => onOpenChange(false)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-hero text-primary-foreground font-semibold shadow-soft hover:shadow-glow transition-all"
          >
            ¿Quieres algo así? Hablemos
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};
