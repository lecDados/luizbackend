const codeSymbols = [
  { symbol: "</>", top: "8%", left: "6%", size: "text-5xl", opacity: "opacity-[0.04]" },
  { symbol: "<!-- />", top: "22%", left: "85%", size: "text-3xl", opacity: "opacity-[0.05]" },
  { symbol: "{ }", top: "35%", left: "12%", size: "text-4xl", opacity: "opacity-[0.04]" },
  { symbol: "//", top: "48%", left: "78%", size: "text-5xl", opacity: "opacity-[0.03]" },
  { symbol: "< />", top: "62%", left: "4%", size: "text-3xl", opacity: "opacity-[0.05]" },
  { symbol: "=>", top: "75%", left: "88%", size: "text-4xl", opacity: "opacity-[0.04]" },
  { symbol: "&&", top: "14%", left: "55%", size: "text-3xl", opacity: "opacity-[0.03]" },
  { symbol: "[ ]", top: "88%", left: "20%", size: "text-5xl", opacity: "opacity-[0.04]" },
  { symbol: ";", top: "52%", left: "30%", size: "text-4xl", opacity: "opacity-[0.04]" },
  { symbol: "/* */", top: "30%", left: "62%", size: "text-2xl", opacity: "opacity-[0.05]" },
  { symbol: "</", top: "80%", left: "50%", size: "text-4xl", opacity: "opacity-[0.03]" },
  { symbol: "||", top: "42%", left: "45%", size: "text-3xl", opacity: "opacity-[0.03]" },
];

export function CodeBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(249, 115, 22, 0.10) 0%, transparent 45%), radial-gradient(circle at 80% 100%, rgba(249, 115, 22, 0.06) 0%, transparent 35%)",
        }}
      />
      {codeSymbols.map((item, index) => (
        <span
          key={index}
          className={`absolute font-mono font-semibold text-orange-500 ${item.size} ${item.opacity} select-none`}
          style={{ top: item.top, left: item.left }}
        >
          {item.symbol}
        </span>
      ))}
    </div>
  );
}
