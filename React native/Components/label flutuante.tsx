import { useEffect, useRef } from 'react'
import { Text, TextInput, TextInputProps, View, Animated } from 'react-native'
import { styles } from './styles';
import { Easing } from 'react-native-reanimated';

type InputProps = {
    label: string
} & TextInputProps

export const Input = ({ label, editable = true, onChangeText = () => null, ...rest }: InputProps) => {

    const valueInput = useRef(rest.defaultValue)
    const transY = useRef(new Animated.Value(0));

    const transX = transY.current.interpolate({
        inputRange: [-40, 0],
        outputRange: [-20, 0],
        extrapolate: 'clamp'
    });

    const handleFocus = () => {
        Animated.timing(transY.current, {
            toValue: -20,
            duration: 300,
            useNativeDriver: true,
            easing: Easing.ease
        }).start();
    }

    const handleBlur = () => {
        if (valueInput.current) return
        Animated.timing(transY.current, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
            easing: Easing.ease
        }).start();
    }

    const handleOnChangeText = (value: string) => {
        onChangeText(value)
        valueInput.current = value
    }

    useEffect(() => {
        if (rest.defaultValue) {
            handleFocus()
        }
    }, [])


    return (
        <View style={[styles.container, !editable && styles.areaInputDisabled]}>
            <Animated.View style={[styles.labelContainer, {
                transform: [
                    { translateY: transY.current },
                    { translateX: transX }
                ]
            }]}>
                <Text style={styles.label}>{label}</Text>
            </Animated.View>
            <TextInput style={styles.input} onFocus={handleFocus} onBlur={handleBlur} {...rest} onChangeText={handleOnChangeText} />
        </View>
    );
}

//styles

import { StyleSheet } from "react-native";
import colors from "../../../assets/styles/colors";

export const styles = StyleSheet.create({
    container: {
        width: '95%',
        borderRadius: 8,
        backgroundColor: colors.neutrals.blue_10,
        justifyContent: 'center'
    },
    areaInputDisabled: {
        backgroundColor: colors.neutrals.blue_50,
    },
    input: {
        padding: 20,
        color: colors.neutrals.white,
    },
    labelContainer: {
        position: 'absolute',
        padding: 20
    },
    label: {
        color: colors.neutrals.gray_30,
    }
});

//chamada do componente ----------------------------
const mockData = {
    cpf: '657.895.632-07',
    email: 'joao.lucas@gmail.com',
    numero: '+55 (11) 9-87459-8962'
}

<Input label='CPF' defaultValue={mockData.cpf} />
<Input label='E-mail' defaultValue={mockData.email} />

//=====================================================================================================================

// exemplo com icone: -------------------------------------------------------------------------------------------------

import { useEffect, useRef, ElementType } from 'react'
import { Text, TextInput, TextInputProps, View, Animated } from 'react-native'
import { styles } from './styles';
import { Easing } from 'react-native-reanimated';
import colors from '../../../assets/styles/colors';

type InputProps = {
    label: string,
    icon?: ElementType
} & TextInputProps

export const Input = ({
    label,
    editable = true,
    onChangeText = () => null,
    icon: Icon,
    ...rest }: InputProps
) => {

    const valueInput = useRef(rest.defaultValue)
    const transY = useRef(new Animated.Value(0));

    const labelRef = useRef<Text>(null);
    const fontSize = useRef(new Animated.Value(20)); // Inicia com o tamanho de fonte padrão (20)
    const labelPosition = useRef(new Animated.Value(0))

    const transX = transY.current.interpolate({
        inputRange: [-40, 0],
        outputRange: [-20, 0],
        extrapolate: 'clamp'
    });

    const handleFocus = () => {
        Animated.parallel([ // Executa duas animações simultaneamente
            Animated.timing(transY.current, {
                toValue: -20,
                duration: 300,
                useNativeDriver: true,
                easing: Easing.ease
            }),
            Animated.timing(fontSize.current, {
                toValue: 10, // Define o tamanho da fonte para 10
                duration: 300,
                useNativeDriver: false, // Não pode usar o native driver para fonte
                easing: Easing.ease
            }),
            Animated.timing(labelPosition.current, {
                toValue: 0,
                duration: 300,
                useNativeDriver: false,
                easing: Easing.ease
            })
        ]).start();
    }

    const handleBlur = () => {
        if (valueInput.current) return
        Animated.parallel([
            Animated.timing(transY.current, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
                easing: Easing.ease
            }),
            Animated.timing(fontSize.current, {
                toValue: 14, // Define o tamanho da fonte para 10
                duration: 300,
                useNativeDriver: false, // Não pode usar o native driver para fonte
                easing: Easing.ease
            }),
            Animated.timing(labelPosition.current, {
                toValue: 18,
                duration: 300,
                useNativeDriver: false,
                easing: Easing.ease
            })
        ]).start();

    }

    const handleOnChangeText = (value: string) => {
        onChangeText(value)
        valueInput.current = value
    }

    useEffect(() => {
        if (rest.defaultValue) {
            handleFocus()
        }
    }, [])


    return (
        <View style={[styles.container, !editable && styles.areaInputDisabled]}>
            {
                Icon
                    ? <View style={styles.icon}>
                        <Icon color={colors.neutrals.gray_30} size='19px' />
                    </View>
                    : <></>
            }
            <Animated.View style={[styles.labelContainer, {
                transform: [
                    { translateY: transY.current },
                    { translateX: transX }
                ]
            }]}>
                <Animated.Text ref={labelRef} style={[styles.label, { fontSize: fontSize.current, paddingLeft: Icon ? labelPosition.current : 0 }]}>
                    {label}
                </Animated.Text>
            </Animated.View>
            <TextInput style={[styles.input, { marginLeft: Icon ? 25 : 0 }]} onFocus={handleFocus} onBlur={handleBlur} {...rest} onChangeText={handleOnChangeText} />
        </View>
    );
}


