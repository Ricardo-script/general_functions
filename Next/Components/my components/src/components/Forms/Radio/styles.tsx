import styled from "styled-components";

type RadioLabelProps = {
    $color?: string;
};

export const RadioLabel = styled.label<RadioLabelProps>`
    width: 20px;
    font-size: 24px;
    font-weight: 500;
    text-transform: capitalize;
    display: inline-block;
    vertical-align: middle;
    color: ${(props) => props.$color};
    position: relative;
    margin-right: 8px;
    cursor: pointer;
`;

export const RadioInput = styled.input`
    display: none;
`;

export const RadioSpan = styled.span<RadioLabelProps>`
    height: 20px;
    width: 20px;
    border-radius: 50%;
    border: 2px solid #c8ccd4;
    display: block;

    &:after {
        content: "";
        height: 8px;
        width: 8px;
        background: ${(props) => props.$color};
        display: block;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        border-radius: 50%;
        transition: 300ms ease-in-out 0s;
    }

    ${RadioInput}:checked ~ &:after {
        transform: translate(-50%, -50%) scale(1);
    }

    ${RadioInput}:checked ~ & {
        border: 2px solid ${(props) => props.$color};
        transition: 1s ease-in-out;
    }
`;
