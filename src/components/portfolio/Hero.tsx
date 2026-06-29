const technologies = [
  "Node.js",
  "JavaScript",
  "Express",
  "MongoDB",
  "MySQL",
  "Docker",
  "JWT",
  "REST APIs",
  "Git",
  "GitHub",
  "Zod",
];

export function Hero() {
  return (
    <section
      id="hero"
      className="px-6 pb-20 pt-32 md:pb-28 md:pt-40"
    >
      <div className="mx-auto max-w-[1200px]">
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          Luiz Eduardo
        </h1>
        <p className="mt-2 text-lg font-medium text-muted-foreground md:text-xl">
          Backend Developer
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Backend developer focused on building scalable APIs, authentication
          systems, databases, and clean software architecture.
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="inline-flex items-center rounded-full border border-border px-3 py-1 text-sm font-medium text-muted-foreground"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
