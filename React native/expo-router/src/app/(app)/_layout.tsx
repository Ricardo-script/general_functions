import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function () {
    return (
        <Stack
            initialRouteName="index"
            screenOptions={{
                header: () => (
                    <View
                        style={{
                            backgroundColor: "orange",
                            width: "100%",
                            height: 75,
                            borderBottomEndRadius: 20,
                            alignItems: "center",
                            justifyContent: "center",
                            paddingTop: 15,
                        }}
                    >
                        <Text>Header customizado</Text>
                    </View>
                ),
            }}
        >
            <Stack.Screen name="index" options={{ title: "Home" }} />
            <Stack.Screen name="profile" options={{ title: "Perfil" }} />
        </Stack>
    );
}
