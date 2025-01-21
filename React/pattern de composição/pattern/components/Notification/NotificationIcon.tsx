import { ElementType } from "react";

interface NotificationProps {
    icon: ElementType;
}

export const NotificationIcon = ({ icon: Icon }: NotificationProps) => {
    return <Icon className="w-6 h-6 text-violet-500 mt-4" />;
};
