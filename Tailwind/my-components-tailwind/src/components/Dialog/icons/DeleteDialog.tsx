import * as React from "react";

export const DeleteDialog = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width={56}
            height={56}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <rect x={4} y={4} width={48} height={48} rx={24} fill="#FEE4E2" />
            <rect
                x={4}
                y={4}
                width={48}
                height={48}
                rx={24}
                stroke="#FEF3F2"
                strokeWidth={8}
            />
            <path
                d="M32 22v-.8c0-1.12 0-1.68-.218-2.108a2 2 0 00-.874-.874C30.48 18 29.92 18 28.8 18h-1.6c-1.12 0-1.68 0-2.108.218a2 2 0 00-.874.874C24 19.52 24 20.08 24 21.2v.8m2 5.5v5m4-5v5M19 22h18m-2 0v11.2c0 1.68 0 2.52-.327 3.162a3 3 0 01-1.311 1.311C32.72 38 31.88 38 30.2 38h-4.4c-1.68 0-2.52 0-3.162-.327a3 3 0 01-1.311-1.311C21 35.72 21 34.88 21 33.2V22"
                stroke="#D92D20"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
