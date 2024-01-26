import { Label, Input, AreaSwitch } from "./styles";
import { InputHTMLAttributes } from "react";

type SwitchProps = {
    color?: string
} & InputHTMLAttributes<HTMLInputElement>

/**
 * @param color Background do switch
 * @description
 * Switch vai funcionar como um input checkbox e funciona com todas as propriedades
 * Para resgatar uma valor com ref acesse o ref.current.checked
 */

export const Switch = ({ color = '#4FD1C5', ...rest }: SwitchProps) => {
    return (
        <Label>
            <Input type="checkbox" {...rest} $color={color} />
            <AreaSwitch />
        </Label>
    );
};
