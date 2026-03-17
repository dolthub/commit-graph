import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import prettierConfig from "eslint-config-prettier/flat";

export default tseslint.config(
  {
    ignores: [
      "src/stories/**",
      "src/**/*.test.ts",
      "src/helpers/sampleCommits.ts",
    ],
  },
  {
    files: ["src/**/*.{ts,tsx}"],
    extends: [eslint.configs.recommended, ...tseslint.configs.recommended, prettierConfig],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-use-before-define": [
        "error",
        { functions: false, classes: false },
      ],
      "no-nested-ternary": "off",
      "no-param-reassign": ["error", { props: false }],
      "no-plusplus": "off",
      "no-use-before-define": ["error", { functions: false, classes: false }],
    },
  },
);
