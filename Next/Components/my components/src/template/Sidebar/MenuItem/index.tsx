"use client";

import { useState, useContext } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
    Container,
    Item,
    AreaItem,
    AreaIconItem,
    AreaIconArrow,
    Title,
    AreaTitle,
    PopHover,
    PopSubMenu,
    HoverSubMenu,
} from "./styles";
import { MdKeyboardArrowDown } from "react-icons/md";
import { SubMenu } from "../SubMenu";
import { SideBarTypes } from "..";

type MenuItemProps = {
    data: SideBarTypes;
    toggleMenu: boolean;
};

export const MenuItem = ({ data, toggleMenu }: MenuItemProps): JSX.Element => {
    const router = useRouter();
    const path = usePathname();
    const activeMenu = path === data.navigate;
    const [toggleSubMenu, setToggleSubMenu] = useState(false);

    const defineAction = (): void => {
        if (data.subMenu === undefined) {
            router.push(data.navigate);
        } else {
            setToggleSubMenu((prev) => !prev);
        }
    };

    return (
        <Container>
            <Item onClick={defineAction}>
                <AreaItem $activeMenu={activeMenu}>
                    <AreaIconItem>{data.icon && data.icon}</AreaIconItem>
                    <AreaTitle>
                        <Title $toggle={toggleMenu}>{data.name}</Title>
                    </AreaTitle>
                    {!toggleMenu && !data.subMenu && (
                        <PopHover>{data.name}</PopHover>
                    )}
                    {!toggleMenu && data.subMenu && (
                        <PopSubMenu>
                            {data.subMenu.map((subMenu, index) => (
                                <HoverSubMenu
                                    key={index}
                                    onClick={() =>
                                        router.push(subMenu.navigate)
                                    }
                                >
                                    {subMenu.subMenuTitle}
                                </HoverSubMenu>
                            ))}
                        </PopSubMenu>
                    )}
                    {data.subMenu && (
                        <AreaIconArrow $toggleSubMenu={toggleSubMenu}>
                            <MdKeyboardArrowDown color="#9e9e9e" />
                        </AreaIconArrow>
                    )}
                </AreaItem>
            </Item>
            <SubMenu
                toggleMenu={toggleMenu}
                toggleSubMenu={toggleSubMenu}
                subMenus={data.subMenu}
            />
        </Container>
    );
};
