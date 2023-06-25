/*
	expo install @notifee/react-native
	
	Em seguida instalar a Expo BuildProperties: npx expo install expo-build-properties
	
	Incluir também em app.json o plugin de Expo BuildProperties "expo-build-properties" dentro de um array:
	
	{
		"name": "my app",
		"plugins": [
			["expo-build-properties"]
		]
	}
	
	E dentro desse array adicionar a configuração para Android e se necessário o Ios ficando da seguinte maneira:
	
	"plugins": [
			[
				"expo-build-properties", 
				{
					"android": {
						"compileSdkVersion": 33,
						"targetSdkVersion": 33,
						"buildToolsVersion": "33.0.0"
					},
					"ios": {
						"deploymentTarget": "13.0"
					}
				}
			
			]
		]
		
	E por fim rodar: npx expo prebuild --clean
	
	com isso ele criará uma pasta do android
	
	***Obs: Depois para startar com essa configuração deve-se rodar npx expo run:android
*/