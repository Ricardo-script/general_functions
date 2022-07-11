import React, { useState } from 'react';


function App() {

	interface Data {
		firstName: string,
		lastName: string;
	}

	type InputEvent = React.ChangeEvent<HTMLInputElement> // declarar o type do event
	
	const [inputFields, setInputFields] = useState<Data[]>([
		{ firstName: '', lastName: '' }
	]);

	//adiciona novo input
	const handleAddFields = () => {
		const values = [...inputFields];
		values.push({ firstName: '', lastName: '' });
		setInputFields(values);
	};

	//remove input
	const handleRemoveFields = (index: number) => {
		const values = [...inputFields];
		values.splice(index, 1);
		setInputFields(values);
	};

	//recebe as informações do input
	const handleInputChange = (index: number, e: InputEvent) : void => { //e: InputEvent => inserido type do event
		const values = [...inputFields];
		if (e.target.name === 'firstName') {
			values[index].firstName = e.target.value;
		} else {
			values[index].lastName = e.target.value;
		}
		setInputFields(values);
	}

	return (
		<div>
			{inputFields.map((inputField, index) => (
				<div key={index}>
					<input type="text" name='firstName' value={inputField.firstName} onChange={(e) => handleInputChange(index, e)} />
					<input type="text" name='lastName' value={inputField.lastName} onChange={(e) => handleInputChange(index, e)} />
					<button onClick={() => handleRemoveFields(index)}>delete</button>
				</div>
			))}
			<button onClick={handleAddFields}>add</button>
		</div>
	);
}

export default App;