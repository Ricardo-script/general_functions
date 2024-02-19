"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Container, Tab, CicleSelected, Title, TabActivated } from "./styles";
import {
    IoHomeOutline,
    IoSearchOutline,
    IoChatboxEllipsesOutline,
    IoPersonAddOutline,
    IoPieChartOutline,
} from "react-icons/io5";

type DataTabBottom = {
    title: string;
    icon: JSX.Element;
    navigate: string;
};

type TabBottomProps = {
    notRender: string[];
};

const dataTabBottoms: DataTabBottom[] = [
    {
        title: "Message",
        icon: <IoChatboxEllipsesOutline size={20} />,
        navigate: "/ScreenTab",
    },
    {
        title: "Search",
        icon: <IoSearchOutline size={20} />,
        navigate: "/Cadastro",
    },
    {
        title: "Home",
        icon: <IoHomeOutline size={20} />,
        navigate: "/",
    },
    {
        title: "Usuários",
        icon: <IoPersonAddOutline size={20} />,
        navigate: "/Temp",
    },
    {
        title: "Dashboard",
        icon: <IoPieChartOutline size={20} />,
        navigate: "/ScreenTab",
    },
];

/**
 *
 * @param notRender
 * @returns notRender recebe um array contendo as telas que não vão ser renderizadas com
 * a TabBottom, inserindo com '/' ficando dessa forma: <TabBottom notRender={["/Temp"]} />
 * @example
 *
 * Para utilizar o TabBottom, deve inserir o componente dentro do layout.tsx
 * para que ele renderize em toda a aplicação, inserindo somente o array dentro
 * da prop notRender quais telas não deverão ser renderizadas
 */

export const TabBottom = ({
    notRender,
}: TabBottomProps): JSX.Element | undefined => {
    const router = useRouter();
    const path = usePathname();
    const actualPath = dataTabBottoms.findIndex((tab) => tab.navigate === path);
    const isNotRender = notRender.includes(path);
    const [tabActive, setTabActive] = useState<number>(actualPath);

    if (isNotRender) {
        return;
    }

    return (
        <Container>
            <TabActivated
                $active={tabActive}
                $totalItems={dataTabBottoms.length}
            />
            {dataTabBottoms.map((tabs, index) => (
                <Tab
                    key={index}
                    $totalItems={dataTabBottoms.length}
                    $active={tabActive}
                    $selected={tabActive === index}
                    onClick={() => {
                        setTabActive(index);
                        router.push(tabs.navigate);
                    }}
                >
                    {tabs.icon}
                    {tabActive === index && <CicleSelected />}
                    <Title $selected={tabActive === index}>{tabs.title}</Title>
                </Tab>
            ))}
        </Container>
    );
};
