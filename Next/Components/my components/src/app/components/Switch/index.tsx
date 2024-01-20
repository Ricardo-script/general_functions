import styled from "styled-components";
import { ChangeEvent, InputHTMLAttributes, useState } from "react";

const Label = styled.label`
    display: flex;
    align-items: center;
    width: fit-content;
    gap: 10px;
    cursor: pointer;
`;

const AreaSwitch = styled.div`
    position: relative;
    width: 40px;
    height: 19px;
    background: #b3b3b3;
    border-radius: 32px;
    padding: 4px;
    transition: 300ms all;

    &::before {
        transition: 300ms all;
        content: "";
        position: absolute;
        width: 14px;
        height: 14px;
        border-radius: 35px;
        top: 50%;
        left: 4px;
        background: white;
        transform: translate(0, -55%);
    }
`;

const Input = styled.input`
    opacity: 0;
    position: absolute;

    &:checked + ${AreaSwitch} {
        background: #4FD1C5;

        &::before {
            transform: translate(19px, -55%);
        }
    }
`;

type SwitchProps = {} & InputHTMLAttributes<HTMLInputElement>

/**
 * Switch vai funcionar como um input checkbox e funciona com todas as propriedades
 * Para resgatar uma valor com ref acesse o ref.current.checked
 */
export const Switch = ({ ...rest }: SwitchProps) => {
    return (
        <Label>
            <Input type="checkbox" {...rest} />
            <AreaSwitch />
        </Label>
    );
};
