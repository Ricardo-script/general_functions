"use client";

import React, {
    useState,
    useRef,
    useImperativeHandle,
    useLayoutEffect,
    MutableRefObject,
} from "react";
import { ToastMessage } from "./ToastMessage";

export type ListTypes = "success" | "error" | "info" | "neutral" | "alert";

export type ToastProps = {
    message: string;
    id: number;
    time?: number;
    type?: ListTypes;
};

type ShowToast = Omit<ToastProps, "id">;

type ToastRef = {
    show: (data: ShowToast) => void;
};

export const ToastContainer = (): JSX.Element => {
    const [toasts, setToasts] = useState<ToastProps[]>([]);

    const toastRef = useRef<ToastRef>({
        show: () => {},
    });

    const handleShowToast = (data: ShowToast) => {
        setToasts((prevToasts) => [
            ...prevToasts,
            {
                id: Math.random(),
                message: data.message,
                time: data.time,
                type: data.type,
            },
        ]);
    };

    useImperativeHandle(toastRef, () => {
        return {
            show: handleShowToast,
        };
    });

    useLayoutEffect(() => {
        Toast.setToastRef(toastRef);
    }, []);

    return (
        <div>
            {toasts.length > 0 &&
                toasts.map((items, index) => (
                    <ToastMessage
                        key={items.id}
                        index={index}
                        message={items.message}
                        id={items.id}
                        time={items.time}
                        type={items.type}
                        onHide={() => {
                            setToasts((prev) => {
                                const filter = prev.filter(
                                    (item) => item.id !== items.id
                                );
                                return filter;
                            });
                        }}
                    />
                ))}
        </div>
    );
};

/**
 *  @description
 *  Para funcionar insira o ```<ToastContainer/>``` junto aos providers no layout
 *  como é criado com styled-components é obrigatório estar dentro de StyledComponentsRegistry
 *  @show
 *  Toast.show: mostra Toast
 *  @param show recebe message => { message: 'Enviando Toast' }
 *
 *  @param time
 *  @return Ao inserir o time ele fecha após ao valor inserido
 *
 *  @close
 *  Toast.close: fecha Toast
 *  @param close
 *  fecha toast
 *
 *  @example
 *
 *  import { Toast } from "@/components/Toast";
 *
 *  Toast.show({ message: "Sua mensagem!", time: 5000 })
 *
 *
 */

export class Toast {
    static toastRef: MutableRefObject<ToastRef>;

    static setToastRef(ref: MutableRefObject<ToastRef>) {
        this.toastRef = ref;
    }

    static show(data: ShowToast) {
        this.toastRef.current.show(data);
    }
}
