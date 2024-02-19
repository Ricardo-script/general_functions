"use client";

import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 60px;
    background: #dfdfdf;
    display: flex;
    align-items: center;
    padding-left: 30px;
    box-shadow: 0px -3px 5px 2px #4b4c4f81;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
        padding-left: 50px;
        border-radius: 0 0 15px 0;
    }
`;

export const Title = styled.span`
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 17px;
    color: #161a23;
    text-align: center;
`;
