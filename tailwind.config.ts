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
        foreground: "var(--foreground)",
        brand: {
          primary: "#5D5FEF",
          secondary: "#377EF7",
        },
        provider: {
          anthropic: "#D97706",
          openai: "#10A37F",
          google: "#4285F4",
          xai: "#000000",
          deepseek: "#2563EB",
          meta: "#0668E1",
          mistral: "#F97316",
          cohere: "#7C3AED",
          perplexity: "#22D3EE",
        },
      },
      fontFamily: {
        sans: ["var(--font-noto-sans-kr)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
