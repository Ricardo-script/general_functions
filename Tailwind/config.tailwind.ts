import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            fontSize: {
                xxs: "0.625rem",
            },
        },
    },
    plugins: [],
} satisfies Config;

// criado xxs para font-size, uso:

<div className="text-xxs text-zinc-400 flex items-center gap-1">
    <span>Convite</span>
    <span>Há 3 min</span>
</div>
