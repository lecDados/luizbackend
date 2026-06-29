import { Github } from "lucide-react";
import inventoryProject from "@/assets/inventory-project.jpg";
import projetoPi from "@/assets/projeto-pi.jpg";

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
];

export function Projects() {
  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Projects
        </h2>
        <p className="mt-2 text-muted-foreground">Selected backend work.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="rounded-xl border border-border bg-card p-5 shadow-card"
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
              <div className="mt-6">
                <a
                  href={project.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent"
                >
                  <Github className="h-4 w-4" />
                  GitHub Repository
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
