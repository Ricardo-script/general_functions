import { useState } from "react";
import Image from "next/image";
import avatarMale from "./assets/images/avatar-male.png";
import { More } from "./assets/icons";

export const FooterSideBar = () => {
    const [openMoreOptions, setOpenMoreOptions] = useState(false);

    return (
        <div className="p-2 relative">
            <div
                className="flex bg-[#2d2f39] items-center justify-between p-2 rounded-lg cursor-pointer active:bg-slate-800 select-none"
                onClick={() => setOpenMoreOptions((prev) => !prev)}
            >
                <div className="flex items-center gap-2">
                    <div className="w-[42px] h-[42px] bg-[#757474] rounded-full flex items-center justify-center border-4 border-blue-500">
                        <Image src={avatarMale} alt="" quality={100} />
                    </div>
                    <div className="flex flex-col gap-[6px]">
                        <span className="text-[14px] text-white font-semibold">
                            Name Lorem
                        </span>
                        <span className="text-[11px] text-[#9e9e9e] font-semibold">
                            lorem@ipsum.com.br
                        </span>
                    </div>
                </div>
                <div className="w-fit cursor-pointer">
                    <More className="active:text-white" />
                </div>
            </div>
            {openMoreOptions && (
                <div className="absolute -top-6 -right-[200px] w-48 p-2 bg-[#2d2f39] cursor-pointer rounded-md animate-open-more-options hover:bg-[#404353] before:absolute before:-left-2 before:top-1/2 before:-translate-y-1/2 before:w-0 before:h-0 before:border-t-8 before:border-b-8 before:border-r-8 before:border-t-transparent before:border-b-transparent before:border-r-[#2d2f39] active:bg-slate-800 select-none">
                    <div className="flex items-center gap-3">
                        <More />
                        <span className="text-[#e9ecef] text-sm font-semibold">
                            Sair
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
};
