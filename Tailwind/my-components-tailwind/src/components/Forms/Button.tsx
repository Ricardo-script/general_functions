import { ButtonHTMLAttributes } from "react";
import { Spinner } from "../Spinner";

type ButtonProps = {
    children: React.ReactNode;
    loading?: boolean;
    loadingText?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
    children,
    loading,
    loadingText = "Enviando...",
    ...rest
}: ButtonProps) => {
    return (
        <button
            {...rest}
            className={`w-fit min-w-36 px-4 h-9 flex items-center justify-center gap-2 bg-[#32d583] hover:bg-[#2fbb75] transition-colors duration-300 rounded-lg cursor-pointer active:relative active:top-[1px] select-none max-[580px]:w-full ${
                loading && "pointer-events-none opacity-[0.5]"
            }`}
        >
            <span className="text-white text-sm font-semibold">
                {loading ? loadingText : children}
            </span>
            {loading && <Spinner />}
        </button>
    );
};
