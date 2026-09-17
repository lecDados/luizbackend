import claudeLogo from "@/assets/claude-code-logo.png";
import figmaLogo from "@/assets/figma-logo.png";
import lovableLogo from "@/assets/lovable-logo.png";
import awsLogo from "@/assets/aws-logo.png";

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
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-10 px-6 lg:flex-row lg:items-center lg:justify-center">
        <div className="w-full max-w-2xl overflow-hidden rounded-xl border border-border bg-card shadow-card">
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

        {/* Tools heading + orbit cluster */}
        <div className="flex w-72 shrink-0 flex-col items-center">
          <h2 className="text-center text-lg font-semibold tracking-tight text-foreground">
            Ferramentas principais
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Do design ao deploy, construindo soluções modernas e rápidas para
            qualquer tipo de negócio.
          </p>
          <div className="relative mt-6 h-72 w-72">
            {/* AWS - top behind */}
            <div className="absolute left-1/2 top-1/2 z-10 h-24 w-24 -translate-x-1/2 -translate-y-1/2 -mt-[81px] overflow-hidden rounded-full border-2 border-border bg-card shadow-card">
              <img src={awsLogo} alt="AWS" className="h-full w-full object-cover" />
            </div>
            {/* Figma - left behind */}
            <div className="absolute left-1/2 top-1/2 z-20 h-24 w-24 -translate-x-1/2 -translate-y-1/2 -ml-[81px] overflow-hidden rounded-full border-2 border-border bg-card shadow-card">
              <img src={figmaLogo} alt="Figma" className="h-full w-full object-cover" />
            </div>
            {/* Lovable - right behind */}
            <div className="absolute left-1/2 top-1/2 z-20 h-24 w-24 -translate-x-1/2 -translate-y-1/2 ml-[81px] overflow-hidden rounded-full border-2 border-border bg-card shadow-card">
              <img src={lovableLogo} alt="Lovable" className="h-full w-full object-cover" />
            </div>
            {/* Claude Code - center front */}
            <div className="absolute left-1/2 top-1/2 z-30 h-24 w-24 -translate-x-1/2 -translate-y-1/2 mt-[81px] overflow-hidden rounded-full border-2 border-border bg-card shadow-card">
              <img src={claudeLogo} alt="Claude Code" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-12">
      <div className="relative w-full overflow-hidden border-y border-border py-6 blur-[2px]">
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

      </div>
    </section>
    </>
  );
}
