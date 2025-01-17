configurando tailwind.config.ts

import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            animation: {
                slidein: "slidein 0.5s ease-out forwards",
                slideout: "slideout 0.5s ease-out forwards",
            },
            keyframes: {
                slidein: {
                    "0%": { transform: "translateX(-100%)", opacity: "0" },
                    "100%": { transform: "translateX(0)", opacity: "1" },
                },
                slideout: {
                    "0%": { transform: "translateX(0)", opacity: "1" },
                    "100%": { transform: "translateX(-100%)", opacity: "0" },
                },
            },
        },
        screens: {
            tablet: "640px",
        },
    },
    plugins: [],
} satisfies Config;


// uso:


"use client";

import { useState } from "react";

export default function Animations() {
    const [isMenuOpen, setIsMenuOpen] = useState(true); // Controle para abrir/fechar o menu

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev); // Alterna o estado entre aberto e fechado
    };

    return (
        <main className="w-screen h-screen bg-slate-400 flex">
            {/* Menu lateral com animação */}
            <aside
                className={`flex flex-col w-64 h-screen border border-slate-900 bg-slate-500 ${
                    isMenuOpen ? "animate-slidein" : "animate-slideout"
                }`}
            >
                <ul className="flex flex-col gap-2 flex-1">
                    <li>
                        <span>Home</span>
                    </li>
                    <li>
                        <span>Cadastros</span>
                    </li>
                    <li>
                        <span>Usuários</span>
                    </li>
                </ul>
                <div className="flex items-center justify-center p-7">
                    <button
                        onClick={toggleMenu}
                        className="flex items-center justify-center px-6 py-2 rounded-lg bg-emerald-600 text-sm font-medium text-white hover:bg-emerald-950 transition-colors relative active:top-[1px]"
                    >
                        Fechar
                    </button>
                </div>
            </aside>

            {/* Conteúdo principal */}
            <section className="p-4">
                <button
                    onClick={toggleMenu}
                    className="flex items-center justify-center px-6 py-2 rounded-lg bg-emerald-600 text-sm font-medium text-white hover:bg-emerald-950 transition-colors relative active:top-[1px]"
                >
                    {isMenuOpen ? "Fechar" : "Abrir"}
                </button>
            </section>
        </main>
    );
}


//======================================================================================================================================


/* com uso de css: Animations.module.css */

@keyframes slideIn {
    from {
        transform: translateX(-100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slideOut {
    from {
        transform: translateX(0);
        opacity: 1;
    }
    to {
        transform: translateX(-100%);
        opacity: 0;
    }
}

.slide-in {
    animation: slideIn 0.5s ease-in-out forwards;
}

.slide-out {
    animation: slideOut 0.5s ease-in-out forwards;
}

//------------------------------------------------------------------------------------------------------------------

"use client";

import { useState } from "react";
import styles from "./Animations.module.css";

export default function Animations() {
    const [isMenuOpen, setIsMenuOpen] = useState(true); // Controle para abrir/fechar o menu

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev); // Alterna o estado entre aberto e fechado
    };

    return (
        <main className="w-screen h-screen bg-slate-400 flex">
            {/* Menu lateral com animação */}
            <aside
                className={`flex flex-col w-64 h-screen border border-slate-900 bg-slate-500 ${
                    isMenuOpen ? styles["slide-in"] : styles["slide-out"]
                } `}
            >
                <ul className="flex flex-col gap-2 flex-1">
                    <li>
                        <span>Home</span>
                    </li>
                    <li>
                        <span>Cadastros</span>
                    </li>
                    <li>
                        <span>Usuários</span>
                    </li>
                </ul>
                <div className="flex items-center justify-center p-7">
                    <button
                        onClick={toggleMenu}
                        className="flex items-center justify-center px-6 py-2 rounded-lg bg-emerald-600 text-sm font-medium text-white hover:bg-emerald-950 transition-colors relative active:top-[1px]"
                    >
                        Fechar
                    </button>
                </div>
            </aside>

            {/* Conteúdo principal */}
            <section className="p-4">
                <button
                    onClick={toggleMenu}
                    className="flex items-center justify-center px-6 py-2 rounded-lg bg-emerald-600 text-sm font-medium text-white hover:bg-emerald-950 transition-colors relative active:top-[1px]"
                >
                    {isMenuOpen ? "Fechar" : "Abrir"}
                </button>
            </section>
        </main>
    );
}
