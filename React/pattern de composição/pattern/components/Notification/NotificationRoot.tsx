import { ReactNode } from "react";

interface NotificationRootProps {
    children: ReactNode;
}

export const NotificationRoot = ({ children }: NotificationRootProps) => {
    return (
        <div className="bg-zinc-900 px-8 py-4 flex items-start gap-6">
            {children}
        </div>
    );
};
