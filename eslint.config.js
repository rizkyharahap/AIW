import pluginVue from "eslint-plugin-vue";
import { defineConfigWithVueTs, vueTsConfigs } from "@vue/eslint-config-typescript";
import skipFormatting from "@vue/eslint-config-prettier/skip-formatting";

export default [
  {
    name: "app/files-to-lint",
    files: ["**/*.{ts,mts,tsx,vue}"],
  },

  {
    name: "app/files-to-ignore",
    ignores: ["**/dist/**", "**/dist-ssr/**", "**/coverage/**"],
  },

  ...pluginVue.configs["flat/essential"],

  defineConfigWithVueTs({
    extends: [
      ...vueTsConfigs.recommended, // gunakan config TS terbaru untuk Vue
    ],
  }),

  {
    ...pluginVitest.configs.recommended,
    files: ["src/**/__tests__/*"],
  },

  skipFormatting,

  // Rules
  {
    files: ["src/**/*.{ts,mts,vue}"],

    languageOptions: {
      parserOptions: {
        parser: "@typescript-eslint/parser",
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },

    rules: {
      // Vue-specific rules
      "vue/multi-word-component-names": "off",

      // TypeScript-specific rules
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "inline-type-imports",
          disallowTypeAnnotations: false,
        },
      ],
      "@typescript-eslint/consistent-type-exports": [
        "error",
        { fixMixedExportsWithInlineTypeSpecifier: true },
      ],
    },
  },
];
