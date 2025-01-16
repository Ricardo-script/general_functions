import Image from "next/image";
import avatar from "@/assets/images/avatar.png";
import { Dialog, Heart, Share } from "@/assets/icons";

export const Card = () => {
    return (
        <div className="bg-white w-[360px] rounded-[20px] p-6 max-tablet:bg-orange-400 max-[600px]:w-[100%] max-[350px]:bg-[#040404]">
            <div className="flex gap-[10px]">
                <Image src={avatar} alt="avatar" />
                <div className="flex flex-col">
                    <span className="text-xl font-medium">Aline Fox</span>
                    <span className="text-[14px] text-silver">
                        Web development
                    </span>
                </div>
            </div>
            <div className="flex flex-col gap-[10px] py-6">
                <h2 className="text-[29px] font-bold leading-9">
                    Minim dolor in amet nulla laboris
                </h2>
                <span className="text-silverlight text-[17px]">
                    September 23, 2021
                </span>
                <p className="text-black text-[17px]">
                    Minim dolor in amet nulla laboris enim dolore consequat
                    proident fugiat culpa eiusmod...
                </p>
            </div>
            <div className="flex gap-[10px]">
                <div className="bg-red text-white font-medium text-xs py-[5px] px-[15px] w-fit rounded-[5px]">
                    React
                </div>
                <div className="bg-red text-white font-medium text-xs py-[5px] px-[15px] w-fit rounded-[5px]">
                    Javascript
                </div>
                <div className="bg-red text-white font-medium text-xs py-[5px] px-[15px] w-fit rounded-[5px]">
                    Angular
                </div>
            </div>
            <div className="flex justify-between py-6">
                <div className="text-base flex gap-3 hover:text-red cursor-pointer relative active:top-[1px] select-none">
                    <Heart />
                    20k
                </div>
                <div className="text-base flex gap-3 hover:text-red cursor-pointer relative active:top-[1px] select-none">
                    <Share />
                    34
                </div>
                <div className="text-base flex gap-3 hover:text-red cursor-pointer relative active:top-[1px] select-none">
                    <Dialog />
                    567
                </div>
            </div>
        </div>
    );
};
