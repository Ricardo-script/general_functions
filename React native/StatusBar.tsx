import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";

export default function App() {
  return (
    <View style={styles.MainContainer}>
      <StatusBar
        barStyle = "light-content" //Define a cor do texto da barra de status.
        hidden = {false} //Se a barra de status deve ficar oculta ou não.
        backgroundColor = "#0066CC" //A cor de fundo da barra de status.
        translucent = {false} //Quando esta prop é definida como verdadeiro, o aplicativo desenha sob a barra de status. (Android)
        networkActivityIndicatorVisible = {true} //Se o indicador de atividade da rede deve ficar visível. (IOS)
      />
      <Text>Exemplo Barra de Status</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer :{
    justifyContent: 'center',
    alignItems:'center',
    flex:1,
  }
});