import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import inventory from "@/assets/inventory-project.jpg";
import projetoPi from "@/assets/projeto-pi.jpg";
import btc from "@/assets/btc-dashboard.jpg";
import party from "@/assets/party-decor-website.jpg";
import oficina from "@/assets/oficina-moto.jpg";
import planilhas from "@/assets/automacao-planilhas.jpg";

type Slide = { src: string; alt: string };

const slides: Slide[] = [
  { src: inventory, alt: "Inventory Management System" },
  { src: projetoPi, alt: "Projeto PI" },
  { src: btc, alt: "Painel de Investimento em BTC" },
  { src: party, alt: "Site para Decoradora de Festas" },
  { src: oficina, alt: "Sistema para Oficina de Moto" },
  { src: planilhas, alt: "Automação de Planilhas" },
];

export function Coverflow() {
  const [active, setActive] = useState(0);
  const total = slides.length;
  const touchStart = useRef<number | null>(null);

  const go = (dir: number) => setActive((i) => (i + dir + total) % total);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [total]);

  const offsetOf = (i: number) => {
    let d = i - active;
    if (d > total / 2) d -= total;
    if (d < -total / 2) d += total;
    return d;
  };

  return (
    <div
      className="relative flex w-full items-center justify-center"
      style={{ perspective: "1000px" }}
      onTouchStart={(e) => (touchStart.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchStart.current === null) return;
        const dx = e.changedTouches[0].clientX - touchStart.current;
        if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
        touchStart.current = null;
      }}
    >
      <div className="relative mx-auto h-[260px] w-full max-w-full overflow-hidden sm:h-[320px] md:h-[420px]">
        {slides.map((slide, i) => {
          const d = offsetOf(i);
          const abs = Math.abs(d);
          const visible = abs <= 2;
          const scale = d === 0 ? 1 : abs === 1 ? 0.7 : 0.55;
          const opacity = d === 0 ? 1 : abs === 1 ? 0.85 : 0.6;
          const rotateY = d === 0 ? 0 : d < 0 ? 15 : -15;
          const x = d * 34;

          return (
            <motion.button
              key={slide.alt}
              type="button"
              onClick={() => setActive(i)}
              aria-label={slide.alt}
              className="absolute left-1/2 top-1/2 aspect-square w-[200px] overflow-hidden rounded-2xl border border-border bg-card sm:w-[260px] md:w-[380px]"
              style={{ transformStyle: "preserve-3d", zIndex: 10 - abs }}
              animate={{
                x: `calc(-50% + ${x}%)`,
                y: "-50%",
                scale,
                rotateY,
                opacity: visible ? opacity : 0,
                boxShadow:
                  d === 0
                    ? "0 25px 50px -12px rgba(0,0,0,0.4)"
                    : "0 8px 20px -12px rgba(0,0,0,0.25)",
              }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                loading="lazy"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
            </motion.button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={() => go(-1)}
        aria-label="Anterior"
        className="absolute left-1 z-20 rounded-full border border-border bg-secondary p-2 text-foreground transition-colors hover:text-orange-400"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label="Próximo"
        className="absolute right-1 z-20 rounded-full border border-border bg-secondary p-2 text-foreground transition-colors hover:text-orange-400"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}
