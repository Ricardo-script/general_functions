"use client";

import { useRouter, usePathname } from "next/navigation";
import { AreaSubMenu, AreaIconItem, AreaTitle, Title } from "./styles";
import { SubMenuType } from "..";
import { Curve } from "@/assets/icons";

type SubMenuProps = {
    toggleMenu: boolean;
    toggleSubMenu: boolean;
    subMenus: SubMenuType[] | undefined;
};

export const SubMenu = ({
    toggleMenu,
    toggleSubMenu,
    subMenus,
}: SubMenuProps): JSX.Element | null => {
    const router = useRouter();
    const path = usePathname();

    if (subMenus) {
        return (
            <AreaSubMenu
                $toggleSubMenu={toggleSubMenu}
                $toggleMenu={toggleMenu}
            >
                {subMenus.map((subMenu, index) => (
                    <AreaTitle key={index}>
                        <AreaIconItem>
                            <Curve />
                        </AreaIconItem>
                        <Title
                            $activeMenu={path === subMenu.navigate}
                            onClick={() => router.push(subMenu.navigate)}
                        >
                            {subMenu.subMenuTitle}
                        </Title>
                    </AreaTitle>
                ))}
            </AreaSubMenu>
        );
    } else {
        return null;
    }
};
