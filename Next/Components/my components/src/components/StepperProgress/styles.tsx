"use client";

import styled, { keyframes } from "styled-components";

type BarProps = {
    $bar: number;
    $left: number;
};

type BarProgressProps = {
    $progress: number;
    $left: number;
};

type AreaStepProps = {
    $totalStep: number;
};

type InactiveElementProps = {
    $inactive: boolean;
};

const showSteps = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`;

const openStepper = keyframes`
    0%{
        width: 0;
    }
    100%{
        width: 100%
    }
`;

const showTitle = keyframes`
    0%{
        opacity: 0
    }
    100%{
        opacity: 1;
    }
`;

export const Container = styled.div`
    user-select: none;
    opacity: 0;
    animation: ${showSteps} 1s both;
    animation-delay: 1s;
    width: 100%;
`;

export const StepperBar = styled.div`
    display: flex;
    position: relative;
    width: 100%;
`;

export const AreaStep = styled.div<AreaStepProps>`
    width: 150px;
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    animation: ${openStepper} 3s both;
    animation-delay: 1s;

    @media (max-width: 768px) {
        width: 100vw;
    }
`;

export const Number = styled.span<InactiveElementProps>`
    width: 30px;
    height: 30px;
    min-height: 30px;
    z-index: 2;
    border-radius: 50%;
    border: 3px solid ${(props) => (props.$inactive ? "#5bc2a3" : "#a1a1a1")};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 600;
    background: ${(props) => (props.$inactive ? "#fff" : "#a1a1a1")};
    color: ${(props) => (props.$inactive ? "#3b3a3a" : "#FFF")};
    transition: all 1s;
`;

export const Title = styled.span<InactiveElementProps>`
    font-size: 13px;
    font-weight: 500;
    color: ${(props) => (props.$inactive ? "#3b3a3a" : "#3b3a3a57")};
    text-align: center;
    transition: all 1s;
    opacity: 0;
    animation: ${showTitle} 1s both;
    animation-delay: 2.2s;
    width: 100%;
`;

export const Bar = styled.div<BarProps>`
    width: ${(props) => props.$bar}%;
    height: 10px;
    margin-left: ${(props) => props.$left}%;
    position: absolute;
    top: 11px;
    background: #a1a1a1;
    opacity: 0;
    animation: ${showSteps} 3s both;
    animation-delay: 1.5s;
`;

export const BarProgress = styled.div<BarProgressProps>`
    height: 10px;
    position: absolute;
    background: #5bc2a3;
    width: ${(props) => props.$progress}%;
    top: 11px;
    margin-left: ${(props) => props.$left}%;
    transition: 1s;
    z-index: 1;
`;
