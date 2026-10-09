import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectBtc from "@/assets/project-btc.jpg";
import projectBtc2 from "@/assets/project-btc-2.jpg";
import projectBtc3 from "@/assets/project-btc-3.jpg";
import projectDecoradora from "@/assets/project-decoradora.jpg";
import projectDecoradora2 from "@/assets/project-decoradora-2.jpg";
import projectDecoradora3 from "@/assets/project-decoradora-3.jpg";
import apiAuthTelegramAsset from "@/assets/api-auth-telegram.png.asset.json";
import apiAuthSite1Asset from "@/assets/api-auth-site-1.png.asset.json";
import apiAuthSite2Asset from "@/assets/api-auth-site-2.png.asset.json";
const apiAuthTelegram = apiAuthTelegramAsset.url;
const apiAuthSite1 = apiAuthSite1Asset.url;
const apiAuthSite2 = apiAuthSite2Asset.url;
import projectEstoque from "@/assets/project-estoque.jpg";
import projectEstoque2 from "@/assets/project-estoque-2.jpg";
import projectEstoque3 from "@/assets/project-estoque-3.jpg";
import projectBot from "@/assets/project-bot.jpg";
import projectBot2 from "@/assets/project-bot-2.jpg";
import projectBot3 from "@/assets/project-bot-3.jpg";
import projectLoja from "@/assets/project-loja.jpg";
import projectLoja2 from "@/assets/project-loja-2.jpg";
import projectLoja3 from "@/assets/project-loja-3.jpg";
import projectPainel from "@/assets/project-painel.jpg";
import projectPainel2 from "@/assets/project-painel-2.jpg";
import projectPainel3 from "@/assets/project-painel-3.jpg";
import projectPagamentos from "@/assets/project-pagamentos.jpg";
import projectPagamentos2 from "@/assets/project-pagamentos-2.jpg";
import projectPagamentos3 from "@/assets/project-pagamentos-3.jpg";
import projectCotacoes from "@/assets/project-cotacoes.jpg";
import projectCotacoes2 from "@/assets/project-cotacoes-2.jpg";
import projectCotacoes3 from "@/assets/project-cotacoes-3.jpg";

type Project = {
  images: string[];
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  accent?: "blue" | "yellow";
  link?: string;
};

type Group = {
  category: string;
  online?: boolean;
  carousel?: boolean;
  projects: Project[];
};

