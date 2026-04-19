/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#030508",
        cyan: "#00E5FF",
        acid: "#39FF14",
        alert: "#FF3366",
        surface: "rgba(255,255,255,0.02)",
        "surface-border": "rgba(0, 229, 255, 0.15)",
        muted: "#6E7787",
        "muted-strong": "#8B94A7",
      },
      fontFamily: {
        display: ['"Space Grotesk"', "Pretendard", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
        sans: ["Pretendard", "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: ".25em",
        ultra: ".5em",
      },
      maxWidth: {
        page: "1600px",
      },
      animation: {
        "pulse-fast": "pulseOpacity 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        scanline: "scanline 8s linear infinite",
        "slide-right": "slideRight 3s linear infinite",
        "scanline-x": "scanlineX 3s linear infinite",
        "bg-pan": "bgPan 3s linear infinite",
      },
      keyframes: {
        pulseOpacity: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        slideRight: {
          "0%": { left: "0%", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { left: "calc(100% - 2rem)", opacity: "0" },
        },
        scanlineX: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        bgPan: {
          "0%": { backgroundPosition: "100% 0" },
          "100%": { backgroundPosition: "-100% 0" },
        },
      },
    },
  },
  plugins: [],
};
