import { useEffect, useRef, useState } from "react";

/** A lightweight, non-interactive ribbon anchored to the device artwork. */
export function FlowLines() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [geometry, setGeometry] = useState({ width: 0, height: 0, x: 0, y: 0 });

  useEffect(() => {
    const svg = svgRef.current;
    const host = svg?.parentElement;
    const device = host?.querySelector<HTMLElement>("[data-flow-origin]");
    if (!host || !device) return;

    let frame = 0;
    const measure = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const bounds = host.getBoundingClientRect();
        const origin = device.getBoundingClientRect();
        setGeometry({
          width: bounds.width,
          height: bounds.height,
          x: origin.left - bounds.left + origin.width * 0.8,
          y: origin.top - bounds.top + origin.height * 0.78,
        });
      });
    };
    const observer = new ResizeObserver(measure);
    observer.observe(host);
    observer.observe(device);
    window.addEventListener("resize", measure);
    measure();
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
      cancelAnimationFrame(frame);
    };
  }, []);

  const { width, height, x, y } = geometry;
  const spread = Math.min(width * 0.085, 105);
  const length = height - y;
  const paths = Array.from({ length: 11 }, (_, i) => {
    const offset = (i - 5) / 5;
    const edge = width * 0.94 + offset * spread * 0.45;
    const bend = width * 0.87 - offset * spread * 0.65;
    return `M ${x + offset * 3} ${y + i * 1.5}
      C ${x + spread + offset * 6} ${y + 35}, ${edge} ${y + 80}, ${edge} ${y + length * 0.13}
      C ${edge} ${y + length * 0.27}, ${bend} ${y + length * 0.27}, ${bend} ${y + length * 0.4}
      C ${bend} ${y + length * 0.53}, ${edge} ${y + length * 0.55}, ${edge} ${y + length * 0.66}
      C ${edge} ${y + length * 0.79}, ${bend} ${y + length * 0.85}, ${width * 0.9 + offset * spread * 0.35} ${height - 8}`;
  });

  return (
    <svg
      ref={svgRef}
      aria-hidden="true"
      focusable="false"
      className="portfolio-flow-lines"
      viewBox={`0 0 ${width || 1} ${height || 1}`}
      preserveAspectRatio="none"
    >
      {width > 0 && paths.map((path, i) => (
        <g key={i}>
          <path d={path} className="portfolio-flow-depth" />
          <path d={path} className={i % 3 === 0 ? "portfolio-flow-accent" : "portfolio-flow-strand"} />
        </g>
      ))}
    </svg>
  );
}