const backendSkills = [
  "Node.js",
  "Express",
  "REST APIs",
  "JWT Authentication",
  "Zod Validation",
  "Docker",
  "MongoDB",
  "MySQL",
  "HTML 5",
  "CSS 3",
  "JavaScript",
  "Jest",
];

const versionControlSkills = ["Git", "GitHub", "GitFlow"];

const aiTools = [
  "Experience using AI tools to speed up software development",
  "Prompt Engineering",
  "Lovable",
  "Backend integration with Supabase",
  "Authentication flows",
  "Payment integrations using extensions and APIs",
  "Workflow automation",
];

export function Skills() {
  return (
    <section id="skills" className="px-6 py-20">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Skills
        </h2>
        <p className="mt-2 text-muted-foreground">
          Technologies and tools I work with.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <h3 className="text-lg font-semibold text-card-foreground">
              Backend
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {backendSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <h3 className="text-lg font-semibold text-card-foreground">
              Version Control
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {versionControlSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 shadow-card md:col-span-2">
            <h3 className="text-lg font-semibold text-card-foreground">
              Artificial Intelligence Tools
            </h3>
            <ul className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              {aiTools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <h3 className="text-lg font-semibold text-card-foreground">
              Languages
            </h3>
            <p className="mt-4 text-sm text-muted-foreground">
              English
              <br />
              Currently learning — Beginner level
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <h3 className="text-lg font-semibold text-card-foreground">
              Experience
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              I have been consistently studying software development for over{" "}
              <strong className="font-semibold text-card-foreground">
                3 years
              </strong>
              , focusing primarily on backend technologies and software
              architecture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
