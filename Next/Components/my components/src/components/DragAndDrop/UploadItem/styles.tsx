import styled from "styled-components";

type PercentageProps = {
    $uploadProgress: number;
};

export const Container = styled.ul`
    width: 100%;
    height: 96px;
    border: 1px solid #ece4e6;
    background: #fff;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
    padding: 0 16px;

    li {
        width: 100%;
        font-size: 11px;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 4px;
    }
`;

export const Description = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 16px;
`;

export const IconDelete = styled.div`
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:active {
        position: relative;
        top: 1px;
    }
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const AreaText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Span = styled.span`
    color: #344054;
    font-weight: 500;
    font-size: 14px;
`;

export const Size = styled.span`
    color: #344054;
    font-size: 13px;
`;

export const AreaPercentage = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 50px;
    gap: 12px;
`;

export const Bar = styled.div`
    width: 100%;
    height: 8px;
    border-radius: 8px;
    background: #e4e7ec;
    display: flex;
    align-items: center;
    overflow: hidden;
`;

export const Percentage = styled.div<PercentageProps>`
    background: #42307d;
    width: ${(props) => props.$uploadProgress + "%"};
    height: 8px;
    transition: 0.3s;
`;

export const Total = styled.span`
    color: #344054;
    font-size: 11px;
    font-weight: 500;
`;
