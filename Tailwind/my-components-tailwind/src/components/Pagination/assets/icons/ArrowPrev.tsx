export type IconTypes = {
    props?: React.SVGProps<SVGSVGElement>;
    size?: number;
    color?: string;
};

export const ArrowPrev = ({
    size = 15,
    color = "#040404",
    props,
}: IconTypes) => (
    <svg width={size} height={size} fill="none" viewBox="0 0 9 14" {...props}>
        <path
            fill={color}
            stroke={color}
            strokeWidth={0.5}
            d="M.4 6.92 6.868.366 8.24 1.72 3.301 6.725l-.176.178.178.175 5.006 4.94-1.353 1.371z"
        />
    </svg>
);
