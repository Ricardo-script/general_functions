// iniciar projeto

yarn create vite


// Select a framework: Vanilla
// Select a variant: Typescript | Javascript
// cd nameProjeto | code .
//---------------------------------------------------------------------------------
// na pasta raiz do projeto criar um arquivo chamado vite.config.ts

import { defineConfig } from "vite";

export default defineConfig({
    root: "./",
    build: {
        outDir: "dist",
        emptyOutDir: true,
        rollupOptions: {
            input: {
                index: "index.html",
                home: "src/scripts/home.js",
                contato: "src/pages/contato.html",
                sobre: "src/pages/sobre.html",
            },
            output: {
                entryFileNames: "src/scripts/[name].js",
                chunkFileNames: "chunks/[name].js",
                assetFileNames: "assets/[name].[ext]",
            },
        },
    },
    server: {
        open: true,
        strictPort: true,
        port: 3000,
    },
});


