import React, { useState, useEffect } from 'react';
import { View, Text, Image, Animated, Easing } from 'react-native';

const SkeletonEffect: React.FC = () => {
    const opacityValue = useState(new Animated.Value(0))[0];

    useEffect(() => {
        const startAnimation = () => {
            Animated.loop(
                Animated.sequence([
                    Animated.timing(opacityValue, {
                        toValue: 1,
                        duration: 1000,
                        easing: Easing.ease,
                        useNativeDriver: true,
                    }),
                    Animated.timing(opacityValue, {
                        toValue: 0.5,
                        duration: 1000,
                        easing: Easing.ease,
                        useNativeDriver: true,
                    }),
                ]),
            ).start();
        };

        startAnimation();
        return () => {
            opacityValue.stopAnimation();
        };
    }, [opacityValue]);

    return (
        <View>
            {Array(7).fill(0).map(_ => (
                <Animated.View style={{ opacity: opacityValue, flexDirection: 'row', justifyContent: 'center', paddingTop: 15, gap: 10 }}>
                    <View
                        style={{
                            width: 60,
                            height: 60,
                            backgroundColor: '#e1e1e1',
                            marginBottom: 10,
                            borderRadius: 40,
                        }}
                    />
                    <View>
                        <View
                            style={{
                                width: 300,
                                height: 12,
                                backgroundColor: '#e1e1e1',
                                marginBottom: 10,
                            }}
                        />
                        <View
                            style={{
                                width: 300,
                                height: 12,
                                backgroundColor: '#e1e1e1',
                                marginBottom: 10,
                            }}
                        />
                        <View
                            style={{
                                width: 300,
                                height: 12,
                                backgroundColor: '#e1e1e1',
                                marginBottom: 10,
                            }}
                        />
                    </View>
                </Animated.View>
            ))}
        </View>
    );
};

export default SkeletonEffect;