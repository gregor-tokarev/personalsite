// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://tokarev.work",
  output: "static",
  trailingSlash: "always",
  server: {
    host: true,
    port: 4321,
    allowedHosts: ["atlas.fleet"],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
