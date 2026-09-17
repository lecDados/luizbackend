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

const projects = [
  {
    images: [projectBtc, projectBtc2, projectBtc3],
    title: "Painel de Investimento em BTC",
    subtitle: "Dashboard financeiro",
    description:
      "Aplicação web para acompanhamento de carteiras de criptomoedas, com gráficos em tempo real, histórico de operações e cálculo de rentabilidade.",
    tags: ["Node.js", "Express", "MySQL"],
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
    images: [projectApi, projectApi2, projectApi3],
    title: "API de Autenticação",
    subtitle: "Serviço back-end",
    description:
      "API REST para autenticação e gestão de usuários, com tokens JWT, validação de dados, testes automatizados e documentação de endpoints.",
    tags: ["Node.js", "JWT", "Zod"],
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
              <CardCarousel images={project.images} title={project.title} />

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
