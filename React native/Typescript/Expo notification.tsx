/*
	npx expo install expo-notifications
	npx expo install expo-device // caso necessário
*/

import * as Notifications from 'expo-notifications';

export const handleCallNotification = async (): Promise<void> => {
    await requestNotificationPermission();
    console.log('chamou notificação');

    await Notifications.scheduleNotificationAsync({
        content: {
            title: 'App do Aluno',
            body: 'Você Possui 2 novas mensagens',
        },
        trigger: {
            seconds: 3,
        },
    });
};

const requestNotificationPermission = async (): Promise<void> => {
    const { status } = await Notifications.getPermissionsAsync();
    if (status !== 'granted') {
        const { status: newStatus } = await Notifications.requestPermissionsAsync();
        if (newStatus !== 'granted') {
            alert('Você não concedeu permissão para receber notificações');
        }
    }


//==========================================================================================================================================
// Notificação simples local:
import { View, Button, Alert} from 'react-native';
import * as Notifications from 'expo-notifications' // import de expo-notifications

Notifications.setNotificationHandler({
	handleNotification: async () => ({ //*propriedades obrigatórias (inseri-las fora do component)
		shouldShowAlert: true,   //mostrar o alerta da notificação
		shouldPlaySound: true, //recebe som ao receber notificação
		shouldSetBadge: true, //para mostrar quantidade de alertas no icone
	}),
});

export default function App() {

	const notifications = async () => {

		//verifica se o usuário deu permissão para receber notificações
		const { status } = await Notifications.getPermissionsAsync();
		//agora verificamos se o status esta garantido ou não:
		if (status !== 'granted') {
			Alert.alert('Você não deixou as notificações ativas!');
			return
		}

		await Notifications.scheduleNotificationAsync({
			content: {
				title: "Você tem um novo E-mail! 📬",
				body: 'Esse é o corpo da mensagem',
				data: { data: 'goes here' },
			},
			trigger: null //{ seconds: 2 },
		});
	}

	return (
		<View
			style={{
				flex: 1,
				alignItems: 'center',
				justifyContent: 'space-around',
			}}
		>
			<Button title="Chamar Notificação" onPress={notifications} />
		</View>
	);
}

// --------Com uso de Api Notification-----------------------------------------------------------------------------------------------
	// Obs: Nesse caso não se faz necessário inserir Notifications.scheduleNotificationAsync, pois são de notificações locais
	
	const notifications = async () => {

		//verifica se o usuário deu permissão para receber notificações
		const { status } = await Notifications.getPermissionsAsync();
		//agora verificamos se o status esta garantido ou não:
		if (status !== 'granted') {
			Alert.alert('Você não deixou as notificações ativas!');
			return
		}

		const token = await Notifications.getExpoPushTokenAsync();
		console.log(token); // ele retorna um token ex: {"data": "ExponentPushToken[x2mmjAGzrPzyP9ka3S8vFN]", "type": "expo"}
		//copie o token e pode inserir na ferramente de teste push notification toll: https://expo.dev/notifications
		
	}
	
//-----------------------------------------------------------------------------------------------------------------------------------
/* 
	Configuração do aplicativo em app.json:
	
	icon: escolhe o icone
	sounds: escolhe sons personalizados
	
	{
	"expo": {
    "plugins": [
				[
					"expo-notifications",
					{
						"icon": "./local/assets/notification-icon.png",
						"color": "#ffffff",
						"sounds": [
							"./local/assets/notification-sound.wav",
							"./local/assets/notification-sound-other.wav"
						]
					}
				]
			]
		}
	}
*/
