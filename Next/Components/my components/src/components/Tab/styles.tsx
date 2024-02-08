import styled, { keyframes } from "styled-components";

type ContainerProps = {
    $width: number;
};

type TabWrapProps = {
    $totalTabs: number;
    $activeTab: number;
};

type TabProps = {
    $active: boolean;
    $height: number;
};

export const Container = styled.div<ContainerProps>`
    width: ${(props) => (props.$width === 0 ? "100%" : props.$width + "px")};
    user-select: none;

    @media (max-width: 520px) {
        width: 100%;
    }
`;

export const TabWrap = styled.ul<TabWrapProps>`
    width: 100%;
    position: relative;
    display: flex;

    &::before {
        content: "";
        width: calc(100% / ${(props) => props.$totalTabs});
        height: 3px;
        background: #32d583;
        position: absolute;
        top: 0px;
        left: calc(
            100% / ${(props) => props.$totalTabs}*${(props) => props.$activeTab}
        );
        transition: 0.5s;
    }
`;

export const Title = styled.span<Omit<TabProps, "$height">>`
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 700;
    font-size: 0.5em;
    color: ${(props) => (props.$active ? "#32d583" : "#74777b")};
    transition: 0.7s;
`;

export const Tab = styled.li<TabProps>`
    width: 100%;
    height: ${(props) => (props.$height === 0 ? "53px" : props.$height + "px")};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
    border: 1px solid #282c2a19;
    border-bottom: ${(props) => (props.$active ? "0" : "1px solid #282c2a19")};
    background: ${(props) => (props.$active ? "#FFF" : "#e7e7e7")};
    transition: background 0.3s;
    cursor: pointer;

    svg {
        color: ${(props) => (props.$active ? "#32d583" : "#74777b")};
        transition: 0.3s;
    }

    &:not(:last-child) {
        border-right: none;
    }

    &:hover {
        ${Title} {
            color: #32d583;
            transition: 0.3s;
        }
        svg {
            color: #32d583;
            transition: 0.3s;
        }
    }
`;

export const ContentTab = styled.div``;
