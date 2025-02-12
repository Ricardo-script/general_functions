import { Roboto, Poppins, Inter, Montserrat, Mulish } from "next/font/google";

export const poppins = Poppins({
    subsets: ["latin"],
    variable: "--font-Poppins",
    display: "swap",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const roboto = Roboto({
    subsets: ["latin"],
    variable: "--font-Roboto",
    display: "swap",
    weight: ["100", "300", "400", "500", "700", "900"],
});

export const inter = Inter({
    subsets: ["latin"],
    variable: "--font-Inter",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-Montserrat",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const mulish = Mulish({
    subsets: ["latin"],
    variable: "--font-Mulish",
    weight: ["300", "400", "500", "600", "700", "800"],
});
