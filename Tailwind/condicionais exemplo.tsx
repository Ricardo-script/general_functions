import { ReactNode, JSX, ButtonHTMLAttributes } from "react";

type Variant = "text" | "contained" | "outlined";

type Color = "primary" | "error";

type ButtonProps = {
    children: ReactNode;
    type?: "button" | "submit" | "reset";
    icon?: JSX.Element;
    variant?: Variant;
    color?: Color;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const baseClasses = `
  w-fit h-10 px-9 rounded-lg cursor-pointer 
  active:opacity-90 active:relative active:top-[1px]
`;

const variantClasses: Record<Variant, string> = {
    contained: "text-white",
    outlined: "bg-transparent border-2 text-primary",
    text: "border-0 text-zinc-700",
};

const variantColors: Record<Color, string> = {
    primary: "bg-primary border-primary hover:bg-[#2A2ACC]",
    error: "bg-red-500 border-red-500 text-red-500 hover:bg-red-600",
};

export const Button = ({
    children,
    type = "button",
    variant = "contained",
    color = "primary",
    icon,
    ...rest
}: ButtonProps) => {
    return (
        <button
            type={type}
            className={`${baseClasses} ${variantClasses[variant]} ${variantColors[color]}`}
            {...rest}
        >
            <div className="flex gap-3">
                {icon && icon}
                {children}
            </div>
        </button>
    );
};
