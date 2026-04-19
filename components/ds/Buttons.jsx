export function PrimaryButton({ children, href = "#", className = "", icon = true }) {
  return (
    <a
      href={href}
      className={`ds-btn-primary font-display font-medium px-8 py-4 uppercase tracking-wider text-sm group ${className}`.trim()}
    >
      <span>{children}</span>
      {icon && (
        <svg
          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="square"
            strokeLinejoin="miter"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      )}
    </a>
  );
}

export function SecondaryButton({ children, href = "#", className = "" }) {
  return (
    <a
      href={href}
      className={`ds-btn-secondary font-display font-medium px-8 py-4 uppercase tracking-wider text-sm ${className}`.trim()}
    >
      {children}
    </a>
  );
}
