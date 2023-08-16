import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import * as FileSystem from 'expo-file-system';

interface SignatureCanvasProps {
  width: number;
  height: number;
}

const SignatureCanvas: React.FC<SignatureCanvasProps> = ({ width, height }) => {
  const [path, setPath] = useState('');
  const [drawing, setDrawing] = useState(false);
  const [prevX, setPrevX] = useState(0);
  const [prevY, setPrevY] = useState(0);

  const svgRef = useRef<Svg | null>(null);

  const handleTouchStart = (x: number, y: number) => {
    setDrawing(true);
    setPrevX(x);
    setPrevY(y);
  };

  const handleTouchMove = (x: number, y: number) => {
    if (!drawing) return;

    const newPathSegment = `M ${prevX} ${prevY} L ${x} ${y}`;
    setPath(prevPath => `${prevPath} ${newPathSegment}`);
    setPrevX(x);
    setPrevY(y);
  };

  const handleTouchEnd = () => {
    setDrawing(false);
  };

  const handleClear = () => {
    setPath('');
  };

  const handleSave = async () => {
    if (!svgRef.current) return;

    try {
      // Gere uma string SVG a partir do componente SVG
      const svgData = `<svg width="${300}" height="${300}" xmlns="http://www.w3.org/2000/svg">${path}</svg>`;

      // Crie um caminho de arquivo temporário para o SVG
      const svgFilePath = `${FileSystem.cacheDirectory}signature.svg`;

      // Escreva os dados SVG no arquivo
      await FileSystem.writeAsStringAsync(svgFilePath, svgData, {
        encoding: FileSystem.EncodingType.UTF8,
      });

      // Converta o SVG em uma imagem PNG usando o conversor de SVG do Expo
      const imageBase64 = await FileSystem.readAsStringAsync(svgFilePath);
      const imageUri = `data:image/png;base64,${imageBase64}`;

      // Agora você tem o URI da imagem capturada
      console.log(imageUri);

      // Limpeza: Exclua o arquivo SVG temporário
      await FileSystem.deleteAsync(svgFilePath);
    } catch (error) {
      console.error('Erro ao salvar assinatura:', error);
    }
  };

  return (
    <View style={{ alignItems: 'center' }}>
      <Svg width={400} height={800} onTouchStart={e => handleTouchStart(e.nativeEvent.locationX, e.nativeEvent.locationY)} onTouchMove={e => handleTouchMove(e.nativeEvent.locationX, e.nativeEvent.locationY)} onTouchEnd={handleTouchEnd} ref={svgRef}>
        <Path d={path} stroke="black" strokeWidth={2} fill="none" />
      </Svg>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleClear} style={styles.button}>
          <Text>Limpar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSave} style={styles.button}>
          <Text>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    marginRight: 10,
    padding: 10,
    backgroundColor: 'lightgray',
    borderRadius: 5,
  },
});

export default SignatureCanvas;