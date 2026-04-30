import { Quote, Star } from "lucide-react";

const testimonios = [
  {
    quote:
      "Michelle entendió la marca en una sola reunión. El rebranding superó nuestras expectativas y se nota en las ventas.",
    name: "Andrés Rojas",
    role: "Fundador · Raíz Coffee Co.",
    rating: 5,
  },
  {
    quote:
      "Profesional, puntual y con una sensibilidad estética enorme. La campaña #SéTuVoz fue nuestro mejor trimestre del año.",
    name: "Camila Restrepo",
    role: "Editora · La Lupa de Hoy",
    rating: 5,
  },
  {
    quote:
      "Trabajar con Michelle fue como tener una directora de arte in-house. Cuida cada pixel y cada decisión.",
    name: "Daniela Mora",
    role: "CEO · Acclie Studio",
    rating: 5,
  },
  {
    quote:
      "El packaging de Mila se volvió un objeto coleccionable. Los clientes nos escriben para pedirnos cajas vacías.",
    name: "Felipe Niño",
    role: "Director · Mila Artesanal",
    rating: 5,
  },
];

const logos = ["RAÍZ", "LA LUPA", "ACCLIE", "MILA", "SONORA", "LUMIÈRE", "FLORESÍA", "CELLIER"];

export const Testimonials = () => {
  return (
    <section className="py-24 sm:py-32 bg-background relative overflow-hidden">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Lo que dicen
          </span>
          <h2 className="font-display text-5xl sm:text-6xl font-black mt-4 leading-tight">
            Confían en mi <em className="text-gradient not-italic">trabajo</em>.
          </h2>
        </div>

        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 mb-16 pb-16 border-b border-border">
          {logos.map((l) => (
            <span
              key={l}
              className="font-display text-xl sm:text-2xl font-black text-muted-foreground/60 hover:text-foreground transition-colors tracking-wider"
            >
              {l}
            </span>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {testimonios.map((t, i) => (
            <div
              key={t.name}
              className="group relative p-8 rounded-3xl bg-card border border-border hover:border-primary hover:shadow-soft transition-all animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms`, opacity: 0 }}
            >
              <Quote className="w-10 h-10 text-primary/30 mb-4" />
              <p className="text-lg leading-relaxed mb-6">"{t.quote}"</p>
              <div className="flex items-center justify-between pt-6 border-t border-border">
                <div>
                  <div className="font-display font-bold text-lg">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
