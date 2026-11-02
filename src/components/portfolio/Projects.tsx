import { useState } from "react";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import apiAuthTelegramAsset from "@/assets/api-auth-telegram.png.asset.json";
import apiAuthSite1Asset from "@/assets/api-auth-site-1.png.asset.json";
import apiAuthSite2Asset from "@/assets/api-auth-site-2.png.asset.json";
const apiAuthTelegram = apiAuthTelegramAsset.url;
const apiAuthSite1 = apiAuthSite1Asset.url;
const apiAuthSite2 = apiAuthSite2Asset.url;

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
  projects: Project[];
};

const groups: Group[] = [
  {
    category: "Projetos em produção",
    online: true,
    projects: [
      {
        images: [apiAuthSite1, apiAuthTelegram, apiAuthSite2],
        title: "Sistema de automação",
        subtitle: "Serviço back-end",
        description:
          "Sistema que automatiza o envio constante de anúncios do Mercado Livre para o Telegram. Para isso foram usadas as APIs do Mercado Livre e do Telegram. Mais detalhes no GitHub.",
        tags: [
          "Node.js",
          "Express",
          "APIs",
          "API Mercado Livre",
          "API Telegram",
          "Oracle",
          "Linux",
        ],
        accent: "blue",
        link: "https://github.com/lecDados/automacao_anunciosMercadoLivre_telegram",
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
            <Github className="h-4 w-4" aria-hidden />
            Ver no GitHub
          </a>
        )}
      </div>
    </article>
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
              {group.projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
