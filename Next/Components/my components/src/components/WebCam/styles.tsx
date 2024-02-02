"use client";

import styled, { keyframes } from "styled-components";

const animationModal = keyframes`
    0%{
        transform: scale(0.2);
    }
    100%{
        transform: scale(1)
    }
`;

interface WebcamProps {
    $circleSize: number;
}

export const Container = styled.div`
    width: 500px;
    height: fit-content;
    background: #fff;
    border-radius: 12px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    animation: ${animationModal} 0.3s both;
    transform: scale(0.5);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: 2;
    box-shadow: 2px 2px 5px 0px rgb(0 0 0 / 21%);

    @media (max-width: 720px) {
        width: 93vw;
        height: 95vh;
        padding: 10px;
        justify-content: space-between;
    }
`;

export const AreaVideo = styled.div`
    position: relative;
    overflow: hidden;
    height: 338px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;

    @media (max-width: 720px) {
        width: 100%;
        height: 100%;
    }

    .image {
        object-fit: contain;
        width: 100% !important;
        position: relative !important;
        height: unset !important;
    }
`;

export const Overlay = styled.div<WebcamProps>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${(props) => props.$circleSize}px;
    height: ${(props) => props.$circleSize}px;
    border-radius: 50%;
    box-shadow: 0px 0px 0px 9999px rgba(0, 0, 0, 0.5);

    @media (max-width: 400px) {
        width: 80vw;
        height: 35vh;
    }
`;

export const Video = styled.video`
    width: 100%;
    height: auto;
`;

export const BodyDialog = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    margin-bottom: 16px;
`;

export const Title = styled.span`
    font-family: "Inter", sans-serif;
    font-size: 18px;
    font-weight: 600;
    color: #101828;
`;

export const Description = styled.span`
    font-family: "Inter", sans-serif;
    font-size: 14px;
    color: #475467;
    text-align: center;
`;

export const AreaButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;
