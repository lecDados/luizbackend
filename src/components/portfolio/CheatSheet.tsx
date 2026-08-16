import {
  Container,
  Cloud,
  Terminal,
  GitBranch,
  Github,
  Bot,
  Database,
} from "lucide-react";

const cards = [
  {
    title: "Docker",
    icon: Container,
    color: "text-blue-400",
    border: "border-blue-400/50",
    bg: "bg-blue-400/10",
    items: [
      "Dockerfile",
      "docker build",
      "docker run",
      "docker-compose up",
      "docker ps / docker exec",
    ],
  },
  {
    title: "AWS",
    icon: Cloud,
    color: "text-orange-400",
    border: "border-orange-400/50",
    bg: "bg-orange-400/10",
    items: ["EC2", "App Runner", "ECS", "S3", "IAM"],
  },
  {
    title: "Linux",
    icon: Terminal,
    color: "text-emerald-400",
    border: "border-emerald-400/50",
    bg: "bg-emerald-400/10",
    items: [
      "Fedora",
      "Linux Mint",
      "Comandos de terminal (ls, cd, grep, chmod, systemctl)",
      "Gerenciamento de pacotes (dnf, apt)",
    ],
  },
  {
    title: "GitFlow",
    icon: GitBranch,
    color: "text-violet-400",
    border: "border-violet-400/50",
    bg: "bg-violet-400/10",
    items: [
      "git branch",
      "git checkout -b",
      "git merge",
      "git rebase",
      "Pull Request",
    ],
  },
  {
    title: "GitHub",
    icon: Github,
    color: "text-slate-200",
    border: "border-slate-400/50",
    bg: "bg-slate-400/10",
    items: [
      "GitHub Actions",
      "Issues",
      "Pull Requests",
      "GitHub Pages",
      "Secrets/Variáveis de ambiente",
    ],
  },
  {
    title: "Boas práticas com IA",
    icon: Bot,
    color: "text-fuchsia-400",
    border: "border-fuchsia-400/50",
    bg: "bg-fuchsia-400/10",
    items: [
      "Prompts claros e objetivos",
      "Revisar código gerado antes de aplicar",
      "Integração cuidadosa com código já existente",
      "Evitar sobrescrever funções sem contexto",
      "Testar após cada alteração sugerida pela IA",
    ],
  },
  {
    title: "Bancos de Dados",
    icon: Database,
    color: "text-teal-400",
    border: "border-teal-400/50",
    bg: "bg-teal-400/10",
    items: [
      "MongoDB (Atlas / local)",
      "MySQL",
      "PostgreSQL",
      "Modelagem de dados",
      "Queries básicas (SELECT, JOIN, INDEX)",
    ],
  },
];

export function CheatSheet() {
  return (
    <section id="cheatsheet" className="w-full border-b border-border py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <header className="mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-orange-400">
            Referência Rápida
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Cheat Sheet
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Cards de consulta rápida com conceitos, comandos e boas práticas do dia a dia.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                className="group rounded-xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-[0_8px_28px_-6px_rgb(249_115_22_/0.15)]"
              >
                <div className="flex items-center gap-3 border-b border-border pb-4">
                  <div
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg border ${card.border} ${card.bg}`}
                  >
                    <Icon className={`h-5 w-5 ${card.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {card.title}
                  </h3>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {card.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 font-mono text-sm text-muted-foreground"
                    >
                      <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${card.bg.replace("/10", "")}`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
