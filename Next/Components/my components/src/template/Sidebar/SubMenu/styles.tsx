import styled from "styled-components";

type SubMenuProps = {
    $toggleMenu: boolean;
    $toggleSubMenu: boolean;
};

type TitleProps = {
    $activeMenu: boolean;
};

export const AreaSubMenu = styled.div<SubMenuProps>`
    width: 100%;
    max-height: ${(props) =>
        props.$toggleMenu === false ? 0 : props.$toggleSubMenu ? "500px" : 0};
    display: flex;
    align-items: center;
    gap: 5px;
    flex-direction: column;
    align-items: flex-start;
    overflow: hidden;
    transition: 0.3s;
    position: relative;
    padding: 0 18px;

    &::before {
        content: "";
        width: 2px;
        height: calc(100% - 25px);
        position: absolute;
        background: #2d2f39;
        left: 18px;
    }

    @media (max-width: 768px) {
        gap: 15px;
    }
`;

export const AreaIconItem = styled.div`
    width: auto;
    height: auto;
    margin-top: -11px;
`;

export const Title = styled.span<TitleProps>`
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 120%;
    color: #9e9e9e;
    width: 100%;
    height: 35px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    padding-left: 15px;
    background: ${(props) => (props.$activeMenu ? "#2d2f39" : "none")};

    &:hover {
        background: #2d2f39;
        color: #fff;
    }

    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

export const AreaTitle = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
`;
