/*
    yarn add react-lottie
    yarn add @types/react-lottie
*/
import Lottie from 'react-lottie'
import dispatching from './dispatching.json'
import carrying from './carrying.json'

interface LottieAnimationProps {
    height: number;
    width: number;
}

export const LottieDispatching: React.FC<LottieAnimationProps> = ({ height, width }): JSX.Element => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: dispatching,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <div>
            <Lottie options={defaultOptions} height={height} width={width} />
        </div>
    );
};

export const LottieCarrying: React.FC<LottieAnimationProps> = ({ height, width }): JSX.Element => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: carrying,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <div>
            <Lottie options={defaultOptions} height={height} width={width} />
        </div>
    );
};

