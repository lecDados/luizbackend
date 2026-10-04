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
  gradient: string;
};

// Cores vivas em degradês suaves, distribuídas aleatoriamente entre os cards
const services: Service[] = [
  { icon: MessageSquareText, label: "Automações de mensagens", gradient: "linear-gradient(135deg, #f97316 0%, #ec4899 100%)" },
  { icon: Sheet, label: "Otimização de planilhas", gradient: "linear-gradient(135deg, #22c55e 0%, #14b8a6 100%)" },
  { icon: Database, label: "Integração com bancos de dados", gradient: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)" },
  { icon: Sparkles, label: "Projetos com Lovable", gradient: "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)" },
  { icon: Globe, label: "Web sites", gradient: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)" },
  { icon: FileCode2, label: "Sistemas em Python", gradient: "linear-gradient(135deg, #eab308 0%, #f97316 100%)" },
  { icon: Plug, label: "Integração com APIs", gradient: "linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)" },
  { icon: Bot, label: "Sistema com agente AI", gradient: "linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)" },
  { icon: ShoppingCart, label: "Automações com API Mercado Livre", gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)" },
  { icon: Send, label: "Automação com Telegram", gradient: "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)" },
  { icon: MessageCircle, label: "Automações com WhatsApp", gradient: "linear-gradient(135deg, #84cc16 0%, #22c55e 100%)" },
  { icon: Cloud, label: "Projetos na nuvem (VMs)", gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)" },
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

        <ul className="mt-10 grid grid-cols-3 gap-3 md:gap-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <li key={service.label}>
                <article
                  className="flex h-full flex-col items-center gap-2 rounded-xl border border-white/25 p-3 text-center shadow-card transition-transform duration-200 hover:scale-[1.03] md:p-4"
                  style={{ backgroundImage: service.gradient }}
                >
                  <Icon
                    className="h-5 w-5 shrink-0 text-white md:h-6 md:w-6"
                    aria-hidden
                  />
                  <p className="text-[10px] font-medium leading-snug text-white md:text-xs">
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
