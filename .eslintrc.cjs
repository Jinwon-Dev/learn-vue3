/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: "2022",
    sourceType: "module",
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  "rules": {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "prettier/prettier": ["error", {
      semi: true,
      useTabs: true,
      tabWidth: 2,
      trailingComma: "all",
      printwidth: 80,
      bracketSpacing: true,
      arrowParens: "avoid",
    }],
  },
};
