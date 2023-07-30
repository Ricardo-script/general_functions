//Form:

import { AreaForm } from './styles'

type FormProps = {
    children?: React.ReactNode
}

export const Form = ({ children }: FormProps): JSX.Element => {
    return (
        <AreaForm>
            {children}
        </AreaForm>
    );
}

//Form Styles---------------------------------------------------------------

import { styled } from "styled-components/native";

export const AreaForm = styled.View`
    width: 90%;
    margin-top: 15px;
    gap: 13px;
`;