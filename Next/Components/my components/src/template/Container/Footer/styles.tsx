import styled from "styled-components";

export const TextFooter = styled.span`
    width: 100%;
    text-align: center;
    font-size: 12px;
    color: #a0aec0;
    pointer-events: none;
    margin-top: 15px;

    b {
        font-weight: 600;
    }

    @media (max-width: 520px) {
        margin: 15px 0 70px 0;
    }
`;
