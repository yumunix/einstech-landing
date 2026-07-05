export default function Badge({ children, color = "cyan", className = "" }) {
  const palette =
    color === "acid"
      ? "border-emerald/30 bg-emerald/5 text-emerald"
      : "border-navy/30 bg-navy/5 text-navy";

  return (
    <div
      className={`px-3 py-1.5 border ${palette} font-mono text-xs uppercase tracking-widest inline-flex items-center gap-2 w-max ${className}`.trim()}
    >
      <span
        className={`inline-block w-2 h-2 ${
          color === "acid" ? "bg-emerald" : "bg-navy"
        } animate-pulse-fast`}
      />
      {children}
    </div>
  );
}
