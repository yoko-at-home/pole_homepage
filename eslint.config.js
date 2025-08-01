const js = require("@eslint/js");
const nextPlugin = require("@next/eslint-plugin-next");
const reactHooksPlugin = require("eslint-plugin-react-hooks");
const reactPlugin = require("eslint-plugin-react");
const jsxA11yPlugin = require("eslint-plugin-jsx-a11y");
const importPlugin = require("eslint-plugin-import");
const simpleImportSortPlugin = require("eslint-plugin-simple-import-sort");
const sortDestructureKeysPlugin = require("eslint-plugin-sort-destructure-keys");
const tailwindcssPlugin = require("eslint-plugin-tailwindcss");
const tseslint = require("@typescript-eslint/eslint-plugin");
const tsparser = require("@typescript-eslint/parser");

module.exports = [
  js.configs.recommended,
  {
    ignores: [".next/**/*", "node_modules/**/*", "out/**/*", "dist/**/*", "build/**/*"],
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        project: "./tsconfig.json",
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        console: "readonly",
        process: "readonly",
        window: "readonly",
        document: "readonly",
        fetch: "readonly",
        alert: "readonly",
        React: "readonly",
        module: "readonly",
        require: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      "@next/next": nextPlugin,
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "jsx-a11y": jsxA11yPlugin,
      import: importPlugin,
      "simple-import-sort": simpleImportSortPlugin,
      "sort-destructure-keys": sortDestructureKeysPlugin,
      tailwindcss: tailwindcssPlugin,
    },
    settings: {
      tailwindcss: { groupByResponsive: true },
      react: {
        version: "detect",
      },
    },
    rules: {
      "no-console": ["error", { allow: ["warn", "info", "error"] }],
      "no-restricted-syntax": ["error", { selector: "TSEnumDeclaration", message: "Don't declare enums" }],
      "prefer-arrow-callback": "error",
      "prefer-const": "error",
      "func-style": ["error", "expression"],
      "arrow-body-style": ["error", "always"],
      "no-restricted-imports": ["error", { paths: [{ name: "react", importNames: ["default"] }] }],
      "no-irregular-whitespace": "off",

      // react
      "react/display-name": "error",
      "react/jsx-handler-names": [
        "error",
        {
          eventHandlerPrefix: "handle",
          eventHandlerPropPrefix: "on",
          checkLocalVariables: true,
          checkInlineFunction: true,
        },
      ],
      "react/destructuring-assignment": ["off"],
      "react/no-unknown-property": ["error", { ignore: ["jsx"] }],

      // import
      "import/newline-after-import": "error",
      "import/no-default-export": "off",
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "sort-destructure-keys/sort-destructure-keys": 2,

      // @typescript-eslint
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/consistent-type-imports": ["warn", { prefer: "type-imports" }],
      "@typescript-eslint/no-unused-vars": ["error", { varsIgnorePattern: "^_", argsIgnorePattern: "^_" }],
      "@typescript-eslint/naming-convention": [
        "error",
        { selector: ["typeAlias", "typeParameter"], format: ["PascalCase"] },
        {
          selector: "variable",
          types: ["boolean"],
          format: ["PascalCase"],
          prefix: ["no", "is", "has", "should"],
          filter: { regex: "^_", match: false },
        },
      ],

      // jsx-a11y
      "jsx-a11y/no-autofocus": "off",
      "jsx-a11y/anchor-is-valid": [
        "error",
        { components: ["Link"], specialLink: ["hrefLeft", "hrefRight"], aspects: ["invalidHref", "preferButton"] },
      ],

      // tailwind
      "tailwindcss/classnames-order": "warn",
      "tailwindcss/enforces-shorthand": "warn",
      "tailwindcss/migration-from-tailwind-2": "warn",
      "tailwindcss/no-arbitrary-value": "off",
      "tailwindcss/no-custom-classname": "warn",
      "tailwindcss/no-contradicting-classname": "error",
    },
  },
  {
    files: ["src/pages/**/*.tsx", "src/pages/api/**/*.ts"],
    rules: {
      "import/no-default-export": "off",
    },
  },
];
