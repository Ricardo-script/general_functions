//yarn add @react-native-community/slider   ou  npm i @react-native-community/slider

import { useState } from 'react';
import Slider from '@react-native-community/slider';
import { StyleSheet, Text, View, StatusBar, } from 'react-native';

export default function App() {

	const [valor, setValor] = useState(0);

	return (
		<View style={styles.container}>
			<StatusBar
				barStyle="light-content"
				hidden={false}
				backgroundColor="#0066CC"
				translucent={false}
				networkActivityIndicatorVisible={true}
			/>
			<Slider
				minimumValue={0}
				maximumValue={100}
				onValueChange={(valorSelecionado) => setValor(valorSelecionado)}
				value={valor}
				minimumTrackTintColor='#00FF00'
				maximumTrackTintColor='#FF0000'
			/>

			<Text style={{ textAlign: 'center', fontSize: 30 }}>{valor.toFixed(1)}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 50
	},
});
