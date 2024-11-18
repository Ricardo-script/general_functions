import { Slot } from "expo-router";
import { SafeAreaView } from "react-native";

export default function Layout() {
    return (
        <Provider>
            <Slot />
        </Provider>
    );
}

interface ProviderProps {
    children: React.ReactNode;
}

function Provider({ children }: ProviderProps) {
    return <SafeAreaView children={children} style={{ flex: 1 }} />;
}
