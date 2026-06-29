import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Contact = () => {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Nuevo proyecto · ${form.nombre}`);
    const body = encodeURIComponent(`${form.mensaje}\n\nDe: ${form.nombre}\nEmail: ${form.email}`);
    window.location.href = `mailto:michelherrera0819@gmail.com?subject=${subject}&body=${body}`;
    toast.success("Abriendo tu cliente de correo…");
  };

  return (
    <section id="contacto" className="py-24 sm:py-32 bg-ink text-ink-foreground relative overflow-hidden grain">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-hero opacity-20 blur-3xl" />
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Contacto
            </span>
            <h2 className="font-display text-5xl sm:text-7xl font-black mt-4 leading-[0.95]">
              ¿Tienes una <em className="text-gradient not-italic">idea</em>?<br />
              Hagámosla real.
            </h2>
            <p className="mt-6 text-ink-foreground/70 text-lg max-w-md">
              Estoy disponible para proyectos freelance, colaboraciones y posiciones in-house.
            </p>

            <ul className="mt-10 space-y-4">
              <li>
                <a
                  href="mailto:michelherrera0819@gmail.com"
                  className="group flex items-center gap-4 p-4 rounded-2xl border border-ink-foreground/10 hover:border-primary hover:bg-ink-foreground/5 transition-all"
                >
                  <Mail className="w-5 h-5 text-accent" />
                  <span className="flex-1 font-medium">michelherrera0819@gmail.com</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="tel:+573107515056"
                  className="group flex items-center gap-4 p-4 rounded-2xl border border-ink-foreground/10 hover:border-primary hover:bg-ink-foreground/5 transition-all"
                >
                  <Phone className="w-5 h-5 text-accent" />
                  <span className="flex-1 font-medium">+57 310 751 5056</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li className="flex items-center gap-4 p-4">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="font-medium">Bogotá, Colombia</span>
              </li>
            </ul>
          </div>

          <form
            onSubmit={submit}
            className="bg-background text-foreground p-6 sm:p-10 rounded-3xl shadow-bold space-y-5 w-full min-w-0"
          >
            <h3 className="font-display text-2xl font-bold">Cuéntame de tu proyecto</h3>
            <div>
              <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Nombre
              </label>
              <input
                required
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                className="mt-2 w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary transition-colors"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Email
              </label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-2 w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary transition-colors"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Mensaje
              </label>
              <textarea
                required
                rows={5}
                value={form.mensaje}
                onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                className="mt-2 w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Cuéntame qué necesitas…"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 rounded-full bg-hero text-primary-foreground font-semibold shadow-soft hover:shadow-glow transition-all"
            >
              Enviar mensaje
            </button>
          </form>
        </div>

        <footer className="mt-24 pt-8 border-t border-ink-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-ink-foreground/60">
          <div>© 2026 Laura Michelle Herrera Bedoya. Todos los derechos reservados.</div>
          <div className="font-display italic">Diseñado con ♥ en Bogotá</div>
        </footer>
      </div>
    </section>
  );
};
