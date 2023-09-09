import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions, Animated } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const TabViewWithSlide: React.FC = () => {
  const scrollViewRef = useRef<ScrollView>(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleTabPress = (tabIndex: number) => {
    const offsetX = tabIndex * screenWidth;
    scrollViewRef.current?.scrollTo({ x: offsetX, animated: true });
  };

  const renderTab = (tabIndex: number, tabText: string) => {
    return (
      <TouchableOpacity
        key={tabIndex}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}
        onPress={() => handleTabPress(tabIndex)}
      >
        <Text>{tabText}</Text>
      </TouchableOpacity>
    );
  };

  scrollX.addListener(({ value }) => {
    contentOffsetX.current = value;
  });

  const contentOffsetX = useRef(0);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
      >
        <View style={{ width: screenWidth }}>
          <Text>Content of Tab 1</Text>
        </View>
        <View style={{ width: screenWidth }}>
          <Text>Content of Tab 2</Text>
        </View>
      </ScrollView>
      <View style={{ flexDirection: 'row' }}>
        {renderTab(0, 'Tab 1')}
        {renderTab(1, 'Tab 2')}
      </View>
      <Animated.View
        style={{
          position: 'absolute',
          bottom: 0,
          left: scrollX.interpolate({
            inputRange: [0, screenWidth],
            outputRange: [0, screenWidth / 2],
          }),
          width: screenWidth / 2,
          height: 2,
          backgroundColor: 'blue',
        }}
      />
    </View>
  );
};

export default TabViewWithSlide;