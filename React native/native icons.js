/* intalar vector icons:
	npm install react-native-vector-icons
	
	****Com expo o ICONS já vem integrado nós nao precisamos instalar nenhuma biblioteca, podemos apenas importar os icones.
	
	documentação para ver :
https://docs.expo.io/guides/icons/#expovector-icons
E ai aqui toda biblioteca de icones que pode usar, todos os nomes dos icones para olhar:
https://icons.expo.fyi/
Exemplo:-----------------------------------------------------------------
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
export default function App() {
  return (
    <View style={styles.container}>
	<Ionicons name="md-checkmark-circle" size={32} color="green" />
    </View>
  );
}
-------------------------------------------------------------------------
*/

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign, FontAwesome, Feather } from '@expo/vector-icons';
 


export default function App(){
    return(
        <View style={styles.container}>
            <Text>Trabalhando com Icons</Text>
            <Ionicons name="md-checkmark-circle" size={35} color="green" />
            <AntDesign name="areachart" size={35} color="blue" />
            <FontAwesome name="home" size={35} color="#11118C" />
            <Feather name="gift" size={35} color="#7665FF" />

            <TouchableOpacity style={styles.btnYoutube}>
            <FontAwesome name="youtube" size={35} color="#FFF" />
                <Text style={styles.btnText}>Acessar canal</Text>
            </TouchableOpacity>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },

    btnYoutube:{
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
        padding:5,
        backgroundColor:'#FE2E2E',
        borderRadius:5
    },
    btnText:{
        paddingLeft:10,
        paddingRight:10,
        color:'#FFF'
    },
});