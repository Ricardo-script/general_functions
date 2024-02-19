import styled, { keyframes } from "styled-components";
import { ListTypes } from "..";

type ContainerToastProps = {
    $index: number;
    $fadeIn?: boolean;
};

type PercentProps = {
    $time?: number;
    $type: ListTypes;
};

type SelectColor = Record<ListTypes, string>;

const selectColor = (type: ListTypes) => {
    const listTypes: SelectColor = {
        success: "#32d583",
        error: "#FF5F57",
        info: "#7CD4FD",
        neutral: "#344054",
        alert: "#F57F3C",
    };

    return listTypes[type] || "success";
};

const fadeIn = keyframes`
    0% {
        right: -15vw;
        opacity: 0;
    }
    50%{
        right: 5vw;
        opacity: 0.5;
    }
    75%{
        right: 0;
        opacity: 1;
    }
    100% {
        right: 2vw;
        opacity: 1;
    }
`;

const fadeOut = keyframes`
    0% {
        right: 2vw;
        opacity: 1;
    }
    50%{
        right: 7vw;
        opacity: 1;
    }
    100% {
        right: -10vw;
        opacity: 0;
    }
`;

const percent = keyframes`
    from {
        width: 100%;
    }
    to {
        width: 0%;
    }
`;

export const Container = styled.div<ContainerToastProps>`
    width: 280px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    box-shadow: 2px 2px 7px 0px rgb(0 0 0 / 21%);
    border-radius: 4px;
    position: fixed;
    top: ${({ $index }) => `${30 + $index * 80}px`};
    transition: all 1s;
    right: 2vw;
    z-index: 2;
    animation: ${(props) => (props.$fadeIn ? fadeIn : fadeOut)} 0.3s both;
`;

export const AreaIcon = styled.div``;

export const Body = styled.div``;

export const Message = styled.span`
    color: #333135;
`;

export const AreaClose = styled.div``;

export const Progress = styled.div<PercentProps>`
    width: 100%;
    height: 5px;
    position: absolute;
    bottom: 0;
    background: ${(props) => selectColor(props.$type)};
    animation: ${percent} ${(props) => `${props.$time}s linear both`};
`;
