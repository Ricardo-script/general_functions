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
            boxShadow: {
                within: "#1c64ff37 0px 0px 1px 2px",
                "100": "rgba(75, 76, 79, 0.506) 0px -2px 2px 2px",
                "200": "#96969675 0px 3px 5px -1px",
            },
            fontFamily: {
                inter: ["var(--font-Inter)", "sans-serif"],
            },
            keyframes: {
                scaleUp: {
                    "0%": { transform: "scale(0.2)" },
                    "100%": { transform: "scale(1)" },
                },
            },
            animation: {
                "scale-up": "scaleUp 0.3s forwards",
            },
        },
    },
    plugins: [],
} satisfies Config;
