import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import projectBtc from "@/assets/project-btc.jpg";
import projectBtc2 from "@/assets/project-btc-2.jpg";
import projectBtc3 from "@/assets/project-btc-3.jpg";
import projectDecoradora from "@/assets/project-decoradora.jpg";
import projectDecoradora2 from "@/assets/project-decoradora-2.jpg";
import projectDecoradora3 from "@/assets/project-decoradora-3.jpg";
import projectApi from "@/assets/project-api.jpg";
import projectApi2 from "@/assets/project-api-2.jpg";
import projectApi3 from "@/assets/project-api-3.jpg";
import projectEstoque from "@/assets/project-estoque.jpg";
import projectEstoque2 from "@/assets/project-estoque-2.jpg";
import projectEstoque3 from "@/assets/project-estoque-3.jpg";
import projectBot from "@/assets/project-bot.jpg";
import projectBot2 from "@/assets/project-bot-2.jpg";
import projectBot3 from "@/assets/project-bot-3.jpg";

type Project = {
  images: string[];
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
};

type Group = {
  category: string;
  online?: boolean;
  carousel?: boolean;
  projects: Project[];
};

const groups: Group[] = [
  {
    category: "Back-end",
    carousel: true,
    projects: [
      {
        images: [projectBtc, projectBtc2, projectBtc3],
        title: "Painel de Investimento em BTC",
        subtitle: "Dashboard financeiro",
        description:
          "Aplicação web para acompanhamento de carteiras de criptomoedas, com gráficos em tempo real, histórico de operações e cálculo de rentabilidade.",
        tags: ["Node.js", "Express", "MySQL"],
      },
      {
        images: [projectEstoque, projectEstoque2, projectEstoque3],
        title: "Sistema de Controle de Estoque",
        subtitle: "Gestão de inventário",
        description:
          "Sistema para controle de produtos, entradas e saídas de estoque, com alertas de reposição, relatórios de movimentação e gestão de múltiplos armazéns.",
        tags: ["Node.js", "PostgreSQL", "Prisma"],
      },
      {
        images: [projectBot, projectBot2, projectBot3],
        title: "Automação de Mensagens com IA",
        subtitle: "Chatbot de atendimento",
        description:
          "Plataforma de automação de mensagens para WhatsApp e Telegram, com fluxos configuráveis, respostas automáticas por IA e painel de estatísticas.",
        tags: ["Node.js", "OpenAI", "Redis"],
      },
    ],
  },
  {
    category: "Front-end",
    projects: [
      {
        images: [projectDecoradora, projectDecoradora2, projectDecoradora3],
        title: "Website para Decoradora de Festas",
        subtitle: "Landing page",
        description:
          "Site institucional para divulgação de serviços de decoração de festas, com galeria de trabalhos, apresentação de pacotes e canal de contato.",
        tags: ["HTML 5", "CSS 3", "JavaScript"],
      },
    ],
  },
  {
    category: "Projetos em produção",
    online: true,
    projects: [
      {
        images: [projectApi, projectApi2, projectApi3],
        title: "API de Autenticação",
        subtitle: "Serviço back-end",
        description:
          "API REST para autenticação e gestão de usuários, com tokens JWT, validação de dados, testes automatizados e documentação de endpoints.",
        tags: ["Node.js", "JWT", "Zod"],
      },
    ],
  },
];

function CardCarousel({ images, title }: { images: string[]; title: string }) {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div className="group/carousel relative w-full shrink-0 border-b border-border sm:w-64 sm:border-b-0 sm:border-r md:w-72">
      <div className="overflow-hidden">
        <div
          className="flex h-48 w-full sm:h-full"
          style={{
            transform: `translateX(-${index * 100}%)`,
            transition: "transform 400ms ease-out",
          }}
        >
          {images.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`${title} — imagem ${i + 1}`}
              loading="lazy"
              width={992}
              height={672}
              className="h-48 w-full shrink-0 object-cover sm:h-full"
            />
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label="Imagem anterior"
        className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-muted-foreground shadow-card backdrop-blur-sm transition-colors hover:bg-secondary hover:text-foreground"
      >
        <ChevronLeft size={16} />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Próxima imagem"
        className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-muted-foreground shadow-card backdrop-blur-sm transition-colors hover:bg-secondary hover:text-foreground"
      >
        <ChevronRight size={16} />
      </button>

      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Ir para imagem ${i + 1}`}
            className={`h-1.5 w-1.5 rounded-full transition-colors ${
              i === index ? "bg-orange-400" : "bg-muted-foreground/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card transition-transform duration-300 hover:-translate-y-1 sm:flex-row">
      <CardCarousel images={project.images} title={project.title} />

      <div className="flex flex-col justify-center gap-2 p-6">
        <h4 className="text-lg font-semibold text-card-foreground">
          {project.title}
        </h4>
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
  );
}

function ProjectCarousel({ projects }: { projects: Project[] }) {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i - 1 + projects.length) % projects.length);
  const next = () => setIndex((i) => (i + 1) % projects.length);
  const project = projects[index];

  return (
    <div>
      <ProjectCard key={project.title} project={project} />

      <div className="mt-4 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={prev}
          aria-label="Projeto anterior"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-secondary text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        >
          <ChevronLeft size={18} />
        </button>
        <div className="flex items-center gap-1.5">
          {projects.map((p, i) => (
            <button
              key={p.title}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Ir para projeto ${i + 1}`}
              className={`h-1.5 w-1.5 rounded-full transition-colors ${
                i === index ? "bg-orange-400" : "bg-muted-foreground/50"
              }`}
            />
          ))}
          <span className="ml-2 text-xs text-muted-foreground">
            {index + 1} / {projects.length}
          </span>
        </div>
        <button
          type="button"
          onClick={next}
          aria-label="Próximo projeto"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-secondary text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}

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

        <div className="mt-10 flex flex-col gap-10">
          {groups.map((group) => (
            <div key={group.category}>
              <div className="mb-3 flex items-center gap-3">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  {group.category}
                </h3>
                <div className="h-px flex-1 bg-border" />
                {group.online && (
                  <span className="flex items-center gap-1.5 rounded-full border border-border bg-secondary px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    Online
                  </span>
                )}
              </div>
              {group.carousel ? (
                <ProjectCarousel projects={group.projects} />
              ) : (
                group.projects.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
