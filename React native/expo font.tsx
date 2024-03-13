//src/providers/FontProvider.tsx:

import { useCallback } from "react";
import { View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export const FontProvider = ({
    children,
}: React.PropsWithChildren): JSX.Element | null => {
    const [fontsLoaded, fontError] = useFonts({
        "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
        "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
            {children}
        </View>
    );
};

//-----------------------------------------------------------------------------------------------

//App.tsx:

import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Home from "./src/screens/home";

import { theme } from "./src/theme";
import { ThemeProvider } from "styled-components/native";
import { FontProvider } from "./src/providers/FontProvider";

export default function App() {
    return (
        <FontProvider>
            <ThemeProvider theme={theme}>
                <GestureHandlerRootView style={{ flex: 1 }}>
                    <StatusBar
                        style="light"
                        backgroundColor="transparent"
                        translucent
                    />
                    <Home />
                </GestureHandlerRootView>
            </ThemeProvider>
        </FontProvider>
    );
}
