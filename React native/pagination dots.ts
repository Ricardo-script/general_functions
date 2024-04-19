import React, { useState } from 'react';
import {
    View,
    ScrollView,
    Text,
    NativeSyntheticEvent,
    NativeScrollEvent,
    Dimensions,
} from 'react-native';
import styled from 'styled-components/native';

const DotsContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

interface DotProps {
    active: boolean;
}

const { width } = Dimensions.get('window');

const Dot = styled.View<DotProps>`
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: ${(props) => (props.active ? '#000' : '#ccc')};
    margin: 4px;
`;

export default function RegisterSchedule(): JSX.Element {
    const [currentPage, setCurrentPage] = useState(0);
    const data = [
        { title: 'Item 1', description: 'Descrição do item 1' },
        { title: 'Item 2', description: 'Descrição do item 2' },
    ];

    const handlePageChange = (event: NativeSyntheticEvent<NativeScrollEvent>): void => {
        const { nativeEvent } = event;
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if (slide !== currentPage) {
            setCurrentPage(slide);
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}
                onScroll={handlePageChange}>
                {data.map((item, index) => (
                    <View
                        key={index}
                        style={{
                            width,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderWidth: 1,
                            borderColor: 'red',
                        }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
                            {item.title}
                        </Text>
                        <Text style={{ fontSize: 16 }}>{item.description}</Text>
                    </View>
                ))}
            </ScrollView>
            <DotsContainer>
                {data.map((_, index) => (
                    <Dot key={index} active={index === currentPage} />
                ))}
            </DotsContainer>
        </View>
    );
}

//--------------------------------------------------------------------------------------------------------------------
//Exemplos Avançado:

 import { useState, useRef } from 'react';
import { ScrollView, NativeSyntheticEvent, NativeScrollEvent, Dimensions } from 'react-native';

import RegisterOne from './RegisterOne';
import RegisterTwo from './RegisterTwo';
import { Container, DotsContainer, Step, Dot } from './styles';

const { width } = Dimensions.get('window');

export default function RegisterSchedule(): JSX.Element {
    const [currentPage, setCurrentPage] = useState(0);
    const scrollViewRef = useRef<ScrollView>(null);

    const handlePageChange = (event: NativeSyntheticEvent<NativeScrollEvent>): void => {
        const { nativeEvent } = event;
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if (slide !== currentPage) {
            setCurrentPage(slide);
        }
    };

    const handleToNextPage = (): void => {
        setCurrentPage((prevPage) => prevPage + 1);
        const nextPage = currentPage + 1;
        scrollViewRef.current?.scrollTo({ x: nextPage * width, animated: true });
    };

    return (
        <Container>
            <ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}
                onScroll={handlePageChange}>
                <Step>
                    <RegisterOne nextStep={handleToNextPage} />
                </Step>
                <Step>
                    <RegisterTwo />
                </Step>
            </ScrollView>
            <DotsContainer>
                {Array(2)
                    .fill(0)
                    .map((_, index) => (
                        <Dot key={index} active={index === currentPage} />
                    ))}
            </DotsContainer>
        </Container>
    );
}

import { TitleScreen } from '@/components/TitleScreen';
import { Container } from '@/templates/Container';

export default function RegisterTwo(): JSX.Element {
    return (
        <Container>
            <TitleScreen>Registro 2/2</TitleScreen>
        </Container>
    );
}


import { ItemClass } from '../../templates/ItemPicker/ItemClass';
import { ItemStudent } from '../../templates/ItemPicker/ItemStudent';

import { Button } from '@/components/Forms';
import { TitleScreen } from '@/components/TitleScreen';
import { Picker } from '@/screens/newScreens/components/Forms/Picker';
import { Container } from '@/templates/Container';

type RegisterOneProps = {
    nextStep: () => void;
};

export default function RegisterOne({ nextStep }: RegisterOneProps): JSX.Element {
    return (
        <Container>
            <TitleScreen>Registro 1/2</TitleScreen>
            <Picker element={ItemStudent} height={40} onSelect={(item) => console.log(item)} />
            <Picker element={ItemClass} height={40} onSelect={(item) => console.log(item)} />
            <Button title="Continuar" onPress={nextStep} />
        </Container>
    );
}


