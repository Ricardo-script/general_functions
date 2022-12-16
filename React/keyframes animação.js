import styled, { keyframes } from "styled-components"

const animationName = keyframes`
  0% { color: transparent; }
  100% { color: radboats; }
`

const Div = styled.div`
  animation: ${animationName} 0.3s 0s both;
`

//--------------------------------------------------------------------------------------
import styled,{ keyframes } from 'styled-components';

const morph = keyframes`
    0% { border-radius: 5px ;}
    50% { border-radius: 50% ;}
    100% { border-radius: 5px ;}
`;


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.section`
    animation: ${morph} 1s linear;
`;
//--------------------------------------------------------------------------------------------

// com props----------------------------------------------------------------------------------

const showGraf = (percent) => keyframes`
    0%{
        width: 0;
    }
    100%{
        width: ${percent}
    }
`;

export const DataSets = styled.div`
    animation: ${props => showGraf(props.percent + '%')} .7s ease-in-out;
`;