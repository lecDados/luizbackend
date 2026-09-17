import {
  MessageSquareText,
  Sheet,
  Database,
  Sparkles,
  Globe,
  FileCode2,
  Plug,
  Bot,
  ShoppingCart,
  Send,
  MessageCircle,
  Cloud,
  type LucideIcon,
} from "lucide-react";

type Service = {
  icon: LucideIcon;
  label: string;
  color: string;
};

const services: Service[] = [
  { icon: MessageSquareText, label: "Automações de mensagens", color: "text-emerald-400" },
  { icon: Sheet, label: "Otimização de planilhas", color: "text-green-400" },
  { icon: Database, label: "Integração com bancos de dados", color: "text-sky-400" },
  { icon: Sparkles, label: "Projetos com Lovable", color: "text-orange-400" },
  { icon: Globe, label: "Web sites", color: "text-cyan-400" },
  { icon: FileCode2, label: "Sistemas em Python", color: "text-yellow-400" },
  { icon: Plug, label: "Integração com APIs", color: "text-violet-400" },
  { icon: Bot, label: "Sistema com agente AI", color: "text-fuchsia-400" },
  { icon: ShoppingCart, label: "Automações com API Mercado Livre", color: "text-amber-400" },
  { icon: Send, label: "Automação com Telegram", color: "text-blue-400" },
  { icon: MessageCircle, label: "Automações com WhatsApp", color: "text-lime-400" },
  { icon: Cloud, label: "Projetos na nuvem (VMs)", color: "text-indigo-400" },
];

export function Services() {
  return (
    <section id="services" className="px-6 py-20">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Serviços
        </h2>
        <div className="mt-3 h-1 w-12 rounded-full bg-orange-500/70" />
        <p className="mt-4 text-muted-foreground">
          Soluções que desenvolvo para automatizar e escalar negócios.
        </p>

        <ul className="mt-10 grid grid-cols-4 gap-3 md:gap-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <li key={service.label}>
                <article className="flex h-full flex-col items-center gap-2 rounded-xl border border-border bg-card p-3 text-center shadow-card transition-colors duration-200 hover:border-orange-500/40 md:p-4">
                  <Icon
                    className={`h-5 w-5 shrink-0 md:h-6 md:w-6 ${service.color}`}
                    aria-hidden
                  />
                  <p className="text-[10px] font-medium leading-snug text-muted-foreground md:text-xs">
                    {service.label}
                  </p>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
