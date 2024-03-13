import { Text } from "react-native";
import { styles, SHEET_HEIGHT, SHEET_OVER_DRAG } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import Animated, {
    useSharedValue,
    withSpring,
    withTiming,
    runOnJS,
    useAnimatedStyle,
    SlideInDown,
    SlideOutDown,
} from "react-native-reanimated";

//GestureDetector na prop gesture eu escolho qual tipo de gesto eu quero trabalhar: ( de arrastar é o pan )
//useSharedValue criar uma variavel compartilhada com valores

type Props = {
    onClose: () => void;
};

export function Sheet({ onClose }: Props) {
    const offset = useSharedValue(0);

    function close() {
        offset.value = 0;
        onClose();
    }

    const pan = Gesture.Pan()

        .onChange((event) => {
            //console.warn(event);
            const offsetDelta = event.changeY + offset.value; //offsetDelta toda vez que houver um movimento na vertical (changeY) + incremento
            const clamp = Math.max(-SHEET_OVER_DRAG, offsetDelta); // clamp para criar o limite até onde posso arrastar

            offset.value = offsetDelta > 0 ? offsetDelta : withSpring(clamp); // withSpring é um efeito para não voltar seco para o 0, mas sim animado
        })

        .onFinalize(() => {
            if (offset.value < SHEET_HEIGHT / 3) {
                offset.value = withSpring(0);
            } else {
                offset.value = withTiming(SHEET_HEIGHT, {}, () => {
                    //withTiming diferente do withSpring ele faz animação de forma suave, para nao dar erro nao posso inserir apenas close, mas com runOnJS
                    runOnJS(close)();
                });
            }
        });

    const translateY = useAnimatedStyle(() => ({
        transform: [{ translateY: offset.value }],
    }));

    return (
        <GestureDetector gesture={pan}>
            <Animated.View
                style={[styles.container, translateY]}
                entering={SlideInDown.springify().damping(15)}
                exiting={SlideOutDown}
            >
                <MaterialCommunityIcons
                    name="drag-horizontal"
                    color="#999"
                    size={24}
                    style={styles.dragIcon}
                />
                <Text style={styles.title}>Opções</Text>
            </Animated.View>
        </GestureDetector>
    );
}

/*
    USO:

    import { useState } from "react";
    import { View, TouchableOpacity } from "react-native";
    import { Ionicons } from "@expo/vector-icons";
    import { styles } from "./styles";
    import { Sheet } from "../../components/sheet";

    export default function Home(): JSX.Element {
        const [isOpen, setIsOpen] = useState(false);

        const toggleSheet = () => {
            setIsOpen((prevState) => !prevState);
        };

        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.7}
                    onPress={toggleSheet}
                >
                    <Ionicons name="options" size={24} color="#FFF" />
                </TouchableOpacity>
                {isOpen && <Sheet onClose={toggleSheet} />}
            </View>
        );
    }


*/
