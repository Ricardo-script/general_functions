import * as React from "react";

export const Curve = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width={13}
            height={8}
            viewBox="0 0 13 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <mask id="prefix__a" fill="#fff">
                <path d="M0 0h13v8H8a8 8 0 01-8-8z" />
            </mask>
            <path
                d="M0 0h13H0zm13 10H8C2.477 10-2 5.523-2 0h4a6 6 0 006 6h5v4zm-5 0C2.477 10-2 5.523-2 0h4a6 6 0 006 6v4zm5-10v8-8z"
                fill="#64748b"
                mask="url(#prefix__a)"
            />
        </svg>
    );
};
