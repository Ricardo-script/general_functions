import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const calculateResponsiveFontSize = (size: number): number => {
    const baseWidth = 400;

    if (windowWidth > 500) {
        return size;
    }
    const ratio = size / baseWidth;
    const newSize = windowWidth * ratio;
    return Math.round(newSize);
};

export const theme = {
    colors: {
        containerBg: '#EEF0F9',
        inputBg: '#DDE3FF',
        textInput: '#64748B',
        iconInput: '#2E3B84',
        blueDark: '#151E4F',
        blueAccent: '#383dbf',
        blueHeader: '#111630',
        blueButton: '#323C6D',
        blueRing: '#3170FA',
        blueBorder: '#717FB9',
        blueMyBubble: '#5B669D',
        blueOtherBubble: '#EDEFF9',
        textHeader: '#DFE5EF',
        iconBg: '#767778',
        titleColor: '#434F62',
        textBlack: '#161C2B',
        textSilver: '#6F6F79',
        textGray: '#4B5563',
        textDarkGray: '#4C4C56',
        textLightGrey: '#BFBFCD',
        badgeBg: '#F56F45',
        green: '#00CD52',
        red: '#FA4E4E',
        orange: '#FFA639',
    },
    fontFamily: {
        PoppinsBold: 'Poppins-Bold',
        PoppinsLight: 'Poppins-Light',
        PoppinsMedium: 'Poppins-Medium',
        PoppinsRegular: 'Poppins-Regular',
        PoppinsSemibold: 'Poppins-SemiBold',
        InterBold: 'Inter-Bold',
        InterLight: 'Inter-Light',
        InterMedium: 'Inter-Medium',
        InterRegular: 'Inter-Regular',
        PacificoRegular: 'Pacifico-Regular',
    },
    fontSize: {
        7: calculateResponsiveFontSize(7),
        8: calculateResponsiveFontSize(8),
        9: calculateResponsiveFontSize(9),
        10: calculateResponsiveFontSize(10),
        11: calculateResponsiveFontSize(11),
        12: calculateResponsiveFontSize(12),
        13: calculateResponsiveFontSize(13),
        14: calculateResponsiveFontSize(14),
        15: calculateResponsiveFontSize(15),
        16: calculateResponsiveFontSize(16),
        17: calculateResponsiveFontSize(17),
        18: calculateResponsiveFontSize(18),
        19: calculateResponsiveFontSize(19),
        22: calculateResponsiveFontSize(22),
        25: calculateResponsiveFontSize(25),
        30: calculateResponsiveFontSize(30),
        50: calculateResponsiveFontSize(50),
    },
};
