import React, { useState, useRef } from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

const ToastContainer = styled(Animated.View)`
    position: absolute;
    bottom: 70px;
    left: 20px;
    right: 20px;
    padding: 10px 20px;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 8px;
    justify-content: center;
    align-items: center;
`;

const ToastText = styled(Text)`
    color: white;
`;

export default function ToastScreen(): JSX.Element {
    const [visible, setVisible] = useState(false);
    const translateY = useRef(new Animated.Value(0)).current;

    const showToast = () => {
        setVisible(true);
        Animated.timing(translateY, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start(() => {
            setTimeout(hideToast, 5000);
        });
    };

    const hideToast = () => {
        Animated.timing(translateY, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start(() => {
            setVisible(false);
        });
    };

    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <TouchableOpacity onPress={showToast}>
                <Text>Mostrar Toast</Text>
            </TouchableOpacity>

            {visible && (
                <ToastContainer
                    style={{
                        transform: [
                            {
                                translateY: translateY.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [200, 0],
                                }),
                            },
                        ],
                    }}
                >
                    <ToastText>Este é um Toast!</ToastText>
                </ToastContainer>
            )}
        </View>
    );
}


//-------------------------------------------------------------------------------------------------------------------------------------------------
// Com opção de arrastar para o lado e fechar:

import React, { useState, useRef } from "react";
import {
    Animated,
    Text,
    TouchableOpacity,
    View,
    PanResponder,
} from "react-native";
import styled from "styled-components/native";

const ToastContainer = styled(Animated.View)`
    position: absolute;
    bottom: 70px;
    left: 20px;
    right: 20px;
    padding: 10px 20px;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 8px;
    justify-content: center;
    align-items: center;
`;

const ToastText = styled(Text)`
    color: white;
`;

export default function ToastScreen(): JSX.Element {
    const [visible, setVisible] = useState(false);
    const translateY = useRef(new Animated.Value(0)).current;
    const pan = useRef(new Animated.ValueXY()).current;
    const timeoutRef = useRef<NodeJS.Timeout | null>(null); // Correção aqui

    const showToast = () => {
        setVisible(true);
        Animated.timing(translateY, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start(() => {
            if (!!timeoutRef.current) {
                clearTimeout(timeoutRef.current); // Cancela o temporizador anterior
            }
            timeoutRef.current = setTimeout(hideToast, 5000); // Define o novo temporizador
        });
    };

    const hideToast = () => {
        Animated.timing(translateY, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start(() => {
            setVisible(false);
            pan.setValue({ x: 0, y: 0 }); // Reseta a posição do ToastContainer
        });
    };

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
            useNativeDriver: false,
        }),
        onPanResponderRelease: (e, gesture) => {
            console.log(gesture.dx);
            if (gesture.dx > 100) {
                pan.setValue({ x: 390, y: 0 }); // quando for por arrastro a posição x ir 390 a direita
                hideToast();
            } else {
                Animated.spring(pan, {
                    toValue: { x: 0, y: 0 },
                    useNativeDriver: true,
                }).start();
            }
        },
    });

    const toastStyle = {
        transform: [
            {
                translateY: translateY.interpolate({
                    inputRange: [0, 1],
                    outputRange: [200, -10], //translateY está em 0, ou seja, quando o Toast está escondido, o valor de saída será 200
                }),
            },
            { translateX: pan.x },
        ],
    };

    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <TouchableOpacity onPress={showToast}>
                <Text>Mostrar Toast</Text>
            </TouchableOpacity>

            {visible && (
                <ToastContainer
                    style={toastStyle}
                    {...panResponder.panHandlers}
                >
                    <ToastText>Este é um Toast!</ToastText>
                </ToastContainer>
            )}
        </View>
    );
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

// Uso como um Provider:

import {
    useState,
    useRef,
    useImperativeHandle,
    useLayoutEffect,
    MutableRefObject,
} from "react";
import { Animated, Dimensions, PanResponder } from "react-native";

import { ToastContainer, ToastText } from "./styles";

export type ListTypes = "success" | "error" | "info" | "neutral" | "alert";

export type ToastProps = {
    visible: boolean;
    message: string;
    type?: ListTypes;
};

