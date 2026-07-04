import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Books } from "@/components/portfolio/Books";
import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { CodeBackground } from "@/components/portfolio/CodeBackground";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
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
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Books />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
