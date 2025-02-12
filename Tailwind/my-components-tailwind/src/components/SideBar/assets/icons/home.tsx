import { IconTypes } from ".";

export const Home = ({ className, props }: IconTypes) => (
    <div className={className}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="none"
            viewBox="0 0 20 20"
            {...props}
        >
            <path
                stroke="#fff"
                strokeLinejoin="round"
                strokeWidth={1.489}
                d="M3.54 5.042C6.171 2.41 7.487 1.093 9.08.841a5 5 0 0 1 1.554 0c1.593.252 2.91 1.569 5.542 4.201 1.146 1.146 1.72 1.72 2.076 2.42q.177.348.298.72c.243.748.243 1.558.243 3.179v4.242a2.979 2.979 0 1 1-5.957 0v-.993a2.979 2.979 0 0 0-5.957 0v.993a2.979 2.979 0 0 1-5.957 0V11.36C.92 9.741.92 8.93 1.164 8.181q.12-.37.298-.719c.357-.7.93-1.274 2.076-2.42Z"
            />
        </svg>
    </div>
);
