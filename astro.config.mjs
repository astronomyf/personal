import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import rehypePrettyCode from "rehype-pretty-code";
import react from "@astrojs/react";

// Syntax highlighting theme for Markdown code blocks
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/serverless";
const options = {
  theme: {
    dark: "github-dark-dimmed",
    light: "github-light"
  },
  keepBackground: false
};


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), mdx()],
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [[rehypePrettyCode, options]]
  },
  output: "server",
  adapter: vercel()
});