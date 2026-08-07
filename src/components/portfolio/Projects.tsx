import { Github, ExternalLink } from "lucide-react";
import inventoryProject from "@/assets/inventory-project.jpg";
import projetoPi from "@/assets/projeto-pi.jpg";
import partyDecorWebsite from "@/assets/party-decor-website.jpg";
import btcDashboard from "@/assets/btc-dashboard.jpg";

type Project = {
  name: string;
  description: string;
  repository: string;
  liveUrl?: string;
  image: string;
  tags: string[];
};

type Group = {
  id: string;
  title: string;
  windowTitle: string;
  subtitle: string;
  accent: string;
  accentBorder: string;
  accentBg: string;
  featured?: boolean;
  projects: Project[];
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
    projects: [
      {
        name: "Inventory Management System",
        description:
          "Aplicação completa de controle de estoque com foco em organização, escalabilidade e persistência de dados, incluindo CRUD e gestão de produtos.",
        repository: "https://github.com/lecDados/controle_de_estoque",
        image: inventoryProject,
        tags: ["Node.js", "Express", "MongoDB", "JavaScript"],
      },
      {
        name: "Painel de Investimento em BTC",
        description:
          "Plataforma de acompanhamento do mercado de criptomoedas, consultando API em tempo real para altas, quedas e indicadores de investimento.",
        repository: "https://github.com/lecDados/painelDeInvestimentoBTC.git",
        image: btcDashboard,
        tags: ["Node.js", "Express", "MongoDB", "JWT", "REST API"],
      },
    ],
  },
  {
    id: "frontend",
    title: "Front-end",
    windowTitle: "~/projects/frontend",
    subtitle: "Interfaces responsivas e experiência de uso.",
    accent: "text-violet-400",
    accentBorder: "border-violet-500/30",
    accentBg: "bg-violet-500/10",
    projects: [
      {
        name: "Website para Decoradora de Festas",
        description:
          "Landing page moderna com catálogo de serviços, galeria de fotos, formulário de orçamento e integração com WhatsApp.",
        repository: "https://github.com/lecDados/website-decoradora-festas",
        liveUrl: "https://github.com/lecDados/website-decoradora-festas",
        image: partyDecorWebsite,
        tags: ["React", "Tailwind", "Responsivo", "SEO"],
      },
      {
        name: "Dashboards e Gráficos",
        description:
          "Construção de dashboards em React com visualização de dados em tempo real usando Chart.js e consumo de APIs via Axios.",
        repository: "https://github.com/lecDados/painelDeInvestimentoBTC.git",
        image: btcDashboard,
        tags: ["React", "Chart.js", "Axios"],
      },
    ],
  },
  {
    id: "real",
    title: "Projetos Reais e Participações",
    windowTitle: "~/projects/producao",
    subtitle: "Trabalhos entregues para clientes e projetos acadêmicos aplicados.",
    accent: "text-orange-400",
    accentBorder: "border-orange-500/40",
    accentBg: "bg-orange-500/10",
    featured: true,
    projects: [
      {
        name: "Website para Decoradora de Festas",
        description:
          "Projeto real entregue para empresa de decoração de festas, com painel administrativo, autenticação e formulários salvos em MongoDB.",
        repository: "https://github.com/lecDados/website-decoradora-festas",
        liveUrl: "https://github.com/lecDados/website-decoradora-festas",
        image: partyDecorWebsite,
        tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      },
      {
        name: "Projeto PI",
        description:
          "Projeto integrador full-stack com participação em equipe, focado em integração de API, autenticação e gestão de banco de dados.",
        repository: "https://github.com/lecDados/projetoPi",
        image: projetoPi,
        tags: ["Full-stack", "API", "Autenticação", "Database"],
      },
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
      className={`overflow-hidden rounded-xl border ${group.accentBorder} bg-card shadow-card ${
        group.featured ? "lg:col-span-2 ring-1 ring-orange-500/20" : ""
      }`}
    >
      <div className="flex items-center gap-3 border-b border-border bg-secondary px-4 py-3">
        <TrafficLights />
        <span className="truncate font-mono text-xs text-muted-foreground">
          {group.windowTitle}
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-start gap-3">
          <div>
            <h3 className={`text-lg font-semibold ${group.accent}`}>
              {group.title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">{group.subtitle}</p>
          </div>
          {group.featured && (
            <span className="ml-auto shrink-0 rounded-md border border-orange-500/40 bg-orange-500/10 px-2 py-1 text-[11px] font-medium text-orange-400">
              Destaque
            </span>
          )}
        </div>

        <div
          className={`mt-5 grid gap-4 ${group.featured ? "md:grid-cols-2" : "grid-cols-1"}`}
        >
          {group.projects.map((project) => (
            <div
              key={`${group.id}-${project.name}`}
              className="rounded-lg border border-border bg-background p-4"
            >
              <img
                src={project.image}
                alt={project.name}
                width={1024}
                height={576}
                loading="lazy"
                className="aspect-video w-full rounded-md object-cover"
              />
              <h4 className="mt-4 text-base font-semibold text-card-foreground">
                {project.name}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`inline-flex items-center rounded-md border ${group.accentBorder} px-2 py-1 text-xs font-medium text-muted-foreground`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary px-3 py-2 text-sm font-medium text-foreground hover:bg-accent"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Visualizar Projeto
                  </a>
                )}
                <a
                  href={project.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-sm font-medium text-foreground hover:bg-accent"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </div>
            </div>
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

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {groups.map((group) => (
            <WindowCard key={group.id} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}
