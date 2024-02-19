import styled from "styled-components";

type StatusProps = {
    $status: string;
};

export const Table = styled.table`
    border-collapse: collapse;
    width: 100%;

    @media (max-width: 840px) {
        //width: 840px;
    }
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Th = styled.th`
    background: #fff;
    font-size: 10px;
    font-weight: 600;
    color: #a0aec0;
    text-transform: uppercase;
    text-align: left;
    position: sticky;
    top: 0;
`;

export const Tr = styled.tr`
    background: #fff;
    border-bottom: 1px solid #ddd;

    &:last-child {
        border: none;
    }
`;

export const Td = styled.td`
    font-size: 13px;
    height: 35px;
    font-weight: 700;
    color: #2d3748;
    text-align: left;
    padding: 10px 0;

    &:first-child {
        width: 60px;
    }
`;

export const Cell = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 2px;
`;

export const Text = styled.span`
    font-size: 13px;
    font-weight: 400;
    color: #718096;
    text-align: left;
`;

export const TextBold = styled.span`
    font-size: 13px;
    font-weight: 700;
    color: #2d3748;
    text-align: left;
`;

export const Status = styled.div<StatusProps>`
    width: 65px;
    height: 25px;
    background: ${(props) =>
        props.$status === "Online" ? "#25b96f" : "#CBD5E0"};
    border-radius: 8px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
`;
