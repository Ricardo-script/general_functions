import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { Dimensions } from 'react-native';

// Função que calcula o tamanho de fonte responsivo
const windowWidth = Dimensions.get('window').width;
const calculateResponsiveFontSize = (size: number): number => {
    const baseWidth = 400;
    if (windowWidth > 500) return size;
    const ratio = size / baseWidth;
    return Math.round(windowWidth * ratio);
};

// Tema estático
const staticTheme = {
    fontFamily: {
        PoppinsBold: 'Poppins-Bold',
        // ... outras fontes
    },
    fontSize: {
        7: calculateResponsiveFontSize(7),
        // ... outros tamanhos de fontes
    },
    // Demais propriedades fixas do tema
};

// Componente de ThemeProvider customizado
const CustomThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [colors, setColors] = useState({
        containerBg: '#EEF0F9',
        inputBg: '#DDE3FF',
        // ... cores padrão iniciais
    });

    // Função para buscar cores do backend
    const fetchColorsFromBackend = async () => {
        try {
            const response = await fetch('URL_DO_BACKEND');
            const data = await response.json();
            setColors(data.colors); // Atualiza as cores com os dados recebidos
        } catch (error) {
            console.error('Erro ao buscar cores do backend', error);
        }
    };

    useEffect(() => {
        fetchColorsFromBackend();
    }, []);

    // Combina o tema estático com as cores dinâmicas
    const theme = {
        ...staticTheme,
        colors, // Sobrescreve ou adiciona as cores dinâmicas
    };

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
