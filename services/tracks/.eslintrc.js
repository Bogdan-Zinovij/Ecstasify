module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['standard', 'plugin:sonarjs/recommended', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['sonarjs'],
  rules: {
    semi: ['error', 'always'],
  },
};
