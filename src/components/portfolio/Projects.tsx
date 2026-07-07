import { useEffect, useRef, useState } from "react";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import inventoryProject from "@/assets/inventory-project.jpg";
import projetoPi from "@/assets/projeto-pi.jpg";
import partyDecorWebsite from "@/assets/party-decor-website.jpg";
import btcDashboard from "@/assets/btc-dashboard.jpg";

const projects = [
  {
    name: "Inventory Management System",
    description:
      "A complete inventory management application built with a backend architecture focused on organization, scalability, and data persistence. The project includes product management, stock control, and CRUD operations using modern backend technologies.",
    repository: "https://github.com/lecDados/controle_de_estoque",
    image: inventoryProject,
    tags: ["Node.js", "Express", "MongoDB", "JavaScript", "GitHub"],
  },
  {
    name: "Projeto PI",
    description:
      "A full-stack academic project developed with a focus on backend integration, API communication, authentication, and database management while following clean project organization principles.",
    repository: "https://github.com/lecDados/projetoPi",
    image: projetoPi,
    tags: ["Full-stack", "API Integration", "Authentication", "Database", "GitHub"],
  },
  {
    name: "Website para Decoradora de Festas",
    description:
      "Professional website developed for party decoration companies, covering children's and adult parties, baptisms, baby showers, gender reveals, monthly birthdays, and anniversaries. Built with a clean architecture and a strong backend focus on data persistence, authentication, and admin management.",
    repository: "https://github.com/lecDados/website-decoradora-festas",
    liveUrl: "https://github.com/lecDados/website-decoradora-festas",
    image: partyDecorWebsite,
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "REST API",
      "JWT",
      "Tailwind",
    ],
    features: [
      "Landing Page moderna",
      "Catálogo de serviços",
      "Galeria de fotos",
      "Formulário de orçamento",
      "Formulário salvo no MongoDB",
      "Painel administrativo",
      "Responsivo",
      "Integração com WhatsApp",
      "SEO básico",
    ],
  },
  {
    name: "Painel de Investimento em BTC",
    description:
      "Platform for tracking the cryptocurrency market, with a focus on Bitcoin. The system queries a real-time API to monitor highs, lows, and indicators that help analyze investment opportunities.",
    repository: "https://github.com/lecDados/painelDeInvestimentoBTC.git",
    image: btcDashboard,
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Axios",
      "Chart.js",
      "REST API",
    ],
    features: [
      "Dashboard em tempo real",
      "Consulta de preços via API",
      "Histórico de variação",
      "Gráficos",
      "Cadastro de clientes",
      "Login e autenticação com JWT",
      "Área administrativa",
      "Gerenciamento de usuários",
      "Interface responsiva",
    ],
  },
];

export function Projects() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const isManualScroll = useRef(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      if (isManualScroll.current) return;
      setIndex((i) => (i + 1) % projects.length);
    }, 5000);
    return () => clearInterval(id);
  }, [paused]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller || isManualScroll.current) return;
    const child = scroller.children[index] as HTMLElement | undefined;
    if (!child) return;
    scroller.scrollTo({ left: child.offsetLeft - scroller.offsetLeft, behavior: "smooth" });
  }, [index]);

  const handleScroll = () => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    isManualScroll.current = true;
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      isManualScroll.current = false;
    }, 150);

    const center = scroller.scrollLeft + scroller.clientWidth / 2;
    let closest = 0;
    let minDistance = Infinity;
    Array.from(scroller.children).forEach((child, i) => {
      const el = child as HTMLElement;
      const childCenter = el.offsetLeft + el.clientWidth / 2;
      const distance = Math.abs(center - childCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closest = i;
      }
    });
    setIndex(closest);
  };

  const scrollByDir = (dir: 1 | -1) => {
    const next = (index + dir + projects.length) % projects.length;
    setIndex(next);
    isManualScroll.current = false;
  };

  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Projects
        </h2>
        <div className="mt-3 h-1 w-12 rounded-full bg-orange-500/70" />
        <p className="mt-4 text-muted-foreground">Selected backend work.</p>

        <div className="relative mt-10">
          <button
            type="button"
            aria-label="Projeto anterior"
            onClick={() => scrollByDir(-1)}
            className="absolute left-1 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 p-2 text-foreground shadow-card backdrop-blur transition hover:bg-accent hover:text-orange-400 md:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Próximo projeto"
            onClick={() => scrollByDir(1)}
            className="absolute right-1 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 p-2 text-foreground shadow-card backdrop-blur transition hover:bg-accent hover:text-orange-400 md:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <div
            ref={scrollerRef}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setPaused(false)}
            onScroll={handleScroll}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 md:gap-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {projects.map((project) => (
              <article
                key={project.name}
                className="w-[88%] shrink-0 snap-center rounded-xl border border-border bg-card p-4 shadow-card sm:p-5 md:w-[calc(50%-0.75rem)]"
              >
              <img
                src={project.image}
                alt={project.name}
                width={1024}
                height={576}
                loading="lazy"
                className="aspect-video w-full rounded-lg object-cover"
              />
              <h3 className="mt-5 text-xl font-semibold text-card-foreground">
                {project.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              {project.features && (
                <ul className="mt-4 grid grid-cols-1 gap-1.5 text-sm text-muted-foreground sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/70" />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-md border border-border px-2 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Visualizar Projeto
                  </a>
                )}
                <a
                  href={project.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent"
                >
                  <Github className="h-4 w-4" />
                  {project.liveUrl ? "GitHub" : "GitHub Repository"}
                </a>
              </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-4 flex justify-center gap-2">
          {projects.map((p, i) => (
            <button
              key={p.name}
              type="button"
              aria-label={`Ir para ${p.name}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${i === index ? "w-6 bg-orange-500" : "w-2 bg-muted-foreground/40"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
