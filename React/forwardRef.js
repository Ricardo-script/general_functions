// com Form

import React, { ReactNode, FormHTMLAttributes, forwardRef } from 'react';
import { AreaForm, FormComponent } from './styles';

type FormProps = {
    children: ReactNode;
} & FormHTMLAttributes<HTMLFormElement>;

export const Form = forwardRef<HTMLFormElement, FormProps>((props, ref) => {
    const { children, ...rest } = props;

    return (
        <AreaForm>
            <FormComponent {...rest} ref={ref}>
                {children}
            </FormComponent>
        </AreaForm>
    );
});

Form.displayName = 'Form'; // Define o displayName do componente


//------------------------------------------------------------------------------

import { InputHTMLAttributes, ReactElement, forwardRef } from 'react';
import { Content, Label, AreaInput, InputComponent, IconLeft, IconRight } from './styles'

type InputTypes = {
    label: string
    placeholder?: string
    iconRight?: ReactElement;
    iconLeft?: ReactElement;
} & InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputTypes>((props, ref) => {

    const { label, placeholder, iconLeft, iconRight, ...rest } = props;

    return (
        <Content>
            <Label>{label}</Label>
            <AreaInput>
                {iconLeft &&
                    <IconLeft>
                        {iconLeft}
                    </IconLeft>
                }
                <InputComponent placeholder={placeholder} {...rest} ref={ref} />
                {iconRight &&
                    <IconRight>
                        {iconRight}
                    </IconRight>
                }
            </AreaInput>
        </Content>
    )
});

Input.displayName = 'Input'; // Define o displayName do componente