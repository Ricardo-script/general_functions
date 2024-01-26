import { ReactNode } from "react";
import { Item } from "./styles";

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

export const Option = ({
    children,
    onClick,
    value,
}: propsOptions): JSX.Element => {
    return (
        <Item onClick={onClick} value={value}>
            {children}
        </Item>
    );
};
