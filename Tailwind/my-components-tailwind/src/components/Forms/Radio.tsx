import { InputHTMLAttributes, useId } from "react";

type RadioProps = {
    disabled?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export const Radio = ({ disabled, ...rest }: RadioProps) => {
    const id = useId();

    return (
        <div className={`inline-flex items-center ${disabled && "opacity-30"}`}>
            <label
                className="relative flex cursor-pointer items-center rounded-full"
                htmlFor={id}
                data-ripple-dark="true"
            >
                <input
                    name="ripple"
                    type="radio"
                    className="before:content[''] peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-slate-400 before:opacity-0 before:transition-opacity hover:before:opacity-10"
                    id={id}
                    {...rest}
                />
                <span className="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
            </label>
        </div>
    );
};
