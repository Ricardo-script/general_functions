"use client";

import { useState } from "react";
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
                    {!toggleMenu && <PopHover>{data.name}</PopHover>}
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
