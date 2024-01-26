import * as React from "react";

export const ImageDialog = (
    props: React.SVGProps<SVGSVGElement>
): JSX.Element => {
    return (
        <svg
            width={46}
            height={46}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <rect x={3} y={3} width={40} height={40} rx={20} fill="#F2F4F7" />
            <rect
                x={3}
                y={3}
                width={40}
                height={40}
                rx={20}
                stroke="#F9FAFB"
                strokeWidth={6}
            />
            <path
                d="M19.667 26.333L23 23m0 0l3.333 3.333M23 23v7.5m6.667-3.548a4.583 4.583 0 00-2.917-8.12.516.516 0 01-.445-.25 6.25 6.25 0 10-9.816 7.58"
                stroke="#475467"
                strokeWidth={1.667}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <rect x={7} y={7} width={32} height={32} rx={16} fill="#F4EBFF" />
            <rect
                x={7}
                y={7}
                width={32}
                height={32}
                rx={16}
                stroke="#F9F5FF"
                strokeWidth={4}
            />
            <g
                clipPath="url(#prefix__clip0_245_20)"
                stroke="#7F56D9"
                strokeWidth={1.33}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M28.444 16H17.556c-.86 0-1.556.696-1.556 1.556v10.888c0 .86.696 1.556 1.556 1.556h10.888c.86 0 1.556-.696 1.556-1.556V17.556c0-.86-.696-1.556-1.556-1.556z" />
                <path d="M20 21a1 1 0 100-2 1 1 0 000 2zM30 25.09L26.25 21 18 30" />
            </g>
            <defs>
                <clipPath id="prefix__clip0_245_20">
                    <path
                        fill="#fff"
                        transform="translate(15 15)"
                        d="M0 0h16v16H0z"
                    />
                </clipPath>
            </defs>
        </svg>
    );
};
