import { Home } from "./assets/icons";
import { usePathname } from "next/navigation";
import { SideBarTypes } from ".";
import { Arrow } from "./assets/icons";
import { SubItem } from "./SubItem";
import { useState } from "react";

type MenuItemProps = {
    data: SideBarTypes;
};

export const MenuItem = ({ data }: MenuItemProps) => {
    const [openSubMenu, setOpenSubMenu] = useState(false);

    const path = usePathname();
    const activeMenu = path === data.navigate;
    const colorActive =
        "bg-gradient-to-r from-[#3b7cdd49] to-[#3b7cdd7e]/0 after:absolute after:w-[5px] after:h-full after:bg-blue-500 after:left-0";
    const colorHover =
        "hover:bg-gradient-to-r from-[#3b7cdd49] to-[#3b7cdd7e]/0 relative hover:after:absolute hover:after:w-[5px] hover:after:h-full hover:after:bg-blue-500 hover:after:left-0";

    return (
        <div>
            <div
                className={`flex items-center gap-3 justify-between py-[10px] px-6 cursor-pointer select-none  active:bg-white/20 ${colorHover} ${
                    activeMenu && colorActive
                }`}
                onClick={() => data.subMenu && setOpenSubMenu((prev) => !prev)}
            >
                <div className="flex items-center gap-3">
                    <Home />
                    <span className="text-[#e9ecef] text-sm font-semibold">
                        {data.name}
                    </span>
                </div>
                {data.subMenu && (
                    <Arrow
                        className={`${
                            openSubMenu ? "rotate-180" : "rotate-0"
                        } transition ease-linear duration-300`}
                    />
                )}
            </div>
            {data.subMenu && <SubItem data={data.subMenu} open={openSubMenu} />}
        </div>
    );
};
