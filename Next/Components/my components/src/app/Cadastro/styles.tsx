import styled from "styled-components";

export const Content = styled.div`
    width: 770px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 786px) {
        width: 100%;
    }
`;

export const AreaButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
`;
