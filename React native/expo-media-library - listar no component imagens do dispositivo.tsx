import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import * as MediaLibrary from 'expo-media-library';

const GalleryComponent: React.FC = () => {
    const [imageURIs, setImageURIs] = useState<string[]>([]);

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        try {
            const { status } = await MediaLibrary.requestPermissionsAsync();

            if (status !== 'granted') {
                console.log('Permissão para acessar a biblioteca de mídia não concedida.');
                return;
            }

            const mediaAssets = await MediaLibrary.getAssetsAsync({ mediaType: 'photo' });

            const imageURIs = mediaAssets.assets.map((asset) => asset.uri);

            setImageURIs(imageURIs);
        } catch (error) {
            console.error('Erro ao obter as imagens:', error);
        }
    };

    return (
        <View style={styles.container}>
            {imageURIs.map((imageUri, index) => (
                <Image key={index} source={{ uri: imageUri }} style={styles.image} />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: 5,
        backgroundColor: '#f2f2f2',
    },
    image: {
        width: 100,
        height: 100,
        margin: 5,
        borderRadius: 5,
    },
});
