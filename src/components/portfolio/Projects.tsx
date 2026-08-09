type Group = {
  id: string;
  title: string;
  windowTitle: string;
  subtitle: string;
  accent: string;
  accentBorder: string;
  accentBg: string;
  featured?: boolean;
  tags: string[];
};

const groups: Group[] = [
  {
    id: "backend",
    title: "Back-end",
    windowTitle: "~/projects/backend",
    subtitle: "APIs, banco de dados e regras de negócio.",
    accent: "text-sky-400",
    accentBorder: "border-sky-500/30",
    accentBg: "bg-sky-500/10",
    tags: ["Node.js", "Express", "MySQL", "MongoDB", "REST API", "JWT"],
  },
  {
    id: "frontend",
    title: "Front-end",
    windowTitle: "~/projects/frontend",
    subtitle: "Interfaces responsivas e experiência de uso.",
    accent: "text-violet-400",
    accentBorder: "border-violet-500/30",
    accentBg: "bg-violet-500/10",
    tags: ["React", "Tailwind", "JavaScript", "Chart.js", "Lovable", "Responsivo"],
  },
  {
    id: "real",
    title: "Projetos Reais e Participações",
    windowTitle: "~/projects/producao",
    subtitle: "Trabalhos entregues para clientes e projetos aplicados.",
    accent: "text-orange-400",
    accentBorder: "border-orange-500/40",
    accentBg: "bg-orange-500/10",
    featured: true,
    tags: [
      "Oficina de Moto",
      "Automação de Planilhas",
      "Decoradora de Festas",
      "Supabase",
      "Lovable",
      "Full-stack",
    ],
  },
];

function TrafficLights() {
  return (
    <div className="flex items-center gap-2">
      <span className="h-3 w-3 rounded-full bg-[#ff5f57]" aria-hidden />
      <span className="h-3 w-3 rounded-full bg-[#febc2e]" aria-hidden />
      <span className="h-3 w-3 rounded-full bg-[#28c840]" aria-hidden />
    </div>
  );
}

function WindowCard({ group }: { group: Group }) {
  return (
    <article
      className={`flex h-full flex-col overflow-hidden rounded-xl border ${group.accentBorder} bg-card shadow-card ${
        group.featured ? "ring-1 ring-orange-500/20" : ""
      }`}
    >
      <div className="flex items-center gap-3 border-b border-border bg-secondary px-4 py-3">
        <TrafficLights />
        <span className="truncate font-mono text-xs text-muted-foreground">
          {group.windowTitle}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start gap-3">
          <div className="min-w-0">
            <h3 className={`font-mono text-lg font-semibold ${group.accent}`}>
              {group.title}
            </h3>
            <p className="mt-1 font-mono text-xs text-muted-foreground">
              {"// "}
              {group.subtitle}
            </p>
          </div>
          {group.featured && (
            <span className="ml-auto shrink-0 rounded-md border border-orange-500/40 bg-orange-500/10 px-2 py-1 text-[11px] font-medium text-orange-400">
              Destaque
            </span>
          )}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {group.tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-md border ${group.accentBorder} ${group.accentBg} px-2.5 py-1 font-mono text-[11px] ${group.accent}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Projects
        </h2>
        <div className="mt-3 h-1 w-12 rounded-full bg-orange-500/70" />
        <p className="mt-4 text-muted-foreground">
          Backend, front-end e projetos reais.
        </p>

        <div className="mt-10 grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <WindowCard key={group.id} group={group} />
          ))}
        </div>

        <article className="mt-6 overflow-hidden rounded-xl border border-border bg-card shadow-card">
          <div className="flex items-center gap-3 border-b border-border bg-secondary px-4 py-3">
            <TrafficLights />
            <span className="truncate font-mono text-xs text-muted-foreground">
              ~/projects/galeria
            </span>
          </div>
          <div className="p-5">
            <h3 className="font-mono text-lg font-semibold text-orange-400">
              Galeria
            </h3>
            <p className="mt-1 font-mono text-xs text-muted-foreground">
              {"// "}Prévias visuais dos projetos.
            </p>
            <div className="mt-6">
              <Coverflow />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

