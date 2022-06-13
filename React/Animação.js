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