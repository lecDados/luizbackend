import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = { src: string; alt: string };

interface MiniCoverflowProps {
  slides: Slide[];
}

export function MiniCoverflow({ slides }: MiniCoverflowProps) {
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
      style={{ perspective: "600px" }}
      onTouchStart={(e) => (touchStart.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchStart.current === null) return;
        const dx = e.changedTouches[0].clientX - touchStart.current;
        if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
        touchStart.current = null;
      }}
    >
      <div className="relative mx-auto h-[130px] w-full max-w-full overflow-hidden">
        {slides.map((slide, i) => {
          const d = offsetOf(i);
          const abs = Math.abs(d);
          const visible = abs <= 2;
          const scale = d === 0 ? 1 : abs === 1 ? 0.75 : 0.55;
          const opacity = d === 0 ? 1 : abs === 1 ? 0.85 : 0.6;
          const rotateY = d === 0 ? 0 : d < 0 ? 18 : -18;
          const x = d * 42;

          return (
            <motion.button
              key={slide.alt}
              type="button"
              onClick={() => setActive(i)}
              aria-label={slide.alt}
              className="absolute left-1/2 top-1/2 aspect-square w-[110px] overflow-hidden rounded-xl border border-border bg-card"
              style={{ transformStyle: "preserve-3d", zIndex: 10 - abs }}
              animate={{
                x: `calc(-50% + ${x}%)`,
                y: "-50%",
                scale,
                rotateY,
                opacity: visible ? opacity : 0,
                boxShadow:
                  d === 0
                    ? "0 15px 30px -8px rgba(0,0,0,0.35)"
                    : "0 6px 14px -8px rgba(0,0,0,0.2)",
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                loading="lazy"
                width={400}
                height={400}
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
        className="absolute left-0 z-20 rounded-full border border-border bg-secondary p-1.5 text-foreground transition-colors hover:text-orange-400"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label="Próximo"
        className="absolute right-0 z-20 rounded-full border border-border bg-secondary p-1.5 text-foreground transition-colors hover:text-orange-400"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}
