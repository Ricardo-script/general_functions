import React from 'react';
import { View, Text, FlatList, StyleSheet, ListRenderItem } from 'react-native';

interface DataItem {
  id: string;
  nome: string;
  idade: number;
}

interface Props {
  data: DataItem[];
}

const DATA = [
  { id: '1', nome: 'João', idade: 25 },
  { id: '2', nome: 'Maria', idade: 30 },
  { id: '3', nome: 'José', idade: 35 },
  // Adicione mais dados conforme necessário
];

const App: React.FC<Props> = ({ data }) => {
  const renderItem: ListRenderItem<DataItem> = ({ item }) => (
    <View style={styles.row}>
      <Text>{item.id}</Text>
      <Text style={styles.cell}>{item.nome}</Text>
      <Text style={styles.cell}>{item.idade}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.header}>Id</Text>
        <Text style={styles.header}>Nome</Text>
        <Text style={styles.header}>Idade</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    marginLeft: 10,
    marginRight: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  cell: {
    fontSize: 16,
  },
});

export default App;