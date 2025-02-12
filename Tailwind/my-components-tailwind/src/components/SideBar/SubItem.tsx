import { SubMenuType } from ".";
import { Curve } from "./assets/icons";

type SubItemProps = {
    data: SubMenuType[];
    open: boolean;
};

export const SubItem = ({ data, open }: SubItemProps) => {
    return (
        <ul
            className={`flex flex-col gap-1 px-7 overflow-hidden ${
                open ? "max-h-[500px]" : "max-h-0"
            } transition-all ease-in-out duration-700 relative before:absolute before:w-[2px] before:h-[calc(100%-25px)] before:top-[5px] before:left-7 before:bg-slate-500`}
        >
            {data.map((subItem, index) => (
                <li key={index} className="flex items-center">
                    <Curve />
                    <div className="flex gap-1 hover:bg-gradient-to-r from-[#3b7cdd49] to-[#3b7cdd7e]/0 active:bg-white/20 rounded-md p-2 cursor-pointer select-none">
                        <span className="text-xs text-[#e9ecef] font-semibold">
                            {subItem.subMenuTitle}
                        </span>
                    </div>
                </li>
            ))}
        </ul>
    );
};
