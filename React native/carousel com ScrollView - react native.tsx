import React from 'react';
import { Image, ScrollView } from 'react-native'

const mockImages = [
    { logo: require('../../../../../../assets/images/awc.png') },
    { logo: require('../../../../../../assets/images/armalite.png') },
    { logo: require('../../../../../../assets/images/surgeon.png') },
    { logo: require('../../../../../../assets/images/armalite.png') },
    { logo: require('../../../../../../assets/images/awc.png') },
    { logo: require('../../../../../../assets/images/surgeon.png') }
]

export const Carousel = (): JSX.Element => {

    const scrollViewRef = React.useRef<ScrollView>(null);

    const scrollToStartOffset = () => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({
                x: 100,
                animated: false,
            });
        }
    }

    return (
        <ScrollView
            ref={scrollViewRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            onLayout={scrollToStartOffset}
        >
            {
                mockImages.map((img, index) => (
                    <Image key={index} source={img.logo} />
                ))
            }
        </ScrollView>
    );
}