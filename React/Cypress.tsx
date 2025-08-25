Install:

yarn add cypress --dev

abrir:

install:
yarn add cypress --dev

com vite, instalar tbm:

yarn add --dev cypress-vite

as vezes se o cypress.config.ts (ts) da erro, renomear para .js


cypress.config.js:
import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        baseUrl: "http://localhost:5173",
    },
});


rodar:

yarn cypress open
