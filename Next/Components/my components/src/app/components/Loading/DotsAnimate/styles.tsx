import styled, { keyframes } from "styled-components";

const ballsAnimate = keyframes`
     from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0.1;
      transform: translateY(-7px);
    }
`;

export const Container = styled.div`
    .balls-loader {
        display: flex;
        justify-content: center;
    }
    .balls-loader > div {
        width: 7px;
        height: 7px;
        margin: 12px 2px;
        background: #718096;
        border-radius: 50%;
        animation: ${ballsAnimate} 0.6s infinite alternate;
    }

    .balls-loader > div:nth-child(2) {
        animation-delay: 0.2s;
    }
    .balls-loader > div:nth-child(3) {
        animation-delay: 0.4s;
    }
`;
