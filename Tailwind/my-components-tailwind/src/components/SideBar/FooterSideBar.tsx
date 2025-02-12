import Image from "next/image";
import avatarMale from "./assets/images/avatar-male.png";
import { More } from "./assets/icons";

export const FooterSideBar = () => {
    return (
        <div className="p-2">
            <div className="flex bg-[#2d2f39] items-center justify-between p-2 rounded-lg">
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
        </div>
    );
};
