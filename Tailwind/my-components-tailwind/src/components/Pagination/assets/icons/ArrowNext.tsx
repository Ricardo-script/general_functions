export type IconTypes = {
    props?: React.SVGProps<SVGSVGElement>;
    size?: number;
    color?: string;
};

export const ArrowNext = ({
    size = 15,
    color = "#040404",
    props,
}: IconTypes) => (
    <svg width={size} height={size} fill="none" viewBox="0 0 9 14" {...props}>
        <path
            fill={color}
            stroke={color}
            strokeWidth={0.5}
            d="m8.229 6.866-6.513 6.512-1.362-1.363 4.972-4.972.177-.177-.177-.177L.354 1.716 1.716.354z"
        />
    </svg>
);