const groups: Group[] = [
  {
    category: "Projetos finalizados",
    carousel: true,
    projects: [
      {
        images: [projectBtc, projectBtc2, projectBtc3],
        title: "Painel de Investimento em BTC",
        subtitle: "Dashboard financeiro",
        description:
          "Aplicação web para acompanhamento de carteiras de criptomoedas, com gráficos em tempo real, histórico de operações e cálculo de rentabilidade.",
        tags: ["Node.js", "Express", "MySQL"],
        accent: "yellow",
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
      {
        images: [projectDecoradora, projectDecoradora2, projectDecoradora3],
        title: "Website para Decoradora de Festas",
        subtitle: "Landing page",
        description:
          "Site institucional para divulgação de serviços de decoração de festas, com galeria de trabalhos, apresentação de pacotes e canal de contato.",
        tags: ["HTML 5", "CSS 3", "JavaScript"],
      },
      {
        images: [projectLoja, projectLoja2, projectLoja3],
        title: "Loja Virtual de Roupas",
        subtitle: "E-commerce front-end",
        description:
          "Loja online com catálogo de produtos, página de detalhes, carrinho de compras e fluxo de checkout responsivo.",
        tags: ["React", "Tailwind CSS", "Vite"],
      },
      {
        images: [projectPainel, projectPainel2, projectPainel3],
        title: "Painel Administrativo",
        subtitle: "Dashboard web",
        description:
          "Painel de gestão com estatísticas, gráficos, tabela de usuários com filtros e páginas de configuração da conta.",
        tags: ["React", "TypeScript", "Recharts"],
      },
    ],
  },
  {
    category: "Projetos em produção",
    online: true,
    carousel: true,
    projects: [
      {
        images: [apiAuthSite1, apiAuthTelegram, apiAuthSite2],
        title: "API de Autenticação",
        subtitle: "Serviço back-end",
        description:
          "API REST para autenticação e gestão de usuários, com tokens JWT, validação de dados, testes automatizados e documentação de endpoints.",
        tags: [
          "Node.js",
          "Express",
          "API Mercado Livre",
          "API Telegram",
          "Oracle",
          "Linux",
          "JWT",
          "Zod",
        ],
        accent: "blue",
        link: "https://github.com/lecDados",
      },
      {
        images: [projectPagamentos, projectPagamentos2, projectPagamentos3],
        title: "API de Pagamentos",
        subtitle: "Integração financeira",
        description:
          "Serviço de processamento de pagamentos com webhooks, conciliação de transações, painel de acompanhamento e tratamento de falhas com retentativas.",
        tags: ["Node.js", "PostgreSQL", "Webhooks"],
      },
      {
        images: [projectCotacoes, projectCotacoes2, projectCotacoes3],
        title: "API de Cotações em Tempo Real",
        subtitle: "Serviço de mercado",
        description:
          "Serviço de cotações financeiras em tempo real com filas de processamento, cache de mercado e monitoramento de performance das mensagens.",
        tags: ["Node.js", "Redis", "WebSockets"],
      },
    ],
  },
];

function CardCarousel({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [index, setIndex] = useState(0);
  const remaining = images.map((src, i) => ({ src, i })).filter((image) => image.i !== index);

  return (
    <div className="grid aspect-[4/3] min-w-0 grid-cols-[2fr_1fr] grid-rows-2 gap-2 bg-background p-2 md:aspect-[3/2] md:min-h-80">
      <a href={images[index]} target="_blank" rel="noopener noreferrer" title="Abrir imagem em tela cheia" className="row-span-2 block min-h-0 min-w-0 overflow-hidden rounded-md">
        <img src={images[index]} alt={`${title} — imagem ${index + 1}`} loading="lazy" width={992} height={672} className="h-full w-full object-cover" />
      </a>
      {remaining.map(({ src, i }) => (
        <Button key={src} variant="ghost" onClick={() => setIndex(i)} aria-label={`Ampliar imagem ${i + 1} de ${title}`} className="h-full min-h-0 min-w-0 overflow-hidden rounded-md p-0 focus-visible:ring-inset">
          <img src={src} alt={`${title} — imagem ${i + 1}`} loading="lazy" width={992} height={672} className="h-full w-full object-cover" />
        </Button>
      ))}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const blue = project.accent === "blue";
  const yellow = project.accent === "yellow";

  return (
    <article
      className={`grid overflow-hidden rounded-xl border shadow-card md:grid-cols-[3fr_2fr] ${
        yellow ? "border-transparent bg-project-yellow text-project-yellow-foreground" : blue
          ? "border-transparent bg-project-blue"
          : "border-border bg-card"
      }`}
    >
      <CardCarousel
        images={project.images}
        title={project.title}
      />

      <div className="flex min-w-0 flex-col justify-center gap-2 p-5 md:p-6">
        <h4
          className={`text-lg font-semibold ${
            yellow ? "text-project-yellow-foreground" : blue ? "text-project-blue-foreground" : "text-card-foreground"
          }`}
        >
          {project.title}
        </h4>
        <p
          className={`text-sm font-medium ${
            yellow ? "text-project-yellow-muted" : blue ? "text-project-blue-muted" : "text-project-highlight"
          }`}
        >
          {project.subtitle}
        </p>
        <p
          className={`mt-1 text-sm leading-relaxed ${
            yellow ? "text-project-yellow-muted" : blue ? "text-project-blue-foreground/85" : "text-muted-foreground"
          }`}
        >
          {project.description}
        </p>
        <ul className="mt-2 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className={`rounded-full border px-3 py-1 text-xs font-medium ${
                yellow ? "border-transparent bg-project-yellow-tag text-project-yellow-foreground" : blue
                  ? "border-project-blue-muted/30 bg-project-blue-muted/10 text-project-blue-foreground"
                  : "border-border bg-secondary text-muted-foreground"
              }`}
            >
              {tag}
            </li>
          ))}
        </ul>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-fit items-center justify-center gap-2 rounded-full bg-blue-500/90 px-5 py-2 text-sm font-semibold text-white shadow-card transition-colors hover:bg-blue-500"
          >
            Ver aplicação
            <span aria-hidden>→</span>
          </a>
        )}
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
