'use client'

import styled from 'styled-components'

export const Container = styled.header`
    width: 100%;
    height: 70px;
    background: #dfdfdf;
    display: flex;
    align-items: center;
    padding-left: 15px;
    box-shadow: 0px -3px 5px 2px #4b4c4f81;
    position: relative;
    z-index: 1;
`;

export const Title = styled.span`
    font-family: 'Inter',sans-serif;
    font-weight: 600;
    font-size: 17px;
    color: #161A23;
    text-align: center;
`;