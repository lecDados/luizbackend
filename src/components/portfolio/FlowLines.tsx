import { useEffect, useRef, useState } from "react";

/** Three background ribbons anchored to the device artwork. */
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
  const length = height - y;
  // Fixed irregular routes avoid visual jumps when the page is resized.
  const ribbons = [
    { count: 11, spread: 0.07, stops: [0.92, 0.08, 0.87, 0.12, 0.94, 0.07, 0.85, 0.2, 0.76] },
    { count: 5, spread: 0.035, stops: [0.15, 0.86, 0.09, 0.93, 0.21, 0.8, 0.12, 0.91, 0.4] },
    { count: 3, spread: 0.018, stops: [0.76, 0.22, 0.95, 0.06, 0.78, 0.19, 0.92, 0.08, 0.6] },
  ];
  const paths = ribbons.flatMap((ribbon, ribbonIndex) =>
    Array.from({ length: ribbon.count }, (_, i) => {
      const offset = (i / (ribbon.count - 1) - 0.5) * 2;
      let previousX = x + offset * 3;
      let previousY = y + ribbonIndex * 5;
      let path = `M ${previousX} ${previousY}`;
      ribbon.stops.forEach((stop, j) => {
        const nextX = width * (stop + offset * ribbon.spread * (j % 2 === 0 ? 0.5 : 1));
        const nextY = y + (length - 8) * ((j + 1) / ribbon.stops.length);
        const rise = nextY - previousY;
        path += ` C ${previousX} ${previousY + rise * 0.48}, ${nextX} ${nextY - rise * 0.48}, ${nextX} ${nextY}`;
        previousX = nextX;
        previousY = nextY;
      });
      return { path, ribbonIndex, strandIndex: i };
    }),
  );

  return (
    <svg
      ref={svgRef}
      aria-hidden="true"
      focusable="false"
      className="portfolio-flow-lines"
      viewBox={`0 0 ${width || 1} ${height || 1}`}
      preserveAspectRatio="none"
    >
      {width > 0 && paths.map(({ path, ribbonIndex, strandIndex }, i) => (
        <g key={i} className={`portfolio-flow-ribbon-${ribbonIndex}`}>
          <path d={path} className="portfolio-flow-depth" />
          <path d={path} className={strandIndex % 3 === 0 ? "portfolio-flow-accent" : "portfolio-flow-strand"} />
        </g>
      ))}
    </svg>
  );
}