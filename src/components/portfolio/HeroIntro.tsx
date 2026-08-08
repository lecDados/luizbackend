import { useEffect, useRef } from "react";
import gsap from "gsap";

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
    <section className="w-full border-b border-border pt-28 pb-16 md:pt-32 md:pb-24">
      <div className="mx-auto max-w-[1200px] px-6">
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

        <div className="mt-10 flex flex-wrap items-center gap-3">
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

        <dl className="mt-12 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
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
