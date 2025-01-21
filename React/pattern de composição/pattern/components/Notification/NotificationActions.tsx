import { X, Check } from "lucide-react";

interface NotificationActionProps {
    onCancelAction?: () => void;
    onSubmitAction?: () => void;
}

export const NotificationActions = ({
    onSubmitAction,
    onCancelAction,
}: NotificationActionProps) => {
    return (
        <div className="flex gap-2 self-center">
            <button
                onClick={onCancelAction}
                className="w-8 h-8 rounded flex items-center justify-center bg-zinc-800"
            >
                <X className="w-3 h-3 text-zinc-50" />
            </button>
            <button
                onClick={onSubmitAction}
                className="w-8 h-8 rounded flex items-center justify-center bg-violet-500"
            >
                <Check className="w-3 h-3 text-zinc-50" />
            </button>
        </div>
    );
};
