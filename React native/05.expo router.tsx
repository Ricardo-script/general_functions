## create app

npx create-expo-app

//----------------------------------------------------------------------------------------------------

- Criar para src, apagar tudo de dentro de app e arrastar para dentro de src
- Ao criar a pasta src deve mudar o caminho da pasta dentro de tsconfig.json e na propriedade compilerOptions

"compilerOptions": {
     "strict": true,
      "paths": {
      "@/*": ["./src/*"]
    }
},

- criar um arquivo chamado '_layout.tsx' dentro de app que sera o ponto de entrada da aplicação
