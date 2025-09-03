import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  eslintConfigPrettier,
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  // {
  //   languageOptions: {
  //     globals: {
  //       ...globals.browser
  //     }
  //   }
  // },
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      quotes: ["error", "double"],
    },
  },
];
