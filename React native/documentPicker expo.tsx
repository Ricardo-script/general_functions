//npx expo install expo-document-picker
//ou
// yarn add expo-document-picker


/* 

app.json: 


	{
	  "expo": {
	    "plugins": [
	      [
		"expo-document-picker",
		{
		  "iCloudContainerEnvironment": "Production"
		}
	      ]
	    ]
	  }
	}
*/


import { Button, View } from "react-native";
import * as DocumentPicker from "expo-document-picker";

export default function FileScreen(): JSX.Element {
    const pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({});

        alert(result.assets !== null && result.assets[0].uri);

        console.log(result);
    };

    return (
        <View>
            <Button title="Upload" onPress={pickDocument} />
        </View>
    );
}


//------------------------------------------------------------------------------------------------
// definindo tipos de arquivos

const pickDocument = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync({
                type: [
                    "application/msword",
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                    "image/png",
                    "image/jpeg",
                ], //type: "application/png", // Por exemplo, aqui estamos especificando apenas arquivos PDF
            });

            if (result.assets !== null && result.assets[0].uri) {
                alert(result.assets[0].uri);
                console.log(result);
            } else {
                console.log(
                    "Operação de seleção de arquivo cancelada pelo usuário ou falhou"
                );
            }
        } catch (error) {
            console.log("Erro ao selecionar o arquivo:", error);
        }
    };

