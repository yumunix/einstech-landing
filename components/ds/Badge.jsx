export default function Badge({ children, color = "cyan", className = "" }) {
  const palette =
    color === "acid"
      ? "border-acid/30 bg-acid/5 text-acid"
      : "border-cyan/30 bg-cyan/5 text-cyan";

  return (
    <div
      className={`px-3 py-1.5 border ${palette} font-mono text-xs uppercase tracking-widest inline-flex items-center gap-2 w-max ${className}`.trim()}
    >
      <span
        className={`inline-block w-2 h-2 ${
          color === "acid" ? "bg-acid" : "bg-cyan"
        } animate-pulse-fast`}
      />
      {children}
    </div>
  );
}
