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
          <div className="rounded-xl border border-border bg-[#111111] p-6 shadow-card">
            <h3 className="text-lg font-semibold text-card-foreground">
              Skills
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <h4 className="text-sm font-semibold text-card-foreground">
                  Back-end
                </h4>
                <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                  {backendSkills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-card-foreground">
                  Front-end
                </h4>
                <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                  {frontendSkills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-3">
              <div
                className="rounded-lg border border-white/20 px-4 py-3 shadow-card"
                style={{ backgroundImage: "linear-gradient(135deg, #f97316 0%, #ec4899 100%)" }}
              >
                <h3 className="text-sm font-semibold text-white">
                  Git — Versionamento
                </h3>
                <ul className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1 text-xs text-white/90">
                  <li>Git</li>
                  <li>GitHub</li>
                  <li>GitFlow</li>
                </ul>
              </div>

              <div
                className="rounded-lg border border-white/20 px-4 py-3 shadow-card"
                style={{ backgroundImage: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)" }}
              >
                <h3 className="text-sm font-semibold text-white">
                  VMs &amp; Cloud
                </h3>
                <ul className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1 text-xs text-white/90">
                  <li>AWS</li>
                  <li>Oracle Cloud</li>
                  <li>Linux</li>
                </ul>
              </div>

              <div
                className="rounded-lg border border-white/20 px-4 py-3 shadow-card"
                style={{ backgroundImage: "linear-gradient(135deg, #22c55e 0%, #06b6d4 100%)" }}
              >
                <h3 className="text-sm font-semibold text-white">
                  Distribuições Linux mais usadas em VMs
                </h3>
                <ul className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1 text-xs text-white/90">
                  <li>Ubuntu</li>
                  <li>Debian</li>
                  <li>CentOS</li>
                </ul>
              </div>
            </div>

            <a
              href="https://github.com/lecDados"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg border border-blue-400/30 bg-blue-500/20 px-4 py-2.5 text-sm font-semibold text-blue-200 shadow-sm transition-colors duration-200 hover:bg-blue-500/30 hover:text-blue-100"
            >
              <Github className="h-4 w-4" aria-hidden />
              Ir ao GitHub
            </a>
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

        </div>
      </div>
    </section>
  );
}
