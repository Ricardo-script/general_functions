import styled, { keyframes } from "styled-components";

const animationModal = keyframes`
    0%{
        transform: scale(0.2);
    }
    100%{
        transform: scale(1)
    }
`;

export const Container = styled.div`
    width: 350px;
    height: 300px;
    transform: scale(0.5);
    animation: ${animationModal} 0.3s both;
    background: #fff;
    border-radius: 12px;
    padding: 24px; //0 60px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    box-shadow: 2px 2px 7px 0px rgb(0 0 0 / 21%);
    z-index: 2;
`;

export const Message = styled.span`
    font-size: 16px;
    font-weight: 500;
    color: #718096;
    text-align: center;
`;
