import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        secondary: "var(--secondary)",
        third: "var(--third)",
        highlight: "var(--highlight)",
        defused: "var(--defused)",
        hover: "var(--hover)",
      },
    },
  },
  plugins: [],
};
export default config;
