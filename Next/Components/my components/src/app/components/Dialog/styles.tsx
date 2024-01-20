'use client'

import styled, { keyframes } from 'styled-components'

const animationModal = keyframes`
    0%{
        transform: scale(0.2);
    }
    100%{
        transform: scale(1)
    }
`;

export const Container = styled.div`
    width: 500px;
    height: fit-content;
    background: #FFF;
    border-radius: 12px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    animation: ${animationModal} .3s both;
    transform: scale(0.5);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: 2;
    box-shadow: 2px 2px 5px 0px rgb(0 0 0 / 21%);

    @media(max-width: 720px){
        width: 85vw;
    }
`;

export const HeaderDialog = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const AreaIcon = styled.div`
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:active{
        position: relative;
        top: 1px;
    }
`;

export const BodyDialog = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    margin-bottom: 16px;
`;

export const Title = styled.span`
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    font-weight: 600;
    color: #101828;
`;

export const Message = styled.span`
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    color: #475467;
    text-align: center;
`;

export const AreaButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;