import { Mail, Linkedin, Github, Phone } from "lucide-react";

const contacts = [
  {
    label: "Phone",
    value: "+55 (17) 99220-0392",
    href: "tel:+5517992200392",
    icon: Phone,
  },
  {
    label: "Email",
    value: "luiz2609200@gmail.com",
    href: "mailto:luiz2609200@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "LinkedIn Profile",
    href: "https://www.linkedin.com/in/luiz-eduardo-4a6207384/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "@lecDados",
    href: "https://github.com/lecDados",
    icon: Github,
  },
];

export function Contact() {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Contact
        </h2>
        <p className="mt-2 text-muted-foreground">
          Let's work together.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contacts.map((contact) => {
            const Icon = contact.icon;
            return (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="rounded-xl border border-border bg-card p-5 shadow-card hover:bg-accent"
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {contact.label}
                    </p>
                    <p className="text-sm font-semibold text-card-foreground">
                      {contact.value}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
