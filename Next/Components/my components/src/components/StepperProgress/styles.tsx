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

const openStepper = keyframes<AreaStepProps>`
    0%{
        width: 0;
    }
    100%{
        width: ${(props) =>
            typeof window !== "undefined"
                ? (window.innerWidth - 30) / props.$totalStep + "px"
                : "100%"}; 
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
`;

export const StepperBar = styled.div`
    display: flex;
    position: relative;
    width: fit-content;
`;

export const AreaStep = styled.div<AreaStepProps>`
    width: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    animation: ${openStepper} 1s both;
    animation-delay: 1s;

    @media (max-width: 768px) {
        //width: ${(props) =>
            (window.innerWidth - 30) / props.$totalStep + "px"};
        width: ${(props) =>
            typeof window !== "undefined"
                ? (window.innerWidth - 30) / props.$totalStep + "px"
                : "100%"};
    }
`;

export const Number = styled.span<InactiveElementProps>`
    width: 30px;
    height: 30px;
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
    animation-delay: 2s;
`;

export const Bar = styled.div<BarProps>`
    height: 10px;
    position: absolute;
    background: #a1a1a1;
    width: ${(props) => props.$bar}%;
    top: 11px;
    margin-left: ${(props) => props.$left}%;
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
