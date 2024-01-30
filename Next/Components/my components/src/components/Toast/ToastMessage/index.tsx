"use client";

import { useEffect, useCallback, useState } from "react";
import { Container, AreaIcon, Body, Message, AreaClose } from "./styles";
import { ToastProps } from "..";

type ActionsToastType = {
    onHide: () => void;
    index: number;
};

type ToastMessageProps = ToastProps & ActionsToastType;

export const ToastMessage = ({
    onHide,
    index,
    message,
    id,
    time = 5000,
}: ToastMessageProps) => {
    const [fade, setFade] = useState(true);

    const hideToast = useCallback(() => {
        setFade(false);
        setTimeout(() => {
            onHide();
        }, 300); //tempo de animação no css
    }, [onHide]);

    const animation = useCallback(() => {
        setTimeout(() => {
            hideToast();
        }, time);
    }, [hideToast, time]);

    useEffect(() => {
        animation();
    }, [animation]);

    return (
        <Container index={index} $fadeIn={fade}>
            <AreaIcon>
                <span>x</span>
            </AreaIcon>
            <Body>
                <Message>{message + " " + id}</Message>
            </Body>
            <AreaClose onClick={hideToast}>x</AreaClose>
        </Container>
    );
};
