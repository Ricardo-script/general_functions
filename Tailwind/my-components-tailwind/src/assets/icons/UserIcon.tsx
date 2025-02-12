import { IconTypes } from ".";

export const UserIcon = ({ className, props }: IconTypes) => (
    <div className={className}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={15}
            height={15}
            fill="none"
            viewBox="0 0 50 50"
            {...props}
        >
            <path
                fill="#818181"
                fillRule="evenodd"
                d="M50 25c0 13.807-11.193 25-25 25S0 38.807 0 25 11.193 0 25 0s25 11.193 25 25m-17.5-7.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0M25 46.25c4.46 0 8.6-1.374 12.017-3.722 1.51-1.037 2.155-3.012 1.277-4.62C36.476 34.576 32.727 32.5 25 32.5s-11.475 2.075-13.295 5.408c-.877 1.608-.232 3.583 1.277 4.62A21.15 21.15 0 0 0 25 46.25"
                clipRule="evenodd"
            />
        </svg>
    </div>
);
