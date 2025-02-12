import { JSX } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "./assets/icons";

type CrumbsTypes = {
    screen: string | JSX.Element;
    navigate: string;
};

type BreadCrumbsProps = {
    crumbs: CrumbsTypes[];
};

export const BreadCrumbs = ({ crumbs }: BreadCrumbsProps) => {
    const router = useRouter();

    return (
        <ul className="flex items-center gap-[3px] mb-3">
            {crumbs?.map((item, index) => (
                <div key={index} className="flex items-center gap-[3px]">
                    <li
                        className={`
                            ${
                                index === crumbs.length - 1
                                    ? "font-normal text-[#1f2733]"
                                    : ""
                            } text-xs text-[#818181] cursor-pointer select-none hover:underline active:text-zinc-400`}
                        onClick={() => router.push(item.navigate)}
                    >
                        {item.screen}
                    </li>
                    {index !== crumbs.length - 1 ? <ArrowRight /> : <></>}
                </div>
            ))}
        </ul>
    );
};
