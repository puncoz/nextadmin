import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "clr-bg": "var(--bg)",
        "clr-bg-soft": "var(--bgSoft)",
        "clr-text": "var(--text)",
        "clr-text-soft": "var(--textSoft)",
      },
    },
  },
  plugins: [],
}
export default config
