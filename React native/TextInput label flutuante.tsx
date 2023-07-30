import { useState } from 'react';
import { useRef } from 'react';
import { View, TextInput, TextInputProps, StyleSheet } from 'react-native';
import { styles } from './styles';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import colors from '../../../assets/styles/colors';

type InputTypes = {
    placeholder?: string;
    icon?: React.ElementType

} & TextInputProps

export const Input = ({ placeholder, icon: Icon, editable = true, ...rest }: InputTypes): JSX.Element => {

    const inputRef = useRef<string>(''); // Usando uma referência useRef para acessar o valor do TextInput

    const [isFocused, setIsFocused] = useState(false);

    const labelPosition = useAnimatedStyle(() => {
        const top = withTiming(!isFocused && inputRef.current === '' ? 18 : 0);
        const fontSize = withTiming(!isFocused && inputRef.current === '' ? 20 : 14);
        return {
            top,
            fontSize,
        };
    });

    const handleChangeText = (text: string) => {
        inputRef.current = text; // Atualizando o valor da referência quando o TextInput muda
    };


    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    return (
        <View style={[styles.areaInput, !editable && styles.areaInputDisabled]}>
            {
                Icon
                    ? <View>
                        <Icon color={colors.neutrals.gray_30} size='19px' />
                    </View>
                    : <></>
            }
            <Animated.Text style={[styles.label, labelPosition]}>{placeholder}</Animated.Text>
            <TextInput
                placeholderTextColor={colors.neutrals.gray_30}
                style={styles.input}
                editable={editable}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChangeText={handleChangeText}
                blurOnSubmit
                {...rest}
            />
        </View>
    );
};

import { StyleSheet } from "react-native";
import colors from "../../../assets/styles/colors";

export const styles = StyleSheet.create({
    areaInput: {
        width: '95%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 18,
        paddingLeft: 19,
        borderRadius: 8,
        backgroundColor: colors.neutrals.blue_10,
        paddingRight: 17
    },
    areaInputDisabled: {
        backgroundColor: colors.neutrals.blue_50,
    },
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        flex: 1,
    },
    input: {
        paddingLeft: 8,
        color: colors.neutrals.gray_30,
        flex: 1,
    },
    areaIcon: {
        width: 28,
        height: 28,
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        position: 'absolute',
        left: 0,
        fontSize: 20,
        color: '#aaa',
    },
});



// Uso:

<View style={styles.form}>
     <Input placeholder='CPF' editable={true} />
     <Input placeholder='E-mail' editable={true} />
     <Input placeholder='Número de Telefone' editable={true} />
</View> 