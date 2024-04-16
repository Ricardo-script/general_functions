import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions, Animated } from 'react-native';
import styled from 'styled-components/native';

const screenWidth = Dimensions.get('window').width;

const Container = styled.View`
    flex: 1;
`;

const TabScrollView = styled(ScrollView)`
    flex-grow: 0;
`;

const ContentScrollView = styled(ScrollView)`
    flex-grow: 1;
    flex-shrink: 1;
`;

const TabContainer = styled.View`
    flex-direction: row;
    justify-content: space-around; /* Para centralizar as tabs */
    background-color: white;
`;

const Tab = styled.TouchableOpacity``;

const TabText = styled.Text`
    padding: 10px;
`;

const Indicator = styled(Animated.View)`
    position: absolute;
    bottom: 0;
    height: 2px;
    background-color: blue;
`;

export const TabViewWithSlide: React.FC = () => {
    const scrollViewRef = useRef<ScrollView>(null);
    const scrollX = useRef(new Animated.Value(0)).current;

    const handleTabPress = (tabIndex: number): void => {
        const offsetX = tabIndex * screenWidth;
        scrollViewRef.current?.scrollTo({ x: offsetX, y: 0, animated: true });
    };

    const renderTab = (tabIndex: number, tabText: string): JSX.Element => {
        return (
            <Tab key={tabIndex} onPress={() => handleTabPress(tabIndex)}>
                <TabText>{tabText}</TabText>
            </Tab>
        );
    };

    return (
        <Container>
            <TabContainer>
                {renderTab(0, 'Tab 1')}
                {renderTab(1, 'Tab 2')}
                {renderTab(2, 'Tab 3')}
                <Indicator
                    style={{
                        width: screenWidth / 3,
                        left: scrollX.interpolate({
                            inputRange: [0, screenWidth * 2],
                            outputRange: [0, (screenWidth / 3) * 2],
                        }),
                    }}
                />
            </TabContainer>
            <ContentScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                    useNativeDriver: false,
                })}>
                <View style={{ width: screenWidth, height: 400, backgroundColor: '#b8aeae' }}>
                    <Text>Content of Tab 1</Text>
                </View>
                <View style={{ width: screenWidth, height: 400, backgroundColor: '#502222' }}>
                    <Text>Content of Tab 2</Text>
                </View>
                <View style={{ width: screenWidth, height: 400, backgroundColor: '#272985' }}>
                    <Text>Content of Tab 3</Text>
                </View>
            </ContentScrollView>
        </Container>
    );
};
