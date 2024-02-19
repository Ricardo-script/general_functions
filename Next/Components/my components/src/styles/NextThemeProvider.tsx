"use client";

import theme from "./themes";
import { ThemeProvider } from "styled-components";

const NextThemeProvider = ({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default NextThemeProvider;
