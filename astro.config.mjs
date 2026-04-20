import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  // site: "https://bmeson.netlify.app/",
  output: "static",
  integrations: [
    icon(),
  ],

  vite: {
    plugins: [tailwindcss(),],
  },
});