import claudeLogo from "@/assets/claude-code-logo.png";
import figmaLogo from "@/assets/figma-logo.png";
import lovableLogo from "@/assets/lovable-logo.png";
import awsLogo from "@/assets/aws-logo.png";
import dockerLogo from "@/assets/docker.png.asset.json";
import githubLogo from "@/assets/github.jpg.asset.json";
import oracleLogo from "@/assets/oracle.jpg.asset.json";
import profilePhoto from "@/assets/perfil.png.asset.json";
import univespLogo from "@/assets/univesp-logo.jpg.asset.json";

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
          {/* Perfil + Formação */}
          <div className="flex flex-wrap items-center gap-4 border-b border-border px-5 py-4">
            <img
              src={profilePhoto.url}
              alt="Foto de perfil de Luiz Eduardo"
              loading="lazy"
              width={56}
              height={56}
              className="h-14 w-14 rounded-full border border-border object-cover"
            />
            <div className="min-w-0">
              <p className="truncate font-semibold tracking-tight">Luiz Eduardo</p>
              <p className="text-sm font-medium text-orange-400">Backend Developer</p>
            </div>
            <div className="min-w-[160px] flex-1">
              <p className="flex items-center gap-2 text-xs font-medium leading-snug">
                <img
                  src={univespLogo.url}
                  alt="Logo da UNIVESP"
                  loading="lazy"
                  width={20}
                  height={20}
                  className="h-5 w-5 shrink-0 rounded object-cover"
                />
                Tecnologia da Informação — UNIVESP | 2024–2028
              </p>
              <p className="mt-0.5 text-[11px] leading-snug text-muted-foreground">
                Graduação em andamento — aproximadamente 50% concluído.
              </p>
              <div
                className="mt-1.5 h-1 w-full max-w-40 overflow-hidden rounded-full bg-secondary"
                role="progressbar"
                aria-valuenow={50}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div className="h-full w-1/2 rounded-full bg-orange-400" />
              </div>
            </div>
          </div>

          <div className="overflow-hidden">
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
              <span className="text-sky-400">~</span>$ cat about.txt
            </p>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              I enjoy solving real-world problems through backend development. I
              focus on writing organized, maintainable, and scalable code while
              continuously improving my technical skills.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              I work with authentication systems, REST APIs, databases, Docker,
              AI-assisted development, Supabase integrations, payment workflows,
              and modern backend architectures.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              I value clean code, continuous learning, and building reliable
              software.
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
            {/* Docker - pequeno, topo esquerda */}
            <div className="absolute left-1/2 top-1/2 z-[25] h-12 w-12 -translate-x-1/2 -translate-y-1/2 -mt-[120px] -ml-[70px] overflow-hidden rounded-[100%] border-2 border-border bg-card shadow-card">
              <img src={dockerLogo.url} alt="Docker" className="h-full w-full object-cover" />
            </div>
            {/* GitHub - médio, baixo direita */}
            <div className="absolute left-1/2 top-1/2 z-40 h-14 w-14 -translate-x-1/2 -translate-y-1/2 mt-[60px] ml-[110px] overflow-hidden rounded-[100%] border-2 border-border bg-card shadow-card">
              <img src={githubLogo.url} alt="GitHub" className="h-full w-full object-cover" />
            </div>
            {/* Oracle - bem pequeno, sobreposto à direita */}
            <div className="absolute left-1/2 top-1/2 z-40 h-10 w-10 -translate-x-1/2 -translate-y-1/2 -mt-[30px] ml-[120px] overflow-hidden rounded-[100%] border-2 border-border bg-card shadow-card">
              <img src={oracleLogo.url} alt="Oracle" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>

    </section>
    </>
  );
}
