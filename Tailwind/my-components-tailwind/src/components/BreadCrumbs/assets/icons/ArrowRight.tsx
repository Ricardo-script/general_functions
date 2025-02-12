import { IconTypes } from ".";

export const ArrowRight = ({ className, props }: IconTypes) => (
    <div className={className}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={8}
            height={8}
            fill="none"
            viewBox="0 0 30 53"
            {...props}
        >
            <path
                fill="#818181"
                d="M0 3.326 2.955 0 30 26.25 2.955 52.5 0 49.174 23.618 26.25z"
            />
        </svg>
    </div>
);
