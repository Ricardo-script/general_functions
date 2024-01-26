import {
    forwardRef,
    ForwardedRef,
    PropsWithChildren,
    FormHTMLAttributes,
} from "react";
import { FormContent } from "./styles";

type FormProps = {
    children: React.ReactNode;
    flexDirection?: "column" | "row";
} & FormHTMLAttributes<HTMLFormElement>;

const FormComponent = (
    { children, ...restProps }: PropsWithChildren<FormProps>,
    ref: ForwardedRef<HTMLFormElement>
): JSX.Element => {
    return (
        <FormContent {...restProps} ref={ref}>
            {children}
        </FormContent>
    );
};

export type { FormProps };

export const Form = forwardRef<HTMLFormElement, PropsWithChildren<FormProps>>(
    FormComponent
);
