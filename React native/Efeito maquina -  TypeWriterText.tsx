import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';

export default function TypeWriterText({ text }: { text: string }): JSX.Element {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        if (displayText !== '') {
            setDisplayText('');
        }
        const textArray = text.split('');
        let currentIndex = 0;

        const interval = setInterval(() => {
            if (currentIndex < textArray.length) {
                setDisplayText((prevText) => prevText + textArray[currentIndex]);
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 25);

        return () => clearInterval(interval);
    }, [text]);

    return (
        <Text
            style={{
                color: '#5f4949',
                textAlign: 'justify',
            }}>
            {displayText}
        </Text>
    );
}


//--- Uso: -----------------------------------------------------------------------------------------------------------------------------------

import { View } from 'react-native';

import TypeWriterText from './TypeWriterText';

import { Container } from '@/templates/Container';

export default function Temp(): JSX.Element {
    const text =
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos perspiciatis quam id rem veritatis architecto sunt';

    return (
        <Container>
            <View style={{ flex: 1, marginTop: 950, marginBottom: 300 }}>
                <TypeWriterText text={text} />
            </View>
        </Container>
    );
}

//--------------------------------------------------------------------------------------------------------------------------------------------
