import { CloseDialog } from "./icons/CloseDialog";
import { JSX } from "react";

type ModalProps = {
    open: boolean;
    onClose?: () => void;
    title?: string;
    description?: string;
    icon?: JSX.Element;
    children: React.ReactNode;
};

export const Modal = ({
    open,
    onClose,
    children,
    title,
    description,
    icon,
}: ModalProps) => {
    if (!open) {
        return null;
    }

    return (
        <div className="w-[500px] max-[576px]:w-[90%] h-fit bg-white rounded-xl p-6 flex flex-col gap-4 animate-scale-up transform scale-50 absolute top-0 left-0 right-0 bottom-0 m-auto shadow-lg z-20">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    {icon && (
                        <div className="w-[75px] h-[48px] border border-[#e4e7ec] rounded-lg flex items-center justify-center">
                            {icon}
                        </div>
                    )}
                    <div className="flex flex-col gap-1 px-1">
                        <span className="text-lg font-semibold text-[#101828]">
                            {title}
                        </span>
                        <span className="text-sm text-[#475467]">
                            {description}
                        </span>
                    </div>
                </div>
                <div
                    className="w-[25px] h-[25px] flex items-center justify-center cursor-pointer active:relative active:top-[1px]"
                    onClick={onClose}
                >
                    <CloseDialog />
                </div>
            </div>
            <hr className="w-full border-t border-[#e4e7ec]" />
            {children}
        </div>
    );
};
