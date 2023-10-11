export const words: object = {
    Name: {
        'pt': 'Nome',
        'es': 'Nombre',
        'fr': 'Nom',
        'jp': '名前',
    }
}


//------------------------------------------------------------------------------------------------
import { ReactNode } from "react";
import { Text } from "react-native";
import { words } from "../functions/translate/keywords";

type TextTranslateProps = {
    children: ReactNode,
    language: string
}

export const TextTranslate = ({ children, language }: TextTranslateProps) => {

    const handleTranslate = () => {

        return words[children][language]
    }

    return (
        <Text>{handleTranslate()}</Text>
    );
}


//------------------------------------------------------------------------------------------

// uso:

import { View, StyleSheet } from "react-native";
import { TextTranslate } from "./components/TextTranslate";

export default function App(): JSX.Element {
    return (
        <View style={styles.container}>
            <TextTranslate language='jp'>Name</TextTranslate>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});