type ShowToast = Omit<ToastProps, "visible">;

type ToastRef = {
    show: (data: ShowToast) => void;
};

const { height } = Dimensions.get("window");

export const ToastProvider = (): JSX.Element | null => {
    const [dataToast, setDataToast] = useState<ToastProps>();
    const translateY = useRef(new Animated.Value(0)).current;
    const pan = useRef(new Animated.ValueXY()).current;
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const toastRef = useRef<ToastRef>({
        show: () => {},
    });

    const showToast = (data: ShowToast) => {
        setDataToast({
            visible: true,
            message: data.message,
            type: data.type,
        });

        Animated.timing(translateY, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start(() => {
            if (!!timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            timeoutRef.current = setTimeout(hideToast, 5000);
        });
    };

    const hideToast = () => {
        Animated.timing(translateY, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start(() => {
            setDataToast({
                visible: false,
                message: "",
                type: "success",
            });
            pan.setValue({ x: 0, y: 0 });
        });
    };

    useImperativeHandle(toastRef, () => {
        return {
            show: showToast,
        };
    });

    useLayoutEffect(() => {
        Toast.setToastRef(toastRef);
    }, [toastRef]);

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
            useNativeDriver: false,
        }),
        onPanResponderRelease: (e, gesture) => {
            if (gesture.dx > 100) {
                pan.setValue({ x: 390, y: 0 });
                hideToast();
            } else {
                Animated.spring(pan, {
                    toValue: { x: 0, y: 0 },
                    useNativeDriver: true,
                }).start();
            }
        },
    });

    const toastStyle = {
        transform: [
            {
                translateY: translateY.interpolate({
                    inputRange: [0, 1],
                    outputRange: [height, height * 0.85],
                }),
            },
            { translateX: pan.x },
        ],
    };

    if (!dataToast?.visible) {
        return null;
    }

    return (
        <ToastContainer style={toastStyle} {...panResponder.panHandlers}>
            <ToastText>{dataToast.message}</ToastText>
        </ToastContainer>
    );
};

/**
 *  @description
 *  Para funcionar insira o ```<ToastProvider/>``` junto aos providers de App.tsx
 *  como é criado com styled-components é obrigatório estar dentro de ThemeProvider theme={theme}
 *
 *  @example
 *
 *  <ThemeProvider theme={theme}>
 *     <ToastProvider />
 *     <Routes />
 *  </ThemeProvider>
 *
 *  @show
 *  Toast.show: mostra Toast
 *  @param show recebe message => { message: 'Enviando Toast' }
 *
 * @example
 *
 *  import { Toast } from "@/components/Toast";
 *
 *  Toast.show({ message: "Sua mensagem!", time: 5000 })
 */

export class Toast {
    static toastRef: MutableRefObject<ToastRef>;

    static setToastRef(ref: MutableRefObject<ToastRef>) {
        this.toastRef = ref;
    }

    static show(data: ShowToast) {
        this.toastRef?.current.show(data);
    }
}

//Styles:

import { Animated } from "react-native";

import styled from "styled-components/native";

export const ToastContainer = styled(Animated.View)`
    position: absolute;
    width: 70%;
    padding: 10px 20px;
    align-self: center;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 8px;
    justify-content: center;
    z-index: 10;
    align-items: center;
`;

export const ToastText = styled.Text`
    color: white;
`;


// Inserir em App.tsx:

import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { theme } from "./src/theme";
import { ThemeProvider } from "styled-components/native";
import { FontProvider } from "./src/providers/FontProvider";
import Routes from "./src/routes";
import { ToastProvider } from "./src/components/ToastProvider";

export default function App() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <FontProvider>
                <ThemeProvider theme={theme}>
                    <ToastProvider />
                    <Routes />
                </ThemeProvider>
            </FontProvider>
        </GestureHandlerRootView>
    );
}


// Uso:

import { View, TouchableOpacity, Text } from "react-native";
import { Toast } from "../../components/ToastProvider";

export default function ToastScreen(): JSX.Element {
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <TouchableOpacity
                onPress={() => Toast.show({ message: "Olá tudo bem?" })}
            >
                <Text>Open Toast</Text>
            </TouchableOpacity>
        </View>
    );
}

