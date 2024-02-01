import * as React from "react";

type IconTypes = {
    props: React.SVGProps<SVGSVGElement>;
    width?: number;
    height?: number;
};

export const AlertAlert = ({
    props,
    width = 20,
    height = 20,
}: IconTypes): JSX.Element => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20 10c0 5.523-4.477 10-10 10H.994C.11 20-.332 18.923.292 18.293L2.25 16.32A9.959 9.959 0 010 10C0 4.477 4.477 0 10 0s10 4.477 10 10zm-9.01-4c0-.552-.445-1-.995-1A.998.998 0 009 6v4c0 .552.445 1 .995 1s.995-.448.995-1V6zm-.995 7A.998.998 0 009 14c0 .552.445 1 .995 1h.01c.55 0 .995-.448.995-1s-.445-1-.995-1h-.01z"
                fill="#FFC400"
            />
        </svg>
    );
};
