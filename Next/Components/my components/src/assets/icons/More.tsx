import * as React from "react";

export const More = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
    return (
        <svg
            width={4}
            height={16}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M1.833 8.5a.833.833 0 100-1.667.833.833 0 000 1.667zM1.833 2.667a.833.833 0 100-1.667.833.833 0 000 1.667zM1.833 14.333a.833.833 0 100-1.666.833.833 0 000 1.666z"
                fill="gray"
                stroke="gray"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
