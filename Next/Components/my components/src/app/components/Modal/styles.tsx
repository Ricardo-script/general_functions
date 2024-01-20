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

    box-shadow: 2px 2px 5px 0px rgb(0 0 0 / 21%);

    @media(max-width: 720px){
        width: 85vw;
    }
`;

export const HeaderModal = styled.div`
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

export const AreaTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

export const GroupTitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const IconTitle = styled.div`
    width: 48px;
    height: 48px;
    border: 1px solid #E4E7EC;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.span`
    font-size: 18;
    font-weight: 600;
    color: #101828;
`;

export const Description = styled.span`
    font-size: 14px;
    color: #475467;
`;

export const Divider = styled.hr`
    width: 100%;
    border: 0;
    border-bottom: 1px solid #E4E7EC;
`;
