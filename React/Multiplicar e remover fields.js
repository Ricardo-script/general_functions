/* 
	Exemplo simples:
	
	*****obs: Não funciona corretamente caso o input e select não possuirem o value

*/

import { useState } from "react";

export default function App(){

	const [list, setList] = useState([
		{ firstInput: '', secondInput: '' }
	]);

	const add = () => {
		const values = [...list];
		values.push({ firstInput: '', secondInput: '' });
		setList(values);
	}

	const handleChange = (e,index) => {
		const values = [...list];

		if(e.target.name === 'firstInput'){
			values[index].firstInput = e.target.value;
		}else{
			values[index].secondInput = e.target.value;
		}

		setList(values);
	}

	const remove = (index) => {
		const values = [...list];
		values.splice(index,1);
		setList(values);
	}

	return(
		<div>
			{list.map((item,index) => (
				<div key={index} style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '300px', border: '1px solid grey', padding: '25px'}}>
					<input type="text" name='firstInput' value={item.firstInput} onChange={(e) => handleChange(e,index)}/>
					<input type="text" name='secondInput' value={item.secondInput} onChange={(e) => handleChange(e,index)} />
					<button onClick={() => remove(index)}>Remove</button>
				</div>
			))}
			<button onClick={add}>Add</button>
		</div>		
	);
}


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

import React, { useState, Fragment } from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  const [inputFields, setInputFields] = useState([
    { firstName: '', lastName: '' }
  ]);


/*
	handleAddFields / handleRemoveFields adição e remoção de campos
*/
  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ firstName: '', lastName: '' });
    setInputFields(values);
  };

  const handleRemoveFields = index => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };



/* 
	verificação simples para o campo de entrada com base no name atributo desse campo. Em seguida, fornecemos o valor para o índice fornecido. O índice é derivado da map
*/
  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    if (event.target.name === "firstName") {
      values[index].firstName = event.target.value;
    } else {
      values[index].lastName = event.target.value;
    }

    setInputFields(values);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("inputFields", inputFields);
  };

  return (
    <>
      <h1>Dynamic Form Fields in React</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          {inputFields.map((inputField, index) => (
            <Fragment key={`${inputField}~${index}`}> 	
              <div className="form-group col-sm-6">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName" {/*atribuir name para fazer verificação em handleInputChange */}
                  value={inputField.firstName} //Atribuir value para funcionar corretamente a exclusão
					onChange={event => handleInputChange(index, event)}
                />
              </div>
              <div className="form-group col-sm-4">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text" 
                  className="form-control" 
                  id="lastName"
                  name="lastName"
                  value={inputField.lastName} //Atribuir value para funcionar corretamente a exclusão
                  onChange={event => handleInputChange(index, event)} //Atualize os campos de entrada para incluir um manipulador de alterações para atender à ação de entrada do usuário
                />
              </div>
              <div className="form-group col-sm-2">
                <button
                  className="btn btn-link"
                  type="button"
                  onClick={() => handleRemoveFields(index)}
                >
                  -
                </button>
                <button
                  className="btn btn-link"
                  type="button"
                  onClick={() => handleAddFields()} 
                >
                  +
                </button>
              </div>
            </Fragment>
          ))}
        </div>
        <div className="submit-button">
          <button
            className="btn btn-primary mr-2"
            type="submit"
            onSubmit={handleSubmit}
          >
            Save
          </button>
        </div>
        <br/>
        <pre>
          {JSON.stringify(inputFields, null, 2)}
        </pre>
      </form>
    </>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


//fonte: https://www.codeisbae.com/dynamic-form-fields-in-react/


//No caso de usar um select deve-se iserir o value no select e no option, select recebendo o value declarado no map com o state dos campos criados inputFields e o option com o valor de seu map com o seu state que será inserido em tela
/* 

	const [inputFields, setInputFields] = useState([
    { rota: nameRoute, id_cruzamento: '', grupo: '' }
  ]);  

 {inputFields.map((inputField, index) => {
                  return ( ...
	<select name="id_cruzamento"
		value={inputField.id_cruzamento} onChange={event => handleInputChange(index, event)} 
	>
		<option value="">Selecione um Id...</option>
		{dataControlers.map((items) => {
		  return(
			<option key={items.id_cruzamento} value={items.id_cruzamento}>
				{items.id_cruzamento}
			</option>
		  );
		})}
	</select>
*/

/* exemplo de handleInputChange com varios inputs:
  const handleRemoveCamera = (index) => { // add função futuramente
        const values = [...areaCamera];
        values.splice(index,1);
        setAreaCamera(values);
    }

    const handleInputChange = (index, event) => {
        const values = [...inputFields];
        if(event.target.name === 'descricao'){
            values[index].descricao = event.target.value;
        }
        if(event.target.name === 'modelo'){
            values[index].modelo = event.target.value;
        }
        if(event.target.name === 'fabricante'){
            values[index].fabricante = event.target.value;
        }
        if(event.target.name === 'nome'){
            values[index].nome = event.target.value;
        }
        if(event.target.name === 'ip'){
            values[index].ip = event.target.value;
        }
        if(event.target.name === 'ip'){
            values[index].ip = event.target.value;
        }
        if(event.target.name === 'usuario'){
            values[index].usuario = event.target.value;
        }
        if(event.target.name === 'senha'){
            values[index].senha = event.target.value;
        }
        if(event.target.name === 'canCaptura'){
            values[index].canCaptura = event.target.value;
        }
        setInputFields(values);
    }
