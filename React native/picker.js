// intalar picker: expo install @react-native-picker/picker
// import {Picker} from '@react-native-picker/picker';

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-community/picker'; //esse não funciona com o expo
import {Picker} from '@react-native-picker/picker';

export default class App extends Component{
    
    state = {
        // escolaridade:''s
    }

    render(){
        return(
            <View>
                <Picker
					style={styles.container}
					selectedValue={this.state.escolaridade}
					onValueChange={
						(itemValue, ItemIndex) =>
						this.setState({ escolaridade: itemValue})
					}
                >
                   <Picker.Item label="Escolha o grau da instrução:" value=""/>
                   <Picker.Item label="Ensino funcadamental incompleto" value="Ensino funcadamental incompleto"/>
                   <Picker.Item label="Ensino médio incompleto" value="Ensino médio incompleto"/>
                   <Picker.Item label="Ensino médio incompleto" value="Ensino médio incompleto"/>
                   <Picker.Item label="Superior completo" value="Superior completo"/>
                   <Picker.Item label="Pós graduação" value="Pós graduação"/>
                   <Picker.Item label="Mestrado" value="Mestrado"/>
                   <Picker.Item label="Doutorado" value="Doutorado"/>
                   <Picker.Item label="Pos-doutorado" value="Pos-doutorado"/>
                   
                </Picker>

               
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop:100,
    },
});


// exemplo 02 - simples:-------------------------------------------------------------------------------------------------------

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker';
export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            posicao:0,
        }
    }
    
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.logo}>Menu de pizzas</Text>

                <Picker
                    selectedValue={this.state.posicao}
                    onValueChange={ (itemValue, itemIndex) => this.setState({posicao: itemValue})}
                    
                >
                    <Picker.Item key={1} value={1} label="Calabresa"/>
                    <Picker.Item key={2} value={2} label="Brigadeiro"/>
                    <Picker.Item key={3} value={3} label="Queijo"/>

                </Picker>


                <Text style={styles.pizzas}>Você escolheu: Pizza de Calabresa</Text>
                <Text style={styles.pizzas}>R$: 59,90</Text>
                
                <Text style={{fontSize:30}}>{this.state.posicao}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:35,
    },
    logo:{
        textAlign:'center',
        fontSize:28,
        fontWeight:'bold',
    },
    pizzas:{
        marginTop:25,
        fontSize:20,
        textAlign:'center',
    },
});

// ---------------------------------------------------------------------------------------------------------------------------
// Exemplo dinamico:----------------------------------------------------------------------------------------------------------

// intalar picker: expo install @react-native-picker/picker
// import {Picker} from '@react-native-picker/picker';


import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            posicao: 0,
            pizzas:[
                {key: 1, nome: 'Strognoff', valor: 35.90},
                {key: 2, nome: 'Calabresa', valor: 59.90},
                {key: 3, nome: 'Quatro queijos', valor: 37.40},
                {key: 4, nome: 'Brigadeiro', valor: 25.70},
                {key: 5, nome: 'Portuguesa', valor: 70.40},
            ]
        }
    }
    render(){
		// rendeerizando o Picker.Item dinamicamente:
        // v recebe o valor, nesse array poderia ser: key, nome, valor
		// k recebe o nº da key, que é o nº da array,
        let pizzasItem = this.state.pizzas.map( (v, k) => {
            return <Picker.Item key={k} value={k} label={v.nome}/>
        })
		
		//picker recebe 2 propriedades selectedValue que recebe as states e onValueChange recebe a função
        //dentro de picker <Text style={styles.pizzas}>Você escolheu : {this.state.pizzas[2].nome}</Text>
        // o Array 2 seria a 3ª array, mas pizza começa com 0 e [this.state.posicao] acaba sendo um nº no itemValue
        //ele inicia com posicão 0, então itemValue tbm será 0, qnd troca o picker ele passa pelo onValueChange e altera
        // o state posicao com o itemValue
        return(
            <View style={styles.container}>
                <Text style={styles.logo}>Menu Pizza</Text>

                <Picker 
                selectedValue={this.state.posicao} 
                onValueChange={ (itemValue, itemIndex) => this.setState({posicao:itemValue}) }
                >
                   {pizzasItem} //Picker.Item dinamico
                </Picker>

                <Text style={styles.pizzas}>Você escolheu : {this.state.pizzas[this.state.posicao].nome}</Text>
                <Text style={styles.pizzas}>R$: {this.state.pizzas[this.state.posicao].valor}</Text>
                <Text>posicao: {this.state.posicao}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: 40,
    },
    logo:{
        textAlign:'center',
        fontSize:28,
        fontWeight:'bold',
    },
    pizzas:{
        marginTop: 15,
        fontSize: 25,
        textAlign:'center',
    }
    
});