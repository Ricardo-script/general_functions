import { Label, InvisibleInput, AreaCheckbox } from "./styles";
import { InputHTMLAttributes } from "react";

type CheckBoxProps = {
    color?: string
    borderColor?: string
} & InputHTMLAttributes<HTMLInputElement>

/**
 * @param color background do checkbox
 * CheckBox vai funcionar como um input checkbox e funciona com todas as propriedades
 * Para resgatar uma valor com ref acesse o ref.current.checked
 * @param borderColor  borda do checkox
 */

export const Checkbox = ({ color = '#4FD1C5', borderColor = '#C8CCD4', ...rest }: CheckBoxProps): JSX.Element => {
    return (
        <Label $color={color}>
            <InvisibleInput type="checkbox" className="invisible" {...rest} />
            <AreaCheckbox className="checkbox" $borderColor={borderColor} $color={color}>
                <svg width="20px" height="20px" viewBox="0 0 20 20">
                    <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
                    <polyline points="4 11 8 15 16 6"></polyline>
                </svg>
            </AreaCheckbox>
        </Label>
    );
};


