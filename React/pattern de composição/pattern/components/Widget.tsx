import { Rocket } from "lucide-react";
import { Notification } from "./Notification";

export const Widget = () => {
    return (
        <div className="w-[448px] rounded overflow-hidden">
            {/* Herder */}
            <div className="bg-zinc-800 py-4 px-6 flex items-center justify-between">
                <span className="font-bold">Notificações</span>
                <button className="text-violet-500 font-bold text-xs hover:text-violet-400 active:relative active:top-[1px] active:opacity-50 duration-75">
                    MARCAR TODAS COMO
                </button>
            </div>
            <div>
                <div className="bg-zinc-950 px-5 py-2 text-sm text-zinc-400">
                    Recentes
                </div>
                <div className="divide-y-2 divide-zinc-950">
                    <Notification.Root>
                        <Notification.Icon icon={Rocket} />
                        <Notification.Content text="Você recebeu um convite para fazer parte da empresa Rocketseat." />
                        <Notification.Actions />
                    </Notification.Root>

                    <Notification.Root>
                        <Notification.Content text="Você recebeu um convite para fazer parte da empresa Rocketseat." />
                        <Notification.Actions />
                    </Notification.Root>
                </div>
            </div>
            <div>
                <div className="bg-zinc-950 px-5 py-2 text-sm text-zinc-400">
                    Antigas
                </div>
                <div className="divide-y-2 divide-zinc-950">
                    <Notification.Root>
                        <Notification.Icon icon={Rocket} />
                        <Notification.Content text="Você recebeu um convite para fazer parte da empresa Rocketseat." />
                    </Notification.Root>

                    <Notification.Root>
                        <Notification.Content text="Você recebeu um convite para fazer parte da empresa Rocketseat." />
                    </Notification.Root>
                </div>
            </div>
        </div>
    );
};
