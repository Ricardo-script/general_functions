1. instalar eslint-config-universe:

yarn:  yarn add -D eslint prettier eslint-config-universe
npm:   npm install eslint prettier eslint-config-universe --save-dev


2. Crie um arquivo de configuração ESLint chamado .eslintrc.js na raiz do projeto:

module.exports = {
    root: true,
    extends: [
        'universe/native',
    ],
    rules: {
        "prettier/prettier": "off",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/explicit-module-boundary-types": "error",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/explicit-function-return-type": ["error", { "allowExpressions": true }]
    }

};


3. Crie um arquivo .prettierrc com conteúdo :

{
    "semi": true,
    "trailingComma": "all",
    "singleQuote": true,
    "printWidth": 100,
    "tabWidth": 4,
    "bracketSameLine": true
}

4. Adicione um scriptao seu package.json para executar o ESLint.

{
  "scripts": {
    "lint": "eslint ."
  }
}