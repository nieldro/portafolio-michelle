import { useEffect, useState } from "react";

export const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const start = Date.now();
    const duration = 1800;
    const tick = () => {
      const p = Math.min(100, ((Date.now() - start) / duration) * 100);
      setProgress(p);
      if (p < 100) requestAnimationFrame(tick);
      else {
        setTimeout(() => setLeaving(true), 200);
        setTimeout(() => setHidden(true), 1100);
      }
    };
    requestAnimationFrame(tick);
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-ink text-ink-foreground flex flex-col items-center justify-center grain ${
        leaving ? "animate-loader-out" : ""
      }`}
    >
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/40 blur-3xl animate-blob" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/30 blur-3xl animate-blob" style={{ animationDelay: "2s" }} />

      <div className="relative text-center px-6">
        <div className="font-display text-6xl sm:text-8xl font-black mb-4 leading-none">
          <span className="inline-block animate-fade-in-up">M</span>
          <span className="inline-block animate-fade-in-up text-gradient" style={{ animationDelay: "0.1s" }}>i</span>
          <span className="inline-block animate-fade-in-up" style={{ animationDelay: "0.2s" }}>c</span>
          <span className="inline-block animate-fade-in-up" style={{ animationDelay: "0.3s" }}>h</span>
          <span className="inline-block animate-fade-in-up" style={{ animationDelay: "0.4s" }}>e</span>
          <span className="inline-block animate-fade-in-up text-gradient" style={{ animationDelay: "0.5s" }}>l</span>
          <span className="inline-block animate-fade-in-up" style={{ animationDelay: "0.6s" }}>l</span>
          <span className="inline-block animate-fade-in-up" style={{ animationDelay: "0.7s" }}>e</span>
          <span className="inline-block animate-fade-in-up text-primary" style={{ animationDelay: "0.8s" }}>.</span>
        </div>
        <div className="text-xs uppercase tracking-[0.4em] text-ink-foreground/60 mb-10">
          Diseñadora Visual & Gráfica
        </div>

        <div className="w-64 sm:w-80 h-[3px] bg-ink-foreground/10 rounded-full overflow-hidden mx-auto">
          <div
            className="h-full bg-hero rounded-full transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-3 text-xs font-mono text-ink-foreground/50">
          {Math.floor(progress)}%
        </div>
      </div>
    </div>
  );
};
