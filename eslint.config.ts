import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
// import json from "@eslint/json";
import markdown from "@eslint/markdown";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";
import eslintPluginAstro from 'eslint-plugin-astro'
import eslintConfigPrettier from "eslint-config-prettier/flat";
import { includeIgnoreFile } from "@eslint/compat";
import { fileURLToPath } from "node:url";

const gitignorePath = fileURLToPath(new URL(".gitignore", import.meta.url));

export default defineConfig([
  includeIgnoreFile(gitignorePath, "Imported .gitignore patterns"),
	{
		// your overrides
	},
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
  { files: ["**/*.css"], plugins: { css }, language: "css/css", extends: ["css/recommended"] },
  // { files: ["**/*.json"], plugins: { json }, language: "json/json", extends: ["json/recommended"] },
  // { files: ["**/*.md"], plugins: { markdown }, language: "markdown/gfm", extends: ["markdown/recommended"] },
  tseslint.configs.recommended,
  tseslint.config({
    rules: {
      "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error"
    }
  }),
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"

    }
  },
  eslintConfigPrettier,
  
]);
