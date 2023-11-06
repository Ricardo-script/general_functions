contentModal: {
	...

	shadowColor: '#000',
	shadowOffset: {
		width: 0,
		height: 2,
	},
	shadowOpacity: 0.25,
	shadowRadius: 4,
	elevation: 5,
}


//com uso de styled-components:

import { Platform } from 'react-native';
import styled from 'styled-components/native';

const getShadowStyles = (): string => {
    if (Platform.OS === 'ios') {
        return `
        shadow-color: #000;
        shadow-offset: 0px 2px;
        shadow-opacity: 0.25;
        shadow-radius: 3.84px;
      `;
    } else if (Platform.OS === 'android') {
        return `
        elevation: 5;
      `;
    }

    return '';
};

export const Container = styled.View`
    width: 100%;
    height: 104px;
    background: ${props => props.background};
    border-radius: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    ${getShadowStyles()};
`;
