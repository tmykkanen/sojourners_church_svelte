// @ts-check

import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";
import superforms from "@tmykkanen/astro-superforms-custom-pkg";
import { defineConfig } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), icon(), superforms()],

  vite: {
    plugins: [tailwindcss()],
  },
});
