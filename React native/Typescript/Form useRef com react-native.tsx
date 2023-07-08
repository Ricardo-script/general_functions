import { useRef } from 'react';
import { TextInput, Button, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	input: {
		borderWidth: 1,
		borderColor: 'gray',
		borderRadius: 4,
		padding: 8,
		marginBottom: 16,
		width: '100%'
	},
});

const App: React.FC = () => {

	const valuesForm = useRef({
		nome: '',
		email: '',
		endereco: '',
	});

	const handleTextInputChange = (name: keyof typeof valuesForm.current, text: string) => {
		valuesForm.current[name] = text;
	};

	const viewValues = () => {
		console.log(valuesForm.current);
	};

	return (
		<View style={{ marginTop: 80, width: '100%', paddingLeft: 10, paddingRight: 10 }}>
			<TextInput
				style={styles.input}
				onChangeText={(text) => handleTextInputChange('nome', text)}
			/>
			<TextInput
				style={styles.input}
				onChangeText={(text) => handleTextInputChange('email', text)}
			/>
			<TextInput
				style={styles.input}
				onChangeText={(text) => handleTextInputChange('endereco', text)}
			/>
			<Button title="Get Value" onPress={viewValues} />
		</View>
	);
};

export default App;
