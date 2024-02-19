import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 83px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    border-radius: 15px;
    min-height: 83px;
    padding: 22px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 3.5px 5.5px;
`;

export const AreaValues = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const Title = styled.span`
    font-size: 14px;
    color: #a0aec0;
    font-weight: 500;
`;

export const Value = styled.span`
    color: #1f2733;
    font-size: 18px;
    font-weight: 600;
`;

export const AreaIcon = styled.div``;

export const Icon = styled.div`
    width: 45px;
    height: 45px;
    background: #4fd1c5;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
