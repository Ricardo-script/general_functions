import styled from "styled-components";

type TabProps = {
    $active: number;
    $totalItems: number;
    $selected: boolean;
};

export const Container = styled.div`
    width: 100vw;
    height: 60px;
    border-radius: 16px 16px 0 0;
    position: fixed;
    bottom: 0;
    background: #161a23;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 2;
    display: none;

    @media (max-width: 520px) {
        display: flex;
    }
`;

export const Tab = styled.div<TabProps>`
    width: calc(100% / ${(props) => props.$totalItems});
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    padding-top: ${(props) => (props.$selected ? 0 : "10px")};
    transition: 0.5s;
    position: relative;

    svg {
        color: ${(props) => (props.$selected ? "#2fb371" : "#9e9e9e")};
    }

    &:active {
        opacity: 0.5;
    }
`;

export const Title = styled.span<Omit<TabProps, "$totalItems" | "$active">>`
    font-size: 10px;
    color: ${(props) => (props.$selected ? "#2fb371" : "#9e9e9e")};
    font-weight: 600;
`;

export const TabActivated = styled.div<Omit<TabProps, "$selected">>`
    width: calc(100% / ${(props) => props.$totalItems});
    height: 78px;
    border-radius: 50%;
    background: #161a23;
    position: absolute;
    top: -17px;
    left: calc(
        100% / ${(props) => props.$totalItems} * ${(props) => props.$active}
    );
    transition: 0.3s;
    z-index: -1;
`;

export const CicleSelected = styled.div`
    width: 70%;
    max-width: 60px;
    height: 55px;
    border-radius: 50%;
    background: #352d52;
    position: absolute;
    z-index: -1;
    top: -8px;
    transition: 0.3s;
`;
