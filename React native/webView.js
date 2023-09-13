//npx expo install react-native-webview

Exemplos:

// uso básico:

import * as React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <WebView
      style={styles.container}
      source={{ uri: 'https://expo.dev' }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});


// uso inline HTML: ----------------------------------------------------------------------------------------------------------------

import * as React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <WebView
      style={styles.container}
      originWhitelist={['*']}
      source={{ html: '<h1><center>Hello world</center></h1>' }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});


// Outro exemplo: ------------------------------------------------------------------------------------------------------------------

export default function App(){
	const [showWebView, setShowWebView] = useState(false);

	const handleShowWebView = () => {
		setShowWebView(true)
	}

	const handleCloseShowWebView = () => {
		setShowWebView(false)
	}
	
	return (
		<SafeAreaView style={{ flex: 1}}>
			<View style={{flex: 1}}>
				{ showWebView ? (
					<WebView 
						source={{ uri: 'https//nameurl.com.br/'}}
						style={{flex: 1}}
						onNavigationStateChange={navState => 
							navState.url !== 'https//nameurl.com.br/' && handleCloseShowWebView
						}
					/>
				) : (
					<Button title="Abrir página web" onPress={handleShowWebView}/>
				)}
			</View>
		</SafeAreaView>
	)

	
}

