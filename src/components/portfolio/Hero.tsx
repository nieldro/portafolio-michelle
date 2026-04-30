import { ArrowDown, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden grain">
      {/* Blobs decorativos */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-primary/30 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-20 w-[28rem] h-[28rem] rounded-full bg-accent/30 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container relative z-10">
        <div className="max-w-5xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ink text-ink-foreground text-xs font-semibold uppercase tracking-widest mb-8">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            Diseñadora Visual & Gráfica · Bogotá
          </div>

          <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl leading-[0.95] mb-8">
            Diseño con <em className="not-italic text-gradient">color</em>,
            <br />
            estrategia <span className="italic font-light">y</span> alma.
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            Soy <strong className="text-foreground">Laura Michelle Herrera</strong> — creo identidades visuales,
            piezas editoriales y campañas digitales que conectan marcas con personas.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#proyectos"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-hero text-primary-foreground font-semibold shadow-soft hover:shadow-glow transition-all"
            >
              Ver mi trabajo
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center px-8 py-4 rounded-full border-2 border-ink text-ink font-semibold hover:bg-ink hover:text-ink-foreground transition-colors"
            >
              Contáctame
            </a>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-3 gap-6 max-w-2xl">
            {[
              { n: "30+", l: "Proyectos entregados" },
              { n: "4+", l: "Años de experiencia" },
              { n: "15+", l: "Marcas potenciadas" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-4xl sm:text-5xl font-black text-primary">{s.n}</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
