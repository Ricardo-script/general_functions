/* 
- npx expo install expo-document-picker
import * as DocumentPicker from "expo-document-picker";

- npx expo install expo-file-system
import { File } from "expo-file-system";

- yarn add xlsx
import * as XLSX from "xlsx";

- npx expo install react-native-view-shot
import ViewShot from "react-native-view-shot";

- npx expo install expo-sharing
*/


import React, { useRef, useState } from "react";
import { View, Button, Text } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { File } from "expo-file-system";
import * as XLSX from "xlsx";

import ViewShot from "react-native-view-shot";
import * as Sharing from "expo-sharing";

type Row = Record<string, any>;

export default function App() {
    const [data, setData] = useState<Row[]>([]);
    const [loading, setLoading] = useState(false);

    const viewRef = useRef<any>(null);

    // 📦 IMPORT EXCEL
    const importExcel = async () => {
        try {
            setLoading(true);

            const result = await DocumentPicker.getDocumentAsync({
                type: "*/*",
            });

            if (result.canceled) {
                setLoading(false);
                return;
            }

            const uri = result.assets[0].uri;

            const file = new File(uri);
            const buffer = await file.arrayBuffer();

            const workbook = XLSX.read(buffer, { type: "array" });

            const sheet = workbook.Sheets[workbook.SheetNames[0]];

            const json: Row[] = XLSX.utils.sheet_to_json(sheet, {
                defval: "",
                range: 3,
            });

            setData(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    // 📸 EXPORTAR TELA INTEIRA
    const exportImage = async () => {
        try {
            await new Promise((r) => setTimeout(r, 300));

            const uri = await viewRef.current.capture({
                format: "png",
                quality: 1,
                result: "tmpfile",
            });

            await Sharing.shareAsync(uri);
        } catch (error) {
            console.error("Erro ao exportar:", error);
        }
    };

    return (
        <View style={{ flex: 1, padding: 20, marginTop: 50 }}>
            {/* BOTÕES */}
            <Button
                title={loading ? "Carregando..." : "Importar Excel"}
                onPress={importExcel}
            />

            <View style={{ height: 10 }} />

            <Button title="Exportar tela inteira (PNG)" onPress={exportImage} />

            {/* 🔥 VIEW QUE SERÁ CAPTURADA */}
            <ViewShot
                ref={viewRef}
                options={{ format: "png", quality: 1 }}
                style={{ backgroundColor: "#fff" }}
            >
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        marginBottom: 10,
                    }}
                >
                    Relatório Completo
                </Text>

                {/* 🔥 IMPORTANTE: NÃO usar ScrollView aqui */}
                <View>
                    {data.length === 0 ? (
                        <Text>Nenhum dado carregado</Text>
                    ) : (
                        data.map((item, index) => (
                            <View
                                key={index}
                                style={{
                                    padding: 10,
                                    marginBottom: 10,
                                    backgroundColor: "#eee",
                                    borderRadius: 8,
                                }}
                            >
                                <Text>{JSON.stringify(item, null, 2)}</Text>
                            </View>
                        ))
                    )}
                </View>
            </ViewShot>
        </View>
    );
}
