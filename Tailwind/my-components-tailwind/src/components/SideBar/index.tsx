import { useContext, JSX } from "react";
import { GlobalContext } from "@/context/GlobalContext";
import Image from "next/image";
import logomin from "./assets/images/logo-min.png";
import { MenuItem } from "./MenuItem";
import { menu } from "@/constants/menu";
import { FooterSideBar } from "./FooterSideBar";

export type SubMenuType = {
    subMenuTitle: string;
    navigate: string;
};

export type SideBarTypes = {
    name: string;
    icon: JSX.Element;
    navigate: string;
    subMenu?: SubMenuType[];
};

export const Sidebar = () => {
    const { toggleSideBar } = useContext(GlobalContext);

    return (
        <aside
            className={`flex flex-col w-64 h-screen bg-[#161a23] transition-all duration-300 ${
                toggleSideBar ? "ml-0" : "-ml-64"
            }`}
        >
            {/* Cabeçalho */}
            <div className="flex items-center gap-3 p-3">
                <Image
                    src={logomin}
                    alt="logo"
                    style={{ width: "35px", height: "auto" }}
                    quality={100}
                />
                <span className="font-medium text-base text-white">
                    Loadcode
                </span>
            </div>

            {/* Lista */}
            <ul className="flex-1 flex flex-col gap-1 overflow-y-auto no-scrollbar">
                <li className="px-7 pt-4">
                    <span className="text-xs text-white/80">Menu</span>
                </li>
                {menu.map((item, index) => (
                    <li key={index}>
                        <MenuItem data={item} />
                    </li>
                ))}
            </ul>

            {/* Rodapé */}
            <FooterSideBar />
        </aside>
    );
};
