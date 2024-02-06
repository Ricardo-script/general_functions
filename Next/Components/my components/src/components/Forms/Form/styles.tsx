"use client";

import styled from "styled-components";

type FormProps = {
    $flexDirection: string;
    $gap: number;
    $padding: number;
};

export const FormContent = styled.form<FormProps>`
    width: 100%;
    display: flex;
    flex-direction: ${(props) => props.$flexDirection};
    gap: ${(props) => props.$gap + "px"};
    padding: ${(props) => props.$padding + "px"};
`;
