import * as React from "react";
import type { SVGProps } from "react";

type IconTypes = {
    props?: SVGProps<SVGSVGElement>;
    className?: string;
};

export const Check = ({ className, ...props }: IconTypes) => {
    return (
        <div className={className}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 18 19"
                {...props}
            >
                <path d="M5.276 13.02 1.872 9.617 0 11.488l4.492 4.492.005-.005.82.82L18 4.113l-1.908-1.908z" />
            </svg>
        </div>
    );
};

// uso com hover e tamanho pela fonte:

<div className="flex flex-col gap-[14px]">
    <div className="flex items-center gap-3 cursor-pointer hover:text-red transition-all duration-300 group">
        <Check className="text-3 text-green group-hover:text-red" />
        <span className="group-hover:text-red text-black">
            Collect marketing data
        </span>
    </div>
    <div className="flex items-center gap-3 cursor-pointer ">
        <Check />
        <span>Design your emails</span>
    </div>
    <div className="flex items-center gap-3 cursor-pointer ">
        <Check />
        <span>Email campaigns & interactions</span>
    </div>
    <div className="flex items-center gap-3 cursor-pointer ">
        <Check />
        <span>View your customer’s profiles</span>
    </div>
</div>