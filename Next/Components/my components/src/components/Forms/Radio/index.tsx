import { InputHTMLAttributes } from "react";
import { RadioLabel, RadioInput, RadioSpan } from "./styles";

type RadioProps = {
    color?: string;
} & InputHTMLAttributes<HTMLInputElement>;

/**
 *
 * @param color recebe uma string
 * @returns altera a cor do radio
 *
 * @description
 *
 * Para capturar o value de um grupo de radios com o mesmo name
 * o value deve ser inserido, e para capturar o valor sera através do
 * prório value
 * @example
 *
 * const formRef = useRef<HTMLFormElement>(null);
 * <form>
 *    <Radio name="radio1" value="1" />
 *    <Radio name="radio1" value="2" />
 * </form>
 *
 * const radio = formRef.current?.radio1.value;
 *
 * caso queira pegar o boolen, então não deve ter agrupamento de radio e não há necessidade
 * de inserir o value
 *
 *
 */
export const Radio = ({
    color = "#4FD1C5",
    ...rest
}: RadioProps): JSX.Element => {
    return (
        <RadioLabel $color={color}>
            <RadioInput type="radio" {...rest} />
            <RadioSpan $color={color} />
        </RadioLabel>
    );
};
