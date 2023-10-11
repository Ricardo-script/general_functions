/*Para funcionar os scrolls que estejam dentro de outro scroll ou seja uma aninhada de scrolls
o 1º scroll o pai, deve ser scrollEnabled, os de dentro da ninhada devem receber a prop nestedScrollEnabled
*/

import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView scrollEnabled>
        <View style={styles.quadro}>
          <ScrollView nestedScrollEnabled>
            <Text style={styles.titulo}>QUADRO 1</Text>
            <View style={styles.item}>
              <Text>Item 1</Text>
            </View>
            <View style={styles.item}>
              <Text>Item 2</Text>
            </View>
            <View style={styles.item}>
              <Text>Item 3</Text>
            </View>
            <View style={styles.item}>
              <Text>Item 4</Text>
            </View>
            <View style={styles.item}>
              <Text>Item 5</Text>
            </View>
            <View style={styles.item}>
              <Text>Item 6</Text>
            </View>
            <View style={styles.item}>
              <Text>Item 7</Text>
            </View>
          </ScrollView>
        </View>
        </ScrollView>
    </View>
  )  
}