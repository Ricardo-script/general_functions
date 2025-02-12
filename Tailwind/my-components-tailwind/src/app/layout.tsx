import { inter, montserrat, poppins, roboto, mulish } from "@/styles/fonts";
import "./globals.css";
import { GlobalContextProvider } from "@/context/GlobalContext";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <body
                className={`${poppins.variable} ${roboto.variable} ${inter.variable} ${montserrat.variable} ${mulish.variable} antialiased`}
                suppressHydrationWarning={true}
            >
                <GlobalContextProvider>{children}</GlobalContextProvider>
            </body>
        </html>
    );
}
