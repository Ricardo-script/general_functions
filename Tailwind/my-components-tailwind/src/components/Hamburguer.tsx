type HamburguerProps = {
    open: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const Hamburguer = ({ open, ...rest }: HamburguerProps) => {
    return (
        <div className="flex flex-col gap-1 cursor-pointer" {...rest}>
            <div className="bg-[#161a23] w-6 h-[3px] rounded-lg"></div>
            <div className="bg-[#161a23] w-6 h-[3px] rounded-lg"></div>
            <div
                className={`bg-[#161a23] transition-all duration-300 ${
                    open ? "w-4" : "w-6"
                } h-[3px] rounded-lg`}
            ></div>
        </div>
    );
};
