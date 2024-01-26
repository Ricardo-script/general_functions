"use client";

import { useState } from "react";
import { Logo, More } from "@/assets/icons";
import {
    Container,
    Menu,
    HeaderAside,
    Divider,
    Title,
    AreaLogo,
    IconLogo,
    AreaMenu,
    AreaTitle,
    TitleHeader,
    AreaIcon,
    MenuFooter,
    ItemFooter,
    AreaInfoUser,
    AreaLogoUser,
    LogoUser,
    Name,
    Email,
    Options,
} from "./styles";
import { HiOutlineUser } from "react-icons/hi2";
import { IoCalendarClearOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { LuConciergeBell } from "react-icons/lu";
import { MenuItem } from "./MenuItem";
import avatar from "@/assets/images/avatar.png";

export type SideBarTypes = {
    name: string;
    icon: JSX.Element;
    navigate: string;
};
// utils/constantes
export const menu: SideBarTypes[] = [
    {
        name: "Painel inicial",
        icon: <IoHomeOutline size={18} color="#FFF" />,
        navigate: "/",
    },
    {
        name: "Usuários",
        icon: <HiOutlineUser size={18} color="#FFF" />,
        navigate: "/Usuarios",
    },
    {
        name: "Portaria",
        icon: <LuConciergeBell size={18} color="#FFF" />,
        navigate: "/Portaria",
    },
    {
        name: "Pedidos",
        icon: <IoCalendarClearOutline size={18} color="#FFF" />,
        navigate: "/Pedidos",
    },
];

export const Sidebar = (): JSX.Element => {
    const [toggleMenu, setToggleMenu] = useState(true);

    return (
        <Container $toggle={toggleMenu}>
            <Menu $toggle={toggleMenu}>
                <HeaderAside>
                    <AreaLogo $toggle={toggleMenu}>
                        <IconLogo>
                            <Logo />
                        </IconLogo>
                        <AreaTitle>
                            <TitleHeader>Nome Logo</TitleHeader>
                        </AreaTitle>
                    </AreaLogo>
                    <AreaIcon
                        onClick={() => setToggleMenu((prev) => !prev)}
                        $toggle={toggleMenu}
                    >
                        <IoIosArrowForward color="#FFF" />
                    </AreaIcon>
                </HeaderAside>
                <AreaMenu>
                    <Divider />
                    <Title>Menu</Title>
                    {menu.map((items, index) => (
                        <MenuItem
                            key={index}
                            icon={items.icon}
                            title={items.name}
                            navigate={items.navigate}
                            toggleMenu={toggleMenu}
                        />
                    ))}
                </AreaMenu>
                <MenuFooter>
                    <Divider />
                    <ItemFooter>
                        <AreaLogoUser>
                            <LogoUser src={avatar} alt="" />
                        </AreaLogoUser>
                        <AreaInfoUser $toggle={toggleMenu}>
                            <Name>Name</Name>
                            <Email>Email</Email>
                        </AreaInfoUser>
                        <Options $toggle={toggleMenu}>
                            <More />
                        </Options>
                    </ItemFooter>
                </MenuFooter>
            </Menu>
        </Container>
    );
};
