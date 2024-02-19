import styled from "styled-components";

type RangeSliderInputProps = {
    $labelWidth: number;
    $labelColor: string;
    $trackHeight: number;
    $trackColor: string;
    $handleSize: number;
    $handleColor: string;
    $handleColorHover: string;
    $labelBackgroundColor: string;
    $shade0: string;
    $teal: string;
};

type RangeSliderValue = {
    $labelWidth: number;
    $labelColor: string;
    $labelBackgroundColor: string;
};

export const RangeSliderWrapper = styled.div`
    //margin: 10px 0;
`;

export const RangeSliderInput = styled.input<RangeSliderInputProps>`
    -webkit-appearance: none;
    width: calc(100% - (${(props) => props.$labelWidth}px + 13px));
    height: ${(props) => props.$trackHeight}px;
    border-radius: 5px;
    background: ${(props) => props.$trackColor};
    outline: none;
    padding: 0;
    margin: 0;

    &::-webkit-slider-thumb {
        appearance: none;
        width: ${(props) => props.$handleSize}px;
        height: ${(props) => props.$handleSize}px;
        border-radius: 50%;
        background: ${(props) => props.$handleColor};
        cursor: pointer;
        transition: background 0.15s ease-in-out;

        &:hover {
            background: ${(props) => props.$handleColorHover};
        }
    }

    &:active::-webkit-slider-thumb {
        background: ${(props) => props.$handleColorHover};
    }

    &::-moz-range-thumb {
        width: ${(props) => props.$handleSize}px;
        height: ${(props) => props.$handleSize}px;
        border: 0;
        border-radius: 50%;
        background: ${(props) => props.$handleColor};
        cursor: pointer;
        transition: background 0.15s ease-in-out;

        &:hover {
            background: ${(props) => props.$handleColorHover};
        }
    }

    &:active::-moz-range-thumb {
        background: ${(props) => props.$handleColorHover};
    }

    &:focus {
        &::-webkit-slider-thumb {
            box-shadow: 0 0 0 3px ${(props) => props.$shade0},
                0 0 0 6px ${(props) => props.$teal};
        }
    }
`;

export const RangeSliderValue = styled.span<RangeSliderValue>`
    display: inline-block;
    position: relative;
    width: ${(props) => props.$labelWidth}px;
    color: ${(props) => props.$labelColor};
    line-height: 20px;
    text-align: center;
    border-radius: 3px;
    background: ${(props) => props.$labelBackgroundColor};
    padding: 3px 0;
    margin-left: 8px;
    font-size: 12px;

    &:after {
        position: absolute;
        top: 6px;
        left: -6px;
        width: 0;
        height: 0;
        border-top: 7px solid transparent;
        border-right: 7px solid ${(props) => props.$labelBackgroundColor};
        border-bottom: 7px solid transparent;
        content: "";
    }
`;
