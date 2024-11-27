import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        sans: "var(--font-sans)",
        serif: "var(--font-serif)",
        poppins: ['"Poppins"'],
      },
      boxShadow: {
        'custom-shadow': '0 9px 26px rgba(115, 115, 115, 0.1)', // Replace with your hex-to-RGBA color
      },
    },
  },
  plugins: [],
};
export default config;
