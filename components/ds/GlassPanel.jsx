export default function GlassPanel({
  children,
  className = "",
  hoverColor = "cyan",
  ctaFrame = false,
  as: Tag = "div",
  ...rest
}) {
  const hover = hoverColor === "acid" ? "hover-acid" : "";
  const cta = ctaFrame ? "cta-frame" : "";
  return (
    <Tag className={`ds-glass-panel ${hover} ${cta} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
