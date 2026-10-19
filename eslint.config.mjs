import js from "@eslint/js";
import globals from "globals";
import reactPlugin from "eslint-plugin-react";
import { defineConfig, globalIgnores } from "eslint/config";

const eslintConfig = defineConfig([
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts", "jsx-repro-tmp.js"]),
  js.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { ...globals.browser, ...globals.node },
    },
    plugins: { react: reactPlugin },
    rules: { "react/jsx-uses-vars": "error" },
  },
]);

export default eslintConfig;
