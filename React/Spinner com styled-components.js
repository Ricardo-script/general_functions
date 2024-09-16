import { SpinnerContainer, SpinnerDiv } from "./styles";

export const Spinner = (): JSX.Element => {
    return (
        <SpinnerContainer className="lds-spinner">
            {[...Array(12)].map((_, index) => (
                <SpinnerDiv key={index} />
            ))}
        </SpinnerContainer>
    );
}

// styles:

import styled, { keyframes } from 'styled-components';

export const SpinnerContainer = styled.div`
    color: official;
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
`;

const spin = keyframes`
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
`;

export const SpinnerDiv = styled.div`
    transform-origin: 40px 40px;
    animation: ${spin} 1.2s linear infinite;
    &:after {
        content: " ";
        display: block;
        position: absolute;
        top: 3px;
        left: 37px;
        width: 6px;
        height: 18px;
        border-radius: 20%;
        background: #979292;
    }

    &:nth-child(1) {
        transform: rotate(0deg);
        animation-delay: -1.1s;
    }

    &:nth-child(2) {
        transform: rotate(30deg);
        animation-delay: -1s;
    }

    &:nth-child(3) {
        transform: rotate(60deg);
        animation-delay: -0.9s;
    }

    &:nth-child(4) {
        transform: rotate(90deg);
        animation-delay: -0.8s;
    }

    &:nth-child(5) {
        transform: rotate(120deg);
        animation-delay: -0.7s;
    }

    &:nth-child(6) {
        transform: rotate(150deg);
        animation-delay: -0.6s;
    }

    &:nth-child(7) {
        transform: rotate(180deg);
        animation-delay: -0.5s;
    }

    &:nth-child(8) {
        transform: rotate(210deg);
        animation-delay: -0.4s;
    }

    &:nth-child(9) {
        transform: rotate(240deg);
        animation-delay: -0.3s;
    }

    &:nth-child(10) {
        transform: rotate(270deg);
        animation-delay: -0.2s;
    }

    &:nth-child(11) {
        transform: rotate(300deg);
        animation-delay: -0.1s;
    }

    &:nth-child(12) {
        transform: rotate(330deg);
        animation-delay: 0s;
    }
`;

// opção 2: ----------------------------------------------------------------------------------------

import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
	border: 2px solid rgba(255, 255, 255, 0.3);
	border-top: 2px solid white;
	border-radius: 50%;
	width: 16px;
	height: 16px;
	animation: ${rotate} 0.8s linear infinite;
	margin-right: 8px;
`;

