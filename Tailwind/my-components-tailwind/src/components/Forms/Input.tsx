import { InputHTMLAttributes, JSX, useState } from "react";
import { Eye, EyeOff } from "./assets/icons";

type InputProps = {
    iconLeft?: JSX.Element;
    label?: string;
    message?: string;
    width?: number | string;
    height?: number;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
    iconLeft,
    label,
    message,
    width = "100%",
    height = 34,
    type = "text",
    ...rest
}: InputProps) => {
    const [viewPassword, setViewPassword] = useState(true);

    return (
        <div className="relative" style={{ width: width }}>
            <label htmlFor="" className="text-[#344054] font-medium text-xs">
                {label}
            </label>
            <div
                style={{ height: height }}
                className=" border border-[#c8ced8] rounded-md flex items-center gap-1 h-8 p-4 px-3 focus-within:border focus-within:border-[#1c64ff73] focus-within:shadow-within"
            >
                {iconLeft}
                <input
                    type={
                        type === "password" && viewPassword
                            ? "password"
                            : "text"
                    }
                    className="w-full outline-none text-sm font-normal text-zinc-600"
                    {...rest}
                />
                {type === "password" && (
                    <div
                        className="cursor-pointer"
                        onClick={() => setViewPassword((prev) => !prev)}
                    >
                        {viewPassword ? <EyeOff /> : <Eye />}
                    </div>
                )}
            </div>
            <span className="text-[10px] absolute -bottom-4 right-2 text-red-600 font-medium">
                {message}
            </span>
        </div>
    );
};
