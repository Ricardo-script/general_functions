/*
	Instalação:
	yarn add @gorhom/bottom-sheet@^4
	expo install react-native-reanimated react-native-gesture-handler
	
	obs. inserir no babel.config: plugins: ['react-native-reanimated/plugin'],
*/

import { useState, useRef } from "react";
import BottomSheet from '@gorhom/bottom-sheet';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

const Home = () => { // precisa inserir o export default no final para usar o gestureHandlerRootHOC

    const BottomSheetRef = useRef<BottomSheet>(null);
	
	return(														      					
		<Button title='mostrar' onPress={() => { bottomSheetRef.current?.expand() }} /> // responsavel para expandir o BottomSheet se clicado
		<BottomSheet ref={bottomSheetRef} index={1} snapPoints={[20, '60%']}>// snapPoints: recebe o tamanho inicial e final index: 1 aberto e 0 fechado 
			<View>
				<Text>Teste</Text>
			</View>
        </BottomSheet>
	);
}

export default gestureHandlerRootHOC(Home);