import React from "react";
import { Alert, Button } from "react-native";
import * as ImagePicker from "expo-image-picker";
import MlkitOcr from "react-native-mlkit-ocr";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
    const toNumber = (value: string) => {
        return Number(value.replace(",", ".").replace(/[^\d.]/g, ""));
    };

    const getValue = (text: string, label: string) => {
        const regex = new RegExp(
            label + "[\\s\\S]{0,30}?([0-9]+[.,]?[0-9]*)",
            "i",
        );

        const match = text.match(regex);

        if (!match) return undefined;

        return toNumber(match[1]);
    };

    const parse = (text: string) => ({
        weight: getValue(text, "Peso"),
        bmi: getValue(text, "IMC"),
        bodyFat: getValue(text, "Gordura"),
        bodyFatKg: getValue(text, "Peso de gordura"),
        musclePercent: getValue(text, "massa muscular esquelética\\(%\\)"),
        skeletalMuscleKg: getValue(text, "Peso da massa muscular esquelética"),
        muscleMassKg: getValue(text, "Peso de massa muscular"),
        water: getValue(text, "Água"),
        waterKg: getValue(text, "peso da água"),
        visceralFat: getValue(text, "Gordura visceral"),
        boneMass: getValue(text, "Osso"),
        metabolism: getValue(text, "Metabolismo"),
        protein: getValue(text, "Proteína"),
        obesity: getValue(text, "Obesidade"),
        metabolicAge: getValue(text, "Idade metabólica"),
        lbm: getValue(text, "LBM"),
        bodyAge: getValue(text, "Idade real"),
        height: getValue(text, "Altura"),
    });

    const pickImage = async () => {
        const permission =
            await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (!permission.granted) {
            Alert.alert(
                "Permissão",
                "Permissão para acessar a galeria negada.",
            );
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ["images"],
            quality: 1,
        });

        if (result.canceled) return;

        const uri = result.assets[0].uri;

        try {
            const blocks = await MlkitOcr.detectFromUri(uri);

            const text = blocks.map((b: any) => b.text).join("\n");

            console.log("===== TEXTO OCR =====");
            console.log(text);

            const json = parse(text);

            Alert.alert("JSON", JSON.stringify(json, null, 2));
        } catch (e) {
            console.log(e);

            Alert.alert("Erro", "Não foi possível fazer o OCR.");
        }
    };

    return (
        <SafeAreaView
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Button title="Selecionar imagem" onPress={pickImage} />
        </SafeAreaView>
    );
}
