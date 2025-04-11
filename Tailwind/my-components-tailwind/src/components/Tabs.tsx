import { JSX, useState } from "react";

export type TabsTypes = {
    nameTab: string;
    icon: JSX.Element;
    content: JSX.Element;
};

type DataProps = {
    data: TabsTypes[];
    width?: number;
    height?: number;
    activeTab?: number;
};

export const Tabs = ({
    data,
    width = 0,
    height = 0,
    activeTab = 0,
}: DataProps) => {
    const [selectTab, setSelectTab] = useState<number>(activeTab);

    return (
        <div
            className={`${
                width === 0 ? "w-full" : `w-[${width}px]`
            } select-none flex flex-col items-center justify-center overflow-hidden`}
        >
            {/* TabWrap */}
            <ul className="w-full relative flex">
                {/* Linha indicadora da aba ativa */}
                <div
                    className="absolute top-0 h-[3px] bg-[#4fd1c5] transition-all duration-500"
                    style={{
                        width: `${100 / data.length}%`,
                        left: `${(100 / data.length) * selectTab}%`,
                    }}
                />
                {/* Abas */}
                {data.map((tabs, index) => (
                    <li
                        key={tabs.nameTab}
                        className={`w-full ${
                            height === 0 ? "h-[53px]" : `h-[${height}px]`
                        } flex flex-col items-center justify-center gap-1 border border-[#282c2a19] ${
                            index === selectTab
                                ? "bg-white border-b-0"
                                : "bg-[#e7e7e7] border-b-[1px]"
                        } transition-colors duration-300 cursor-pointer ${
                            index !== data.length - 1 ? "border-r-0" : ""
                        }`}
                        onClick={() => setSelectTab(index)}
                    >
                        {/* Ícone */}
                        <div
                            className={`${
                                index === selectTab
                                    ? "text-[#4fd1c5]"
                                    : "text-[#74777b]"
                            } transition-colors duration-300`}
                        >
                            {tabs.icon}
                        </div>
                        {/* Título */}
                        <span
                            className={`uppercase tracking-wider font-bold text-xs ${
                                index === selectTab
                                    ? "text-[#4fd1c5]"
                                    : "text-[#74777b]"
                            } transition-colors duration-700`}
                        >
                            {tabs.nameTab}
                        </span>
                    </li>
                ))}
            </ul>
            {/* Conteúdo das abas com efeito de slide */}
            <div className="w-full h-auto bg-white overflow-hidden">
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${selectTab * 100}%)` }}
                >
                    {data.map((tab, index) => (
                        <div key={index} className="w-full flex-shrink-0">
                            {tab.content}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
