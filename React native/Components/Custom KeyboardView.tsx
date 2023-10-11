import React, { useState, useEffect, ReactNode, useRef } from 'react';
import { ScrollView, Keyboard } from "react-native";

type PropsKeyBoardView = {
    children: ReactNode
    elevation?: number
}

function KeyboardView({ children, elevation = 50 }: PropsKeyBoardView): JSX.Element {

    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
    const scrollRef = useRef<ScrollView>(null)

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setIsKeyboardOpen(true);
                //scrollRef.current?.scrollToEnd({ animated: true })
                scrollRef.current?.scrollTo({ y: elevation, animated: true });
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setIsKeyboardOpen(false);
            }
        );

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    return (
        <ScrollView
            scrollEnabled
            contentContainerStyle={{
                flex: isKeyboardOpen ? 0 : 1,
                paddingBottom: isKeyboardOpen ? elevation : 0,
            }}
            ref={scrollRef}
        >{children}</ScrollView>
    );
}

export { KeyboardView }


// uso:


<KeyboardView elevation={120}>
 ...
</KeyboardView>