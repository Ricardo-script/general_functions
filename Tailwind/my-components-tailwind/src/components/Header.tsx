import { useContext } from "react";
import { GlobalContext } from "@/context/GlobalContext";
import { Hamburguer } from "./Hamburguer";

type HeaderProps = {
    title?: string;
};

export const Header = ({ title }: HeaderProps) => {
    const { setToggleSideBar, toggleSideBar } = useContext(GlobalContext);

    return (
        <header className="w-full h-[60px] bg-[#dfdfdf] shadow-100 relative flex items-center gap-10 px-4">
            <Hamburguer
                open={toggleSideBar}
                onClick={() => setToggleSideBar((prev) => !prev)}
            />
            <span>{title}</span>
        </header>
    );
};
