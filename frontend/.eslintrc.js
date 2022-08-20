module.exports = {
  root: true,
  env: {
    es6: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:react/jsx-runtime",
    "google",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.json", "tsconfig.node.json"],
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: [
    "/dist/**/*", // Ignore built files.
  ],
  plugins: ["react", "@typescript-eslint", "import", "jsx-a11y", "react-hooks"],
  rules: {
    quotes: ["error", "double"],
    "import/no-unresolved": 0,
    "require-jsdoc": 0,
    "spaced-comment": ["error", "always", { markers: ["/"] }],
  },
};
