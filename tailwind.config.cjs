/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
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
  plugins: [],
  darkMode: ["class", '[data-theme="dark"]'],
};
