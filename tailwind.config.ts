import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#f4f8f2",
          100: "#e5eee2",
          700: "#1d5234",
          800: "#153f2a",
          900: "#0f2f21"
        },
        kinari: "#f7f2e8",
        gold: "#b69446",
        ink: "#1d211f"
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ],
        serif: ["var(--font-serif)", "Hiragino Mincho ProN", "Yu Mincho", "serif"]
      },
      boxShadow: {
        soft: "0 20px 60px rgba(22, 39, 28, 0.12)",
        admin: "0 8px 24px rgba(0, 0, 0, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
