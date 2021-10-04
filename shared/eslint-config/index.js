const ERROR = 2;
const basicConig = {
  root: true
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports,
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    // react: {
    //   version: 'detect' // Tells eslint-plugin-react to automatically detect the version of ReactJS
    // },
    "import/resolver": {
      node: {
        moduleDirectory: ["node_modules", "src/"],
      },
    },
  },
  // plugins vs extends: https://stackoverflow.com/questions/53189200/whats-the-difference-between-plugins-and-extends-in-eslint
  // plugins: [
  //   'react',
  //   'react-hooks',
  //   'jsx-a11y'
  // ],
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "prettier", // override other formatting configs to avoid conflicts.
    "plugin:prettier/recommended",
  ],
  rules: {
    semi: [ERROR, "always"],
  },
  overrides: [
    {
      // TypeScript specific configurations
      files: ["**/*.ts", "**/*.tsx"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
      ],
    },
  ],
};
module.exports = basicConfig;
