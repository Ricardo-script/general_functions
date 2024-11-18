import { Tabs } from "expo-router";

export default function Layout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{ headerShown: false }} />
            <Tabs.Screen name="settings" options={{ headerShown: false }} />
            <Tabs.Screen name="test/index" options={{ headerShown: false }} />
        </Tabs>
    );
}
