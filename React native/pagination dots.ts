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
