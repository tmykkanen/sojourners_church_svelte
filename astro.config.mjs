// @ts-check

import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import icon from "astro-icon";

import superforms from "astro-superforms";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), icon(), superforms()],

  vite: {
    plugins: [tailwindcss()],
  },
});
