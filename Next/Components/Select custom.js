// Arquivo de uso:

import { Select } from "./components/Select";
import { Option } from "./components/Option";
import { useRef } from "react";

function App(): JSX.Element {

    const form = useRef<HTMLFormElement>(null);

    const formData = () => {
        const number = form.current?.number.value

        return { number }
    }

    const getValues = () => {
        console.log(formData())
    }

    return (
        <div>
            <form action="" ref={form}>
                <Select name='number' label="Selecione" required> {/*onChange={(e) => console.log(e)}*/}
                    <Option value=''>Selecione...</Option>
                    <Option value='123'>123</Option>
                    <Option value='456'>456</Option>
                    <Option value='789'>789</Option>
                </Select>
            </form>
            <button onClick={getValues}>ok</button>
        </div>
    );
}

export default App

//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------

//src/components/Select:

import { useState, useEffect, InputHTMLAttributes, ReactElement, useRef, ReactNode, Children, isValidElement, cloneElement } from 'react';
import { Content, Label, AreaInput, InputComponent, IconLeft, Icon, BoxList, Message } from './styles'

type InputTypes = {
    label: string
    required?: boolean
    value?: string | number | boolean
    placeholder?: string
    iconRight?: ReactElement
    iconLeft?: ReactElement
    children?: ReactNode
    onChange?: (value: string) => void
} & InputHTMLAttributes<HTMLInputElement>

type OptionProps = {
    value: string;
    onClick?: () => void;
};

export const Select = (props: InputTypes): JSX.Element => {

    const { label, required, placeholder, iconLeft, children, onChange = () => null, ...rest } = props;
    const [openSelect, setOpenSelect] = useState(false);
    const selectRef = useRef<HTMLInputElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [error, setError] = useState<string>('');

    const getValues = (value: string) => {
        onChange(value)
        if (selectRef.current) {
            selectRef.current.value = value
            handleValidation()
        }
    }

    const handleValidation = () => {
        setTimeout(() => {
            if (required && selectRef.current?.value === '') {
                setError('O campo é obrigatório');
            } else {
                setError('');
            }
        }, 300)
    };

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (contentRef.current && !contentRef.current.contains(event.target as Node)) {
                setOpenSelect(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <Content ref={contentRef} onBlur={handleValidation}>
            <Label>{label}</Label>
            <AreaInput onClick={() => setOpenSelect(!openSelect)}>
                {iconLeft &&
                    <IconLeft>
                        {iconLeft}
                    </IconLeft>
                }
                <InputComponent
                    placeholder={placeholder}
                    {...rest}
                    ref={selectRef}
                    readOnly
                />
                <Icon>
                    ▼
                </Icon>
            </AreaInput>
            {error && <Message>{error}</Message>}
            <BoxList open={openSelect}>
                {Children.map(children, (child, index) => {
                    if (isValidElement<OptionProps>(child)) {
                        const optionProps = child.props as OptionProps;
                        return cloneElement(child, {
                            key: index,
                            onClick: (): void => {
                                getValues(optionProps.value);
                                if (optionProps.onClick) {
                                    optionProps.onClick();
                                }
                                setOpenSelect(!openSelect)
                            }
                        });
                    }
                    return child;
                })}
            </BoxList>
        </Content>
    )
}

//---- Styles : --------


type PropsOpen = {
    open: boolean;
};

import { styled } from "styled-components";

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    position: relative;

    @media(max-height: 580px){
        gap: 0;
    }
`;

export const AreaInput = styled.div`
    width: 100%;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    border: 1px solid #ccc;
    transition: border-color 0.3s; 

    &:focus-within {
        border-color: #66afe9;
        outline: 0;
        box-shadow: inset 0 1px 1px #00000013, 0 0 8px #66AFE999;
    }

    @media(max-height: 580px){
        height: 34px;
    }
`;

export const InputComponent = styled.input`
    width: 100%;
    height: 26px;
    outline: none;
    border: 0;
    text-indent: 10px;
    color: #9b9191;
    font-size: 12px;
    font-weight: 300;

    @media(max-height: 580px){
        height: 50%;
    }
`;

export const Label = styled.label`
    color: #9b9191;
    font-size: 13px;
    font-weight: 400;
`;

export const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    user-select: none;
    color: #575555;
    cursor: pointer;
`;

export const IconLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    padding-left: 15px;
`;

export const BoxList = styled.ul<PropsOpen>`
    width: 100%;
    background: #fff;
    border-radius: 5px;
    box-shadow: ${props =>
        props.open === true ? '0px 3px 5px -1px #96969675' : 'none'};
    list-style-type: none;
    max-height: ${props => (props.open === true ? '225px' : '0')};
    transition: max-height 0.1s ease-out;
    overflow-y: scroll;
    z-index: 2;
    padding: 0;
    position: absolute;
    top: 42px;
    cursor: pointer;

    &::-webkit-scrollbar {
        width: 7px;

        &-track-piece {
            background-color: #eee;
        }

        &-thumb:vertical,
        &-thumb:horizontal {
            background-color: #178368;
            border-radius: 5px;
        }

        &-thumb:vertical:hover,
        &-thumb:horizontal:hover {
            background-color: #717171;
        }
    }
`;

export const Message = styled.span`
    font-weight: 400;
    font-size: 12px;
    line-height: 16.41px;
    color: red;
    text-align: end;
    margin-top: 2px;
    position: absolute;
    right: 4px;
    bottom: -17px;
`;

//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
//src/components/Option:

import { ReactNode } from 'react';
import { Item } from './styles';

/**
 * Componente estilizado para o < option /> do html
 * @param param0
 * Recebe como paramentro o children
 * @returns
 */

type propsOptions = {
    children: ReactNode;
    onClick?: () => void;
    value?: string;
};

export const Option = ({ children, onClick, value }: propsOptions): JSX.Element => {
    return <Item onClick={onClick} value={value}>{children}</Item>;
};


//--- Styles ----

import styled from "styled-components";

export const Item = styled.li`
    height: 15px;
    font-size: 13px;
    color: #494848;
    display: flex;
    align-items: center;
    user-select: none;
    padding: 5px 15px;
    cursor: pointer;

    &:hover {
        background: #cacaca;
    }
`;

