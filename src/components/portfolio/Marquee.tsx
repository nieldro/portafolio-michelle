const items = [
  "Branding",
  "Editorial",
  "Packaging",
  "UI/UX",
  "Ilustración",
  "Redes sociales",
  "Diagramación",
];

export const Marquee = () => {
  const loop = [...items, ...items];
  return (
    <div className="bg-ink text-ink-foreground py-6 overflow-hidden border-y border-ink/20">
      <div className="flex gap-12 marquee whitespace-nowrap">
        {loop.map((it, i) => (
          <span
            key={i}
            className="font-display text-3xl md:text-5xl font-black flex items-center gap-12"
          >
            {it}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};
