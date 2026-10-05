import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bot,
  BarChart3,
  Globe,
  AppWindow,
  Store,
  type LucideIcon,
} from "lucide-react";

type Slide = {
  icon: LucideIcon;
  label: string;
  gradient: string;
};

// Cores peroladas em degradês suaves, uma diferente para cada card
const slides: Slide[] = [
  {
    icon: Bot,
    label: "Automatize tarefas repetitivas",
    gradient:
      "linear-gradient(135deg, #ffd6e8 0%, #e0c3fc 50%, #8ec5fc 100%)",
  },
  {
    icon: BarChart3,
    label: "Dashboards reais para visualizar o desempenho das suas atividades",
    gradient:
      "linear-gradient(135deg, #a1ffd6 0%, #d4fc79 50%, #96e6a1 100%)",
  },
  {
    icon: Globe,
    label: "Web sites com design moderno",
    gradient:
      "linear-gradient(135deg, #d4bfff 0%, #9ec5fe 50%, #c2e9fb 100%)",
  },
  {
    icon: AppWindow,
    label:
      "Web app, SaaS, diversos tipos de plataformas com integração com pagamentos",
    gradient:
      "linear-gradient(135deg, #ffe29f 0%, #ffa99f 50%, #ffa99f 100%)",
  },
  {
    icon: Store,
    label: "Vitrine para apresentar produto ou serviço",
    gradient:
      "linear-gradient(135deg, #c2f0e8 0%, #b8c6ff 50%, #f6d5ff 100%)",
  },
];

export function Solutions() {
  const [active, setActive] = useState(0);
  const total = slides.length;

  useEffect(() => {
    const timer = setInterval(
      () => setActive((i) => (i + 1) % total),
      4000
    );
    return () => clearInterval(timer);
  }, [total]);

  return (
    <section id="solucoes" className="px-6 py-16">
      <div className="mx-auto max-w-[1200px]">
        <div className="relative h-[220px] w-full overflow-hidden sm:h-[240px] md:h-[260px]">
          <AnimatePresence initial={false}>
            <motion.div
              key={active}
              className="absolute inset-0 flex items-center justify-center px-1 sm:px-8"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <article
                className="flex h-full w-full max-w-2xl flex-col items-center justify-center gap-3 rounded-3xl border border-border p-6 text-center shadow-card sm:p-8"
                style={{ backgroundImage: slides[active].gradient }}
              >
                {(() => {
                  const Icon = slides[active].icon;
                  return (
                    <Icon
                      className="pearl-label h-7 w-7 shrink-0 md:h-8 md:w-8"
                      aria-hidden
                    />
                  );
                })()}
                <p className="pearl-label text-base font-semibold leading-snug md:text-xl">
                  {slides[active].label}
                </p>
              </article>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.label}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Ir para o card ${i + 1}`}
              aria-current={i === active}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active
                  ? "w-6 bg-orange-400"
                  : "w-2 bg-muted-foreground/40 hover:bg-muted-foreground/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
