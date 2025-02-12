import { InputHTMLAttributes, JSX } from "react";

type InputProps = {
    iconLeft?: JSX.Element;
    iconRight?: JSX.Element;
    label?: string;
    message?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
    iconLeft,
    iconRight,
    label,
    message,
    ...rest
}: InputProps) => {
    return (
        <div className="relative w-full">
            <label htmlFor="" className="text-[#344054] font-medium text-xs">
                {label}
            </label>
            <div className="w-full border border-[#c8ced8] rounded-md flex items-center gap-1 h-8 p-4 px-3 focus-within:border focus-within:border-[#1c64ff73] focus-within:shadow-within">
                {iconLeft}
                <input
                    type="text"
                    className="w-full outline-none text-sm font-normal text-zinc-600"
                    {...rest}
                />
                {iconRight}
            </div>
            <span className="text-[10px] absolute -bottom-4 right-2 text-red-600 font-medium">
                {message}
            </span>
        </div>
    );
};
