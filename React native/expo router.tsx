## expo routes

- Criar para src, apagar tudo de dentro de app
- Ao criar a pasta src deve mudar o caminho da pasta dentro de tsconfig.json e na propriedade compilerOptions

"paths": {
"@/_": ["./src/_"]
}

- criar um arquivo chamado '\_layout.tsx' dentro de app que sera o ponto de entrada da aplicação
