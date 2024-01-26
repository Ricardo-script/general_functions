import * as React from "react";

export const UploadDialog = (
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
        </svg>
    );
};
