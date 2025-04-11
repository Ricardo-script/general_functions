type BoxPanelProps = {
    children: React.ReactNode;
    title?: string;
};

export const BoxPanel = ({ children, title }: BoxPanelProps) => {
    return (
        <section className="w-full bg-white rounded-2xl p-4 flex flex-col gap-4">
            <span className="text-sm text-[#2d3748] font-semibold">
                {title}
            </span>
            <div className={`overflow-auto w-full`}>{children}</div>
        </section>
    );
};
