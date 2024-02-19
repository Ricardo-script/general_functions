"use client";

import { Tabs, TabsTypes } from "@/components/Tab";
//import { TabBottom } from "@/components/TabBottom";
import { IoHomeOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoCloudUploadOutline } from "react-icons/io5";

export default function ScreenTab(): JSX.Element {
    const dataTab: TabsTypes[] = [
        {
            nameTab: "Home",
            icon: <IoHomeOutline size={18} />,
            content: <span>1</span>,
        },
        {
            nameTab: "Upload",
            icon: <IoCloudUploadOutline size={18} />,
            content: <span>2</span>,
        },
        {
            nameTab: "Settings",
            icon: <IoSettingsOutline size={18} />,
            content: <span>3</span>,
        },
    ];

    return (
        <div>
            <Tabs data={dataTab} width={500} height={45} />
            {/*<TabBottom />*/}
        </div>
    );
}
