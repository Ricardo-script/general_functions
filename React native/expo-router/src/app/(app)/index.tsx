import { View } from "react-native";
import { Link } from "expo-router";

export default function Home() {
    return (
        <View style={{ flex: 1, backgroundColor: "#797373" }}>
            <Link href={"/user/Ricardo"}>Ir para Usuário</Link>
            <Link href={"/(tabs)/dashboard"}>Ir para dashboard</Link>
        </View>
    );
}
