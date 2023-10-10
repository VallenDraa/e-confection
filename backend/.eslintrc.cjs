module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  env: {
    es2022: true,
    node: true,
  },
};
