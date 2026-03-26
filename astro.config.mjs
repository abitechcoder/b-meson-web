import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  // site: "https://bmeson.netlify.app/",
  integrations: [
    icon(),
  ],

  vite: {
    plugins: [tailwindcss(),],
  },

  adapter: netlify(),
});