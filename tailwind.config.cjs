import preline from "preline/plugin.js";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        text: "var(--text)",
        secondary: "var(--secondary)",
        border: "var(--border)",
      },
    },
  },
  plugins: [preline, require("@tailwindcss/typography")],
  darkMode: ["class", '[data-theme="dark"]'],
};
