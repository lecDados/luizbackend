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

import { HeroIntro } from "./HeroIntro";

export function Hero() {
  return (
    <>
    <HeroIntro />
    <section id="hero" className="pb-20 pt-16 md:pb-28 md:pt-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="max-w-2xl overflow-hidden rounded-xl border border-border bg-card shadow-card">
          <div className="flex items-center gap-3 border-b border-border bg-secondary px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" aria-hidden />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" aria-hidden />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" aria-hidden />
            </div>
            <span className="truncate font-mono text-xs text-muted-foreground">
              luiz@portfolio: ~
            </span>
          </div>

          <div className="p-5 font-mono text-sm md:p-6">
            <p className="text-muted-foreground">
              <span className="text-emerald-400">luiz@portfolio</span>
              <span className="text-muted-foreground">:</span>
              <span className="text-sky-400">~</span>$ whoami
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-5xl">
              Luiz Eduardo
            </h1>
            <p className="mt-1 text-lg font-medium text-orange-400 md:text-xl">
              Backend Developer
            </p>

            <p className="mt-6 text-muted-foreground">
              <span className="text-emerald-400">luiz@portfolio</span>
              <span className="text-muted-foreground">:</span>
              <span className="text-sky-400">~</span>$ cat about.txt
            </p>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              Backend developer focused on building scalable APIs, authentication
              systems, databases, and clean software architecture.
            </p>

            <p className="mt-6 text-muted-foreground">
              <span className="text-emerald-400">luiz@portfolio</span>
              <span className="text-muted-foreground">:</span>
              <span className="text-sky-400">~</span>${" "}
              <span className="inline-block h-4 w-2 translate-y-0.5 bg-orange-400" aria-hidden />
            </p>
          </div>
        </div>
      </div>


      <div className="relative mt-12 w-full overflow-hidden border-y border-border py-8">
        <div className="flex flex-col gap-4">
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
    </section>
  );
}
