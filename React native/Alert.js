
import { StyleSheet, Button, View, StatusBar, Alert } from 'react-native';

export default function App() {

	const createTwoButtonAlert = () =>
		Alert.alert('Alert Title', 'My Alert Msg', [
			{
				text: 'Cancel',
				onPress: () => console.log('Cancel Pressed'),
				style: 'cancel',
			},
			{ text: 'OK', onPress: () => console.log('OK Pressed') },
		]);

	const createThreeButtonAlert = () =>
		Alert.alert('Alert Title', 'My Alert Msg', [
			{
				text: 'Ask me later',
				onPress: () => console.log('Ask me later pressed'),
			},
			{
				text: 'Cancel',
				onPress: () => console.log('Cancel Pressed'),
				style: 'cancel',
			},
			{ text: 'OK', onPress: () => console.log('OK Pressed') },
		]);

	return (
		<View style={styles.container}>
			<StatusBar
				barStyle="light-content"
				hidden={false}
				backgroundColor="#0066CC"
				translucent={false}
				networkActivityIndicatorVisible={true}
			/>
			<Button title={'2-Button Alert'} onPress={createTwoButtonAlert} />
			<Button title={'3-Button Alert'} onPress={createThreeButtonAlert} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 50,
		gap: 50
	},
});
