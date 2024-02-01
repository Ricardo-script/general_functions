"use client";

import styled from "styled-components";

type CheckboxProps = {
    $color: string;
    $borderColor: string;
};

export const Label = styled.label<Omit<CheckboxProps, "$borderColor">>`
    user-select: none;
    cursor: pointer;
    margin-bottom: 0;

    &:hover .checkbox svg path {
        stroke-dashoffset: 0;
    }

    input:checked + .checkbox {
        border-color: ${(props) => props.$color};
        svg path {
            fill: ${(props) => props.$color};
        }
        svg polyline {
            stroke-dashoffset: 0;
        }
    }
`;

export const AreaCheckbox = styled.div<CheckboxProps>`
    position: relative;
    top: 2px;
    float: left;
    margin-right: 8px;
    width: 20px;
    height: 20px;
    border: 2px solid ${(props) => props.$borderColor};
    border-radius: 3px;

    svg {
        position: absolute;
        top: -2px;
        left: -2px;
        path {
            fill: none;
            stroke: ${(props) => props.$color};
            stroke-width: 2;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-dasharray: 71px;
            stroke-dashoffset: 71px;
            transition: all 0.6s ease;
        }
        polyline {
            fill: none;
            stroke: #fff;
            stroke-width: 2;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-dasharray: 18px;
            stroke-dashoffset: 18px;
            transition: all 0.3s ease;
        }
    }
`;

export const InvisibleInput = styled.input`
    display: none;
`;
