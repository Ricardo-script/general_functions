import { FormHTMLAttributes } from "react";

type FormProps = {
    children: React.ReactNode;
} & FormHTMLAttributes<HTMLFormElement>;

export const Form = ({ children, ...rest }: FormProps) => {
    return (
        <form {...rest} className="w-full flex flex-col gap-2">
            {children}
        </form>
    );
};
