import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  // site: "https://bmeson.netlify.app/",

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    icon(),
  ],
});