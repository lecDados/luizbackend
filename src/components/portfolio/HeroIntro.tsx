import { useEffect, useRef } from "react";
import gsap from "gsap";
import macbookMockup from "@/assets/macbook-google-site.png";
import phoneMockup from "@/assets/smartphone-google-site.png";

const HEADLINE = "Web sites, sistemas de automação e Agentes-AI";

export function HeroIntro() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;

    const letters = el.querySelectorAll<HTMLSpanElement>("[data-letter]");
    const ctx = gsap.context(() => {
      gsap.fromTo(
        letters,
        { rotationY: 0, color: "oklch(0.95 0.005 270)" },
        {
          rotationY: 360,
          color: "oklch(0.72 0.19 55)",
          duration: 1.1,
          ease: "power2.out",
          stagger: 0.06,
        },
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section className="flex min-h-[100svh] w-full flex-col border-b border-border pt-16 pb-10 md:pb-24">
      <div className="mx-auto flex w-full max-w-[1200px] flex-1 flex-col px-6 md:justify-center md:py-12">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-orange-400">
          Backend &amp; Automação
        </p>

        <h2
          ref={headlineRef}
          className="mt-5 max-w-[18ch] text-4xl font-bold leading-[1.05] tracking-tight sm:max-w-none sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ perspective: "800px" }}
        >
          {HEADLINE.split("").map((char, i) => (
            <span
              key={`${char}-${i}`}
              data-letter
              className="inline-block will-change-transform"
              style={{ transformStyle: "preserve-3d" }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h2>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Construo produtos digitais de ponta a ponta: sites rápidos e acessíveis,
          fluxos de automação que eliminam trabalho repetitivo e agentes de IA
          integrados às suas APIs, bancos de dados e regras de negócio.
        </p>

        <div className="mt-6 flex w-full justify-center md:mt-8 md:justify-start">
          <div data-flow-origin className="relative h-40 w-[240px] shrink-0 sm:h-48 sm:w-[288px] md:h-56 md:w-[336px] lg:h-64 lg:w-[384px]">
            <img
              src={macbookMockup}
              alt="Notebook mostrando o desenho de um site com a logo do Google na tela"
              width={1200}
              height={800}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-contain drop-shadow-2xl"
            />
            <img
              src={phoneMockup}
              alt="Smartphone mostrando o mesmo site com a logo do Google"
              width={768}
              height={1536}
              loading="lazy"
              className="absolute -right-4 bottom-0 h-[80%] w-auto object-contain drop-shadow-2xl sm:-right-8"
            />
          </div>
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-3 pt-12 md:mt-10 md:pt-0">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-md bg-orange-500 px-5 py-2.5 text-sm font-semibold text-neutral-950 transition-colors hover:bg-orange-400"
          >
            Ver projetos
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-orange-500/60 hover:text-orange-400"
          >
            Falar comigo
          </a>
        </div>

        <dl className="mt-12 hidden grid-cols-1 gap-6 sm:grid-cols-3 md:grid">
          {[
            { k: "APIs & Backend", v: "Node.js, Express, MongoDB, MySQL" },
            { k: "Automação", v: "Integrações, rotinas e webhooks" },
            { k: "Agentes-AI", v: "Assistentes conectados aos seus dados" },
          ].map((item) => (
            <div key={item.k} className="border-l-2 border-orange-500/40 pl-4">
              <dt className="font-mono text-sm font-semibold text-foreground">{item.k}</dt>
              <dd className="mt-1 text-sm text-muted-foreground">{item.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
