//uso:

'use client'

import { Option } from "@/components/Option"
import { Select } from "@/components/Select"

export default function Home() {
    return (
        <div style={{ width: '400px' }}>
            <Select label="Selecione" onChange={(value) => console.log(value)}>
                <Option value='123'>123</Option>
                <Option value='456'>456</Option>
                <Option value='789'>789</Option>
            </Select>
        </div>

    )
}

//Select.tsx

'use client'

import { useState, InputHTMLAttributes, ReactElement, forwardRef, ReactNode, Children, isValidElement, cloneElement } from 'react';
import { Content, Label, AreaInput, InputComponent, IconLeft, Icon, BoxList } from './styles'

type InputTypes = {
    label: string
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

export const Select = forwardRef<HTMLInputElement, InputTypes>((props, ref) => {

    const { label, placeholder, iconLeft, iconRight, children, onChange = () => null, ...rest } = props;
    const [valueSelect, setValueSelect] = useState('');
    const [openSelect, setOpenSelect] = useState(false);

    const getValues = (value: string) => {
        onChange(value)
        setValueSelect(value)
    }

    return (
        <Content>
            <Label>{label}</Label>
            <AreaInput>
                {iconLeft &&
                    <IconLeft>
                        {iconLeft}
                    </IconLeft>
                }
                <InputComponent
                    placeholder={placeholder}
                    {...rest}
                    ref={ref}
                    value={valueSelect}
                    disabled={false}
                    onChange={(e) => {
                        getValues(e.target.value)
                    }}
                />
                <Icon onClick={() => setOpenSelect(!openSelect)}>
                    ▼
                </Icon>
            </AreaInput>
            <BoxList open={openSelect}>
                {Children.map(children, (child, index) => {
                    if (isValidElement<OptionProps>(child)) {
                        const optionProps = child.props as OptionProps;
                        return cloneElement(child, {
                            key: index,
                            onClick: () => {
                                getValues(optionProps.value);
                                if (optionProps.onClick) {
                                    optionProps.onClick();
                                }
                            }
                        });
                    }
                    return child;
                })}
            </BoxList>
        </Content>
    )
});

Select.displayName = 'Select';



//Select - styles -------------------------------------------------------------------------------------------------------------

'use client'

type PropsOpen = {
    open: boolean;
};

import { styled } from "styled-components";

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;

    @media(max-height: 580px){
        gap: 0;
    }
`;

export const AreaInput = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 9px;
    border: 1px solid #575555;
    transition: border-color 0.3s; 

    &:focus-within {
        border-color: #3ea8d1;
    }

    @media(max-height: 580px){
        height: 34px;
    }
`;

export const InputComponent = styled.input`
    width: 95%;
    height: 30px;
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
    width: 50px;
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
        props.open === true ? '0px 4px 6px 1px rgb(150 150 150 / 75%)' : 'none'};
    list-style-type: none;
    max-height: ${props => (props.open === true ? '225px' : '0')};
    transition: max-height 0.1s ease-out;
    overflow-y: scroll;
    z-index: 2;
    padding: 0;
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
//=================================================================================================================
// option

'use client'

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


// styles options

'use client'

import styled from "styled-components";

export const Item = styled.li`
    height: 27px;
    display: flex;
    align-items: center;
    user-select: none;
    padding: 5px 15px;
    cursor: pointer;

    &:hover {
        background: #cacaca;
    }
`;