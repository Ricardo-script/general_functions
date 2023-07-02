<Container>
	<AreaCapa>
		<Capa source={require('../../assets/capaLogin.png')} />
	</AreaCapa>
 <Container>
 
// styles:

import { styled } from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    background: #FFF;
    justify-content: center;
    align-items: center;
    padding: 16px;
`;

export const AreaCapa = styled.View`
    width: 100%;
    align-items: center;
`;

export const Capa = styled.Image`
    width: ${Dimensions.get('window').width * 0.8}px;
    height: ${Dimensions.get('window').width * 0.8}px;
`;