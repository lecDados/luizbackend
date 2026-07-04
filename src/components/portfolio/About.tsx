export function About() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          About Me
        </h2>
        <div className="mt-3 h-1 w-12 rounded-full bg-orange-500/70" />

        <div className="mt-8 max-w-3xl rounded-xl border border-border bg-card p-6 shadow-card">
          <p className="text-base leading-relaxed text-muted-foreground">
            I enjoy solving real-world problems through backend development. I
            focus on writing organized, maintainable, and scalable code while
            continuously improving my technical skills.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            I work with authentication systems, REST APIs, databases, Docker,
            AI-assisted development, Supabase integrations, payment workflows,
            and modern backend architectures.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            I value clean code, continuous learning, and building reliable
            software.
          </p>
        </div>
      </div>
    </section>
  );
}
