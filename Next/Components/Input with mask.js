// types do input:

export type InputProps = {
    label?: string
    required?: boolean
    maskType?: 'cpf' | 'telefone' | 'placa'
} & InputHTMLAttributes<HTMLInputElement>


export type MaskOptions = {
    [key: string]: (value: string) => string;
}

// Funções para mascaras-----------------------------------------------------------------------------------------------------------

export const cpfMask = (v: string): string => {
    v = v.replace(/\D/g, "")
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

export const plateMask = (v: string): string => { //placa de veiculo
    v = v.toUpperCase().replace(/[^A-Z0-9]/g, "");
    v = v.replace(/(\w{3})(\w)/, "$1-$2");
    return v;
};


// Criação do componente input: ---------------------------------------------------------------------------------------------------

import { useState, useRef, ChangeEvent } from 'react';
import { InputProps } from "src/types/FormsTypes";
import { Container, Label, AreaInput, InputContent, Message } from "./styles";
import { MaskOptions } from 'src/types/FormsTypes';
import { cpfMask, phoneMask, plateMask } from 'src/utils/functions/mask'

export const Input = ({ label, required, maskType, ...rest }: InputProps): JSX.Element => {

    const inputRef = useRef<HTMLInputElement>(null);
    const [error, setError] = useState<string>('');

    const masks: MaskOptions = {
        cpf: cpfMask,
        telefone: phoneMask,
        placa: plateMask,
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (maskType !== undefined) { // verifica se o Input contem a props masktype, se tiver chama a função
            console.log('chamou função')
            const selectedMask = masks[maskType || ''];
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
        <Container>
            <Label>{label}</Label>
            <AreaInput $status={error}>
                <InputContent ref={inputRef} onBlur={handleValidation} onChange={handleInputChange} {...rest} />
            </AreaInput>
            {error && <Message>{error}</Message>}
        </Container>
    );
}

// estilização do input: ---------------------------------------------------------------------------------------------------------

import styled from 'styled-components';

type InputProps = {
    $status: string
}

export const Container = styled.div`
    flex: 1;
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
    padding: 0 8px;

    &:hover{
        border: 2px solid ${({ theme }) => theme.colors.blue_50};
        transition: .5s;
    }

    &:focus-within{
        border: 2px solid ${({ theme }) => theme.colors.blue_50};
        box-shadow: 0px 0px 2px 3px #1c64ff37;
    }
`;

export const InputContent = styled.input`
    flex: 1;
    width: 100%;
    border: none;
    font-weight: 500;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.black_10};
    &::placeholder{
        color: #DEDEDE;
        font-size: 16px;
        font-weight: 500;
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

// chamada do input: ---------------------------------------------------------------------------------------------------------

<Input label='CPF' placeholder='Digite o CPF do cliente' required maskType='cpf' />



