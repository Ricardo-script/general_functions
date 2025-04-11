import * as React from "react";

export const FileDialog = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width={36}
            height={36}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <rect x={2} y={2} width={32} height={32} rx={16} fill="#F4EBFF" />
            <rect
                x={2}
                y={2}
                width={32}
                height={32}
                rx={16}
                stroke="#F9F5FF"
                strokeWidth={4}
            />
            <path
                d="M19.333 11.513v2.753c0 .374 0 .56.073.703a.667.667 0 00.291.291c.143.073.33.073.703.073h2.754m.18 1.325v4.808c0 1.12 0 1.68-.219 2.108a2 2 0 01-.874.874c-.427.218-.988.218-2.108.218h-4.266c-1.12 0-1.68 0-2.108-.218a2 2 0 01-.874-.874c-.218-.428-.218-.988-.218-2.108v-6.933c0-1.12 0-1.68.218-2.108a2 2 0 01.874-.874c.428-.218.988-.218 2.108-.218h2.14c.49 0 .735 0 .965.055.204.05.399.13.578.24.202.123.375.296.72.642l2.126 2.126c.346.346.519.519.643.72a2 2 0 01.24.579c.054.23.054.474.054.963z"
                stroke="#7F56D9"
                strokeWidth={1.333}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
