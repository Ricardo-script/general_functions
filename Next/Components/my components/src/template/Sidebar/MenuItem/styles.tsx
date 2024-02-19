import { styled } from "styled-components";

type SideBarStatus = {
    $toggle?: boolean;
};

type ActiveItemMenu = {
    $activeMenu?: boolean;
};

type AreaIconArrowProps = {
    $toggleSubMenu: boolean;
};

export const Container = styled.div``;

export const Item = styled.li`
    width: 100%;
    height: 40px;
    border-radius: 8px;
    transition: 0.3s;
    display: flex;
    align-items: center;
    cursor: pointer;

    @media (max-width: 768px) {
        height: 50px;
    }
`;

export const Title = styled.span<SideBarStatus>`
    display: ${(props) => (props.$toggle ? "block" : "none")};
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 120%;
    color: #9e9e9e;
    width: 182px;

    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

export const PopHover = styled.span`
    background: #2d2f39;
    width: 110px;
    padding: 10px 15px;
    border-radius: 5px;
    position: absolute;
    right: -120px;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 120%;
    color: #cecccc;
    display: none;

    &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: -18px;
        margin-top: -10px;
        border-width: 10px;
        border-style: solid;
        border-color: transparent #2d2f39 transparent transparent;
    }
`;

export const PopSubMenu = styled.div`
    width: auto;
    padding: 7px 7px;
    background: #2d2f39;
    border-radius: 5px;
    display: flex;
    gap: 5px;
    flex-direction: column;
    position: absolute;
    right: -137px;
    display: none;

    &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: -19px;
        margin-top: -10px;
        border-width: 10px;
        border-style: solid;
        border-color: transparent #2d2f39 transparent transparent;
    }
`;

export const HoverSubMenu = styled.span`
    width: 100%;
    padding: 10px 15px;
    border-radius: 8px;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 120%;
    color: #cecccc;

    &:hover {
        background: #4d505e;
        transition: 0.3s;
    }

    &:active {
        background: #65835f;
    }
`;

export const AreaItem = styled.div<ActiveItemMenu>`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 7px;
    border-radius: 8px;
    gap: 5px;
    background: ${(props) => (props.$activeMenu ? "#2D2F39" : "")};

    &:hover {
        background: #2d2f39;

        ${Title} {
            color: #fff;
        }

        ${PopHover} {
            display: block;

            @media (max-width: 720px) {
                display: none;
            }
        }

        ${PopSubMenu} {
            display: flex;

            @media (max-width: 720px) {
                display: none;
            }
        }
    }

    &:active {
        background: #65835f;
    }

    @media (max-width: 768px) {
        position: relative;
    }
`;

export const AreaIconItem = styled.div`
    width: 32px;
    min-width: 32px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const AreaIconArrow = styled(AreaIconItem)<AreaIconArrowProps>`
    rotate: ${(props) => (props.$toggleSubMenu ? "180deg" : 0)};
    transition: 0.2s;

    @media (max-width: 768px) {
        position: absolute;
        top: 13px;
        right: 5vw;
    }
`;

export const AreaTitle = styled.div`
    overflow: hidden;
`;
