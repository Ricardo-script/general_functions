import { Dispatch, SetStateAction } from "react";

export type GlobalContextTypes = {
    toggleSideBar: boolean;
    setToggleSideBar: Dispatch<SetStateAction<boolean>>;
};
