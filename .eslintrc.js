module.exports = {
  root: true,
  env: {
    node: true,
  },
  rules: {
    indent: ["error", 2],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "no-console": "error",
    "no-trailing-spaces": "error",
    "no-tabs": "off",
    "arrow-parens": 0,
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: "module",
    // allowImportExportEverywhere: true
  },
};
