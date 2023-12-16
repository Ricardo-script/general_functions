import { useState, useRef, ChangeEvent } from 'react';
import { InputProps } from "src/types/FormsTypes";
import { Container, Label, AreaInput, InputContent, Message } from "./styles";
import { MaskOptions } from 'src/types/FormsTypes';
import { cpfMask, phoneMask, plateMask } from 'src/utils/functions/mask'

export const Input = ({ label, required, width = 0, disabled = false, maskType, ...rest }: InputProps): JSX.Element => {

    const inputRef = useRef<HTMLInputElement>(null);
    const [error, setError] = useState<string>('');

    const masks: MaskOptions = {
        cpf: cpfMask,
        telefone: phoneMask,
        placa: plateMask,
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (maskType !== undefined) {
            const selectedMask = masks[maskType];
            if (selectedMask) {
                const maskedValue = selectedMask(event.target.value);
                event.target.value = maskedValue;
            }
        }
    }

    const handleValidation = () => {
        if (required && inputRef.current?.value === '') {
            setError('O campo é obrigatório');
        } else {
            setError('');
        }
    };

    return (
        <Container $width={width}>
            <Label>{label}</Label>
            <AreaInput
                $status={error}
                $disabled={disabled}
            >
                <InputContent
                    ref={inputRef}
                    onBlur={handleValidation}
                    onChange={handleInputChange}
                    $disabled={disabled}
                    disabled={disabled}
                    {...rest}
                />
            </AreaInput>
            {error && <Message>{error}</Message>}
        </Container>
    );
}

// styles:
//-----------------------------------------------------------------------------------------------------------------------

import styled from 'styled-components';

type InputProps = {
    $status?: string
    $disabled?: boolean
    $width?: number
}

export const Container = styled.div<InputProps>`
    width: ${props => props.$width === 0 ? '100%' : props.$width && props.$width * 4 + 'px'}; 
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
    color: ${({ theme }) => theme.colors.gray_10};
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    margin-bottom: 2px;
`;

export const AreaInput = styled.div<InputProps>`
    width: 100%;
    height: 40px;
    border: 2px solid ${props => props.$status === '' ? props.theme.colors.gray_10 : 'red'};
    border-radius: 8px;
    display: flex;
    pointer-events: ${props => props.$disabled ? 'none' : 'auto'};
    opacity: ${props => props.$disabled ? '1' : '0.5'};
    background: ${props => props.$disabled ? props.theme.colors.gray_10 : 'transparent'};

    &:hover{
        border: 2px solid ${({ theme }) => theme.colors.blue_50};
        transition: .5s;
    }

    &:focus-within{
        border: 2px solid ${({ theme }) => theme.colors.blue_50};
        box-shadow: 0px 0px 2px 3px #1c64ff37;
    }
`;

export const InputContent = styled.input<InputProps>`
    width: 100%;
    border: none;
    font-weight: 500;
    font-size: 16px;
    border-radius: 6px;
    text-indent: 8px;
    color: ${props => props.$disabled ? props.theme.colors.gray_10 : props.theme.colors.black_20};
    background: ${props => props.$disabled ? props.theme.colors.gray_30 : 'transparent'};
    &::placeholder{
        color: #94999E;
        font-size: 16px;
        font-weight: 500;
    }
    &:disabled{
        background: #DEDEDE;
    }
`;

export const Message = styled.span`
    font-weight: 500;
    font-size: 14px;
    line-height: 16.41px;
    color: ${({ theme }) => theme.colors.red_10};
    text-align: end;
    margin-top: 2px;
`;

//-----------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------

//functions mask.ts:

export const cpfMask = (v: string): string => {
    v = v.replace(/\D/g, "")
    v = v.substring(0, 11);
    v = v.replace(/(\d{3})(\d)/, "$1.$2")
    v = v.replace(/(\d{3})(\d)/, "$1.$2")
    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    return v
}

export const phoneMask = (v: string): string => {
    v = v.replace(/\D/g, "");
    v = v.replace(/(\d{2})(\d)/, "($1) $2");
    v = v.replace(/(\d{5})(\d)/, "$1-$2");
    v = v.replace(/(\d{4})(\d)/, "$1$2");
    return v;
};

export const plateMask = (v: string): string => {
    v = v.toUpperCase().replace(/[^A-Z0-9]/g, "");
    v = v.substring(0, 7);
    v = v.replace(/(\w{3})(\w)/, "$1-$2");
    return v;
};

export const unmaskCPF = (maskedValue: string): string => {
    return maskedValue.replace(/\D/g, "");
}

export const unmaskPhone = (maskedValue: string): string => {
    return maskedValue.replace(/\D/g, "");
}

export const unmaskPlate = (maskedValue: string): string => {
    return maskedValue.toUpperCase().replace(/[^A-Z0-9]/g, "");
}
