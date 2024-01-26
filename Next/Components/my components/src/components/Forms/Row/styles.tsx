import styled from "styled-components";

type AreaRowProps = {
    $gap: number;
};

export const AreaRow = styled.div<AreaRowProps>`
    display: flex;
    gap: ${(props) => props.$gap + "px"};

    @media (max-width: 900px) {
        flex-direction: column;
    }
`;
