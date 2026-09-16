import projectBtc from "@/assets/project-btc.jpg";
import projectDecoradora from "@/assets/project-decoradora.jpg";
import projectApi from "@/assets/project-api.jpg";

const projects = [
  {
    image: projectBtc,
    title: "Painel de Investimento em BTC",
    subtitle: "Dashboard financeiro",
    description:
      "Aplicação web para acompanhamento de carteiras de criptomoedas, com gráficos em tempo real, histórico de operações e cálculo de rentabilidade.",
    tags: ["Node.js", "Express", "MySQL"],
  },
  {
    image: projectDecoradora,
    title: "Website para Decoradora de Festas",
    subtitle: "Landing page",
    description:
      "Site institucional para divulgação de serviços de decoração de festas, com galeria de trabalhos, apresentação de pacotes e canal de contato.",
    tags: ["HTML 5", "CSS 3", "JavaScript"],
  },
  {
    image: projectApi,
    title: "API de Autenticação",
    subtitle: "Serviço back-end",
    description:
      "API REST para autenticação e gestão de usuários, com tokens JWT, validação de dados, testes automatizados e documentação de endpoints.",
    tags: ["Node.js", "JWT", "Zod"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Projetos
        </h2>
        <div className="mt-3 h-1 w-12 rounded-full bg-orange-500/70" />
        <p className="mt-4 text-muted-foreground">
          Alguns dos projetos que desenvolvi.
        </p>

        <div className="mt-10 flex flex-col gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card transition-transform duration-300 hover:-translate-y-1 sm:flex-row"
            >
              <div className="w-full shrink-0 border-b border-border sm:w-64 sm:border-b-0 sm:border-r md:w-72">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  width={992}
                  height={672}
                  className="h-48 w-full object-cover sm:h-full"
                />
              </div>

              <div className="flex flex-col justify-center gap-2 p-6">
                <h3 className="text-lg font-semibold text-card-foreground">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-orange-400">
                  {project.subtitle}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
