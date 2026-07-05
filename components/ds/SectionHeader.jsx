import Badge from "./Badge";

export default function SectionHeader({
  badgeText,
  badgeColor = "cyan",
  sectionLabel,
  children,
  className = "",
}) {
  const lineColor = badgeColor === "acid" ? "bg-emerald/40" : "bg-navy/40";

  return (
    <div className={`mb-16 lg:mb-20 pl-0 lg:pl-12 relative ${className}`.trim()}>
      <div className={`absolute left-0 top-3 w-8 h-px ${lineColor} hidden lg:block`} />

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
        <Badge color={badgeColor}>{badgeText}</Badge>
        <h2 className="font-mono text-sm md:text-base text-slate-500 tracking-widest ds-word-keep">
          {sectionLabel}
        </h2>
      </div>

      {children}
    </div>
  );
}
