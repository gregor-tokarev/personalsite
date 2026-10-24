// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

/**
 * Wraps markdown tables in a scroll container so a wide table scrolls
 * inside the text column instead of stretching the page.
 */
function rehypeScrollTables() {
  /** @param {any} node */
  const visit = (node) => {
    if (!Array.isArray(node.children)) return;
    node.children = node.children.map((/** @type {any} */ child) => {
      visit(child);
      if (child.type === "element" && child.tagName === "table") {
        return {
          type: "element",
          tagName: "div",
          properties: { className: ["table-scroll"] },
          children: [child],
        };
      }
      return child;
    });
  };
  return visit;
}

// https://astro.build/config
export default defineConfig({
  site: "https://tokarev.work",
  output: "static",
  build: {
    inlineStylesheets: "always",
  },
  trailingSlash: "always",
  markdown: {
    shikiConfig: {
      theme: "everforest-dark",
    },
    rehypePlugins: [rehypeScrollTables],
  },
  server: {
    host: true,
    port: 4321,
    allowedHosts: ["atlas.fleet", "sokolov.fleet"],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
