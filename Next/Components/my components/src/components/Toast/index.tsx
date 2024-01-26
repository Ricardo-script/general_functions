"use client";

import React, {
    useState,
    useEffect,
    useRef,
    useImperativeHandle,
    useLayoutEffect,
    MutableRefObject,
    Fragment,
} from "react";
import { Container, AreaIcon, Body, Message, AreaClose } from "./styles";

type ToastProps = {
    message: string;
    id?: number;
};

type ToastRef = {
    show: (data: ToastProps) => void;
    close: (index: number) => void;
};

export const ToastContainer = (): JSX.Element => {
    const [toasts, setToasts] = useState<ToastProps[]>([]);

    const toastRef = useRef<ToastRef>({
        show: () => {},
        close: () => {},
    });

    const handleShowToast = (data: ToastProps) => {
        setToasts((prevToasts) => [
            ...prevToasts,
            { id: toasts.length + 1, message: data.message },
        ]);
    };

    useImperativeHandle(toastRef, () => {
        return {
            show: handleShowToast,
            close: closeSpecificToast,
        };
    });

    useLayoutEffect(() => {
        Toast.setToastRef(toastRef);
    }, []);

    const closeSpecificToast = (index: number): void => {
        setTimeout(() => {
            const allToasts = [...toasts];
            allToasts.splice(index, 1);
            setToasts(allToasts);
        }, 100);
    };

    const removeToast = (id: number) => {
        setToasts((prevToasts) =>
            prevToasts.filter((toast) => toast.id !== id)
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (toasts.length > 0) {
                removeToast(toasts[0].id || 0);
            }
        }, 1500);

        return () => clearInterval(interval);
    }, [toasts]);

    return (
        <div>
            {toasts.length > 0 &&
                toasts.map((items, index) => (
                    <Container key={index} index={index}>
                        <AreaIcon>
                            <span>x</span>
                        </AreaIcon>
                        <Body>
                            <Message>{items.message + " " + items.id}</Message>
                        </Body>
                        <AreaClose onClick={() => closeSpecificToast(index)}>
                            x
                        </AreaClose>
                    </Container>
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
 *  @close
 *  Toast.close: fecha Toast
 *  @param close
 *  fecha toast
 *
 */

export class Toast {
    static toastRef: MutableRefObject<ToastRef>;

    static setToastRef(ref: MutableRefObject<ToastRef>) {
        this.toastRef = ref;
    }

    static show(data: ToastProps) {
        this.toastRef.current.show(data);
    }

    static close(index: number) {
        this.toastRef.current.close(index);
    }
}
