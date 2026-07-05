export default function StatsBar({ items = [], className = "" }) {
  return (
    <div
      className={`flex flex-wrap gap-6 sm:gap-8 font-mono text-[10px] text-slate-500 ${className}`.trim()}
    >
      {items.map((item, i) => (
        <div key={i} className="flex flex-col gap-1">
          <span className="text-slate-900/30">{item.label}</span>
          <span className={item.accent ? "text-navy" : ""}>{item.value}</span>
        </div>
      ))}
    </div>
  );
}
