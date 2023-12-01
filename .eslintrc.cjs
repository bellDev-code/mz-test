module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "plugin:prettier/recommended",
    "react-app",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "rules": {
      "@typescript-eslint/interface-name-prefix": "on",
      "@typescript-eslint/explicit-function-return-type": "on",
      "@typescript-eslint/explicit-module-boundary-types": "on",
      "@typescript-eslint/no-explicit-any": "on"
    }
  },
}
