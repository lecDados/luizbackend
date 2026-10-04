import { Github } from "lucide-react";
import lovableLogo from "@/assets/lovable-logo.jpg.asset.json";

const backendSkills = [
  "Node.js",
  "Express",
  "REST APIs",
  "JWT Authentication",
  "Zod Validation",
  "Docker",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "AWS",
  "Oracle",
  "Linux",
  "Redis",
  "TypeScript",
  "Jest",
];

const frontendSkills = ["HTML 5", "CSS 3", "JavaScript", "React"];

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
        <div className="mt-3 h-1 w-12 rounded-full bg-orange-500/70" />
        <p className="mt-4 text-muted-foreground">
          Technologies and tools I work with.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div
            className="rounded-xl border border-white/20 p-6 shadow-card"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #f97316 0%, #ea580c 55%, #c2410c 100%)",
            }}
          >
            <h3 className="text-lg font-semibold text-white">
              Skills
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <h4 className="text-sm font-semibold text-white">
                  Back-end
                </h4>
                <ul className="mt-2 space-y-2 text-sm text-white/90">
                  {backendSkills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">
                  Front-end
                </h4>
                <ul className="mt-2 space-y-2 text-sm text-white/90">
                  {frontendSkills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
            <a
              href="https://github.com/lecDados"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-blue-500"
            >
              <Github className="h-4 w-4" aria-hidden />
              Ir ao GitHub
            </a>
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
            <img
              src={lovableLogo.url}
              alt="Lovable"
              className="mb-3 h-10 w-10 rounded-lg object-cover"
            />
            <h3 className="text-lg font-semibold text-card-foreground">
              Artificial Intelligence Tools
            </h3>
            <ul className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              {aiTools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-blue-400/20 bg-blue-500/15 p-6 shadow-card">
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
