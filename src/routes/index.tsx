import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/portfolio/Hero";
import { Solutions } from "@/components/portfolio/Solutions";
import { Services } from "@/components/portfolio/Services";

import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { CodeBackground } from "@/components/portfolio/CodeBackground";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Luiz Eduardo | Backend Developer" },
      {
        name: "description",
        content:
          "Backend developer portfolio of Luiz Eduardo, focused on scalable APIs, authentication systems, databases, and clean software architecture.",
      },
      {
        property: "og:title",
        content: "Luiz Eduardo | Backend Developer",
      },
      {
        property: "og:description",
        content:
          "Backend developer focused on scalable APIs, authentication systems, databases, and clean software architecture.",
      },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <CodeBackground />
      <main>
        <Hero />
        <Solutions />
        <Services />
        <Projects />
        <Skills />
        <Contact />

      </main>
      <Footer />
    </div>
  );
}
