import * as React from "react";

export const More = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width={7}
            height={20}
            viewBox="0 0 11 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                stroke="gray"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={5}
                d="M8 5.5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0M8 23a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0M8 40.5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0"
            />
        </svg>
    );
};
