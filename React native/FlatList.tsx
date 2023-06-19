import { useState } from 'react';
import { FlatList, StyleSheet, Text, View, StatusBar } from 'react-native';

export default function App() {

	const [feed, setFeed] = useState([
		{ id: 1, nome: 'Ricardo', idade: 35, email: 'rick@gmail.com' },
		{ id: 2, nome: 'Tamires', idade: 27, email: 'tamy@gmail.com' },
		{ id: 3, nome: 'Jullia', idade: 9, email: 'juju@gmail.com' }
	])

	return (
		<View style={styles.container}>
			<StatusBar
				barStyle="light-content"
				hidden={false}
				backgroundColor="#0066CC"
				translucent={false}
				networkActivityIndicatorVisible={true}
			/>
			<FlatList
				data={feed}
				renderItem={({ item }) => <Pessoa data={item} />}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
}

const Pessoa = ({ data }) => {
	return (
		<View>
			<Text>{data.nome}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

//------------------------------------------------------------------------------------------------------
//Typescript:

import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;