import { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Camera, CameraType } from 'expo-camera';

export default function App() {

    const [permission, requestPermission] = Camera.useCameraPermissions();

    const [type, setType] = useState(CameraType.back); // back e front da camera
    const [photoUri, setPhotoUri] = useState<string | null>(null);
    const cameraRef = useRef<Camera>(null);

    useEffect(() => {
        requestPermission();
    }, []);

    // Flip camera
    const toggleCamera = () => {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    };

    //tira foto
    const takePicture = async () => {
        if (cameraRef.current) {
            const photo = await cameraRef.current.takePictureAsync({  //base64: takePictureAsync({ base64: true })
                quality: 1,                                          // alterar a qualidade da imagem
            });
            setPhotoUri(photo.uri);
            console.log('photo', photo)
        }
    };

    return (
        <View style={styles.container}>
            <Text>Camera!</Text>
            <Camera style={styles.camera} type={type} ref={cameraRef} ratio="16:9"/>
            <Button title='Flip camera' onPress={toggleCamera} />
            <Button title='Take Picture' onPress={takePicture} />
            {photoUri && <Image style={styles.preview} source={{ uri: photoUri }} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    camera: {
        height: height,
        width: "100%",
    },
    preview: {
        width: 350,
        height: 350,
        marginTop: 20,
    },
});

// editar imagem, modo retrato:

import * as React from "react";
import { Camera } from "expo-camera";
import { useWindowDimensions } from "react-native";

const CameraComponent = () => {
    const { width } = useWindowDimensions();
    const height = Math.round((width * 16) / 9);
    return (
        <Camera
            ratio="16:9"
            style={{
                height: height,
                width: "100%",
            }}
        ></Camera>
    );
};

export default CameraComponent;