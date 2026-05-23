export default function Logo({ size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", flexShrink: 0 }}
      aria-hidden="true"
    >
      <rect
        x="2.5"
        y="2.5"
        width="19"
        height="19"
        rx="3.5"
        fill="none"
        stroke="var(--c-cyan)"
        strokeWidth="2"
      />
      <circle cx="7.5" cy="7.5" r="1.6" fill="var(--c-cyan)" />
    </svg>
  );
}
