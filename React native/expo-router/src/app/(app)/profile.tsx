import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Profile(): JSX.Element {
    return (
        <View>
            <Text>Peril</Text>
            <Link href={"/"}>Home</Link>
        </View>
    );
}
