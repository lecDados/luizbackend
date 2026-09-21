const rows = [
  {
    direction: "left" as const,
    duration: "28s",
    items: [
      { label: "Node.js", size: "text-2xl md:text-4xl", color: "text-orange-400" },
      { label: "JavaScript", size: "text-lg md:text-2xl", color: "text-emerald-400" },
      { label: "Express", size: "text-3xl md:text-5xl", color: "text-sky-400" },
      { label: "MongoDB", size: "text-xl md:text-3xl", color: "text-lime-400" },
      { label: "MySQL", size: "text-2xl md:text-4xl", color: "text-cyan-400" },
    ],
  },
  {
    direction: "right" as const,
    duration: "36s",
    items: [
      { label: "Docker", size: "text-3xl md:text-5xl", color: "text-blue-400" },
      { label: "JWT", size: "text-lg md:text-2xl", color: "text-fuchsia-400" },
      { label: "REST APIs", size: "text-2xl md:text-4xl", color: "text-orange-300" },
      { label: "Git", size: "text-xl md:text-3xl", color: "text-red-400" },
      { label: "GitHub", size: "text-2xl md:text-4xl", color: "text-violet-400" },
    ],
  },
  {
    direction: "left" as const,
    duration: "22s",
    items: [
      { label: "Zod", size: "text-xl md:text-3xl", color: "text-teal-400" },
      { label: "HTML 5", size: "text-2xl md:text-4xl", color: "text-amber-400" },
      { label: "CSS 3", size: "text-lg md:text-2xl", color: "text-indigo-400" },
      { label: "Jest", size: "text-3xl md:text-5xl", color: "text-rose-400" },
      { label: "Clean Architecture", size: "text-xl md:text-3xl", color: "text-orange-400" },
    ],
  },
  {
    direction: "right" as const,
    duration: "44s",
    items: [
      { label: "Scalable APIs", size: "text-2xl md:text-4xl", color: "text-emerald-300" },
      { label: "Auth Systems", size: "text-lg md:text-2xl", color: "text-sky-300" },
      { label: "Databases", size: "text-3xl md:text-5xl", color: "text-orange-500" },
      { label: "Testing", size: "text-xl md:text-3xl", color: "text-purple-400" },
      { label: "CI / CD", size: "text-2xl md:text-4xl", color: "text-yellow-400" },
    ],
  },
];

function Marquee() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 flex items-center overflow-hidden blur-[2px]"
    >
      <div className="flex flex-col gap-3">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="relative flex overflow-hidden">
            <div
              className="flex shrink-0 items-center gap-10 pr-10"
              style={{
                animation: `marquee-${row.direction} ${row.duration} linear infinite`,
              }}
            >
              {row.items.map((item) => (
                <span
                  key={item.label}
                  className={`whitespace-nowrap font-mono font-bold ${item.size} ${item.color}`}
                >
                  {item.label}
                </span>
              ))}
            </div>
            <div
              aria-hidden
              className="flex shrink-0 items-center gap-10 pr-10"
              style={{
                animation: `marquee-${row.direction} ${row.duration} linear infinite`,
              }}
            >
              {row.items.map((item) => (
                <span
                  key={`${item.label}-dup`}
                  className={`whitespace-nowrap font-mono font-bold ${item.size} ${item.color}`}
                >
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-black px-6 py-10">
      <Marquee />
      <div className="relative z-10 mx-auto max-w-[1200px]">
        <p className="text-lg font-semibold text-foreground">Luiz Eduardo</p>
        <p className="text-sm font-medium text-orange-400">Backend Developer</p>
        <p className="mt-4 text-xs text-muted-foreground">
          Designed and developed by Luiz Eduardo.
        </p>
      </div>
    </footer>
  );
}
