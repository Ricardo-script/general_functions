/*
  install:
  npx expo install react-native-reanimated
  npx expo install expo-camera
  npx expo install expo-face-detector


  no arquivo babel.config.js:

  module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin'],
  };
};


*/

import React, { useState, useEffect } from 'react';
import { Camera, CameraType, FaceDetectionResult } from 'expo-camera';
import { ImageSourcePropType, StyleSheet, View } from 'react-native';
import * as FaceDetector from 'expo-face-detector';
import Animated, { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';
import sorrindo from './src/assets/sorrindo.png'
import piscando from './src/assets/piscando.jpg'
import neutro from './src/assets/neutro.png'



export default function App() {
  const [faceDetected, setFaceDetected] = useState(false);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [emoji, setEmoji] = useState<ImageSourcePropType>(neutro)

  const faceValues = useSharedValue({
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  });

  function handleFacesDetected({ faces }: FaceDetectionResult) {
    const face = faces[0] as any;

    if (face) {
      const { size, origin } = face.bounds;

      faceValues.value = {
        width: size.width,
        height: size.height,
        x: origin.x,
        y: origin.y,
      };

      setFaceDetected(true);

      if (face.smilingProbability > 0.5) { // se a pessoa estiver sorrindo
        setEmoji(sorrindo)
      }
      else if (face.leftEyeOpenProbability > 0.5 && face.rightEyeOpenProbability < 0.5) { // se o olho esquerdo estiver fechado e o direito aberto
        setEmoji(piscando)
      }
      else {
        setEmoji(neutro)
      }


    } else {
      setFaceDetected(false);
    }
  }

  const animatedStyle = useAnimatedStyle(() => ({
    position: 'absolute',
    zIndex: 10,
    width: faceValues.value.width,
    height: faceValues.value.height,
    transform: [
      { translateX: faceValues.value.x },
      { translateY: faceValues.value.y },
    ],
    /*borderColor: 'blue',
    borderWidth: 10,*/
  }));

  useEffect(() => {
    requestPermission();
  }, []);

  if (!permission?.granted) {
    return <View style={styles.container} />; // Retorna algo mesmo se a permissão não for concedida
  }

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={CameraType.front} // Correção: era type={CameraType.front}
        ratio="16:9"
        onFacesDetected={handleFacesDetected}
        faceDetectorSettings={{
          mode: FaceDetector.FaceDetectorMode.fast,
          detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
          runClassifications: FaceDetector.FaceDetectorClassifications.all,
          minDetectionInterval: 100,
          tracking: true,
        }}
      />
      {faceDetected && <Animated.Image style={animatedStyle} source={emoji} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
});

/*
  Para importar imagens, criar tbm a tipagem delas
  crie uma pasta chamada @types e dentro dela um arquivo chamdado png.d.ts e adicione:
  declare module '*.png';
  declare module '*.jpg';

*/