"use client";

import React, { useState, useRef, useEffect } from "react";
import { PiSignatureDuotone } from "react-icons/pi";
import { GiBroom } from "react-icons/gi";
import { Button } from "../Forms";

type SignatureProps = {
    width?: number;
    height?: number;
    onSigningBase64Change?: (signin: string) => void;
    onSigningFileChange?: (signin: File) => void;
    removePullToReflesh?: boolean;
};

export const Signature: React.FC<SignatureProps> = ({
    width = 300,
    height = 170,
    onSigningBase64Change,
    onSigningFileChange,
    removePullToReflesh = false,
}) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [context, setContext] = useState<CanvasRenderingContext2D | null>(
        null
    );

    useEffect(() => {
        if (removePullToReflesh) {
            const preventPullToRefresh = (e: TouchEvent) => {
                e.preventDefault();
            };

            document.body.addEventListener("touchmove", preventPullToRefresh, {
                passive: false,
            });

            return () => {
                document.body.removeEventListener(
                    "touchmove",
                    preventPullToRefresh
                );
            };
        }
    }, [removePullToReflesh]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext("2d");
            if (ctx) {
                setContext(ctx);
                ctx.lineJoin = "round";
                ctx.lineCap = "round";
                ctx.lineWidth = 5;
                ctx.strokeStyle = "red"; // Alterando a cor para vermelho
            }
        }
    }, []);

    const getMouseCoordinates = (
        event:
            | React.MouseEvent<HTMLCanvasElement>
            | React.TouchEvent<HTMLCanvasElement>
    ) => {
        const rect = canvasRef.current?.getBoundingClientRect();
        if (!rect) return { x: 0, y: 0 };

        let x, y;
        if ("touches" in event.nativeEvent) {
            // É um evento de toque
            x = event.nativeEvent.touches[0].clientX - rect.left;
            y = event.nativeEvent.touches[0].clientY - rect.top;
        } else {
            // É um evento de mouse
            x = event.nativeEvent.clientX - rect.left;
            y = event.nativeEvent.clientY - rect.top;
        }

        return { x, y };
    };

    const startDrawing = (
        event:
            | React.MouseEvent<HTMLCanvasElement>
            | React.TouchEvent<HTMLCanvasElement>
    ) => {
        const { x, y } = getMouseCoordinates(event);

        if (context) {
            context.beginPath();
            context.moveTo(x, y);
            setIsDrawing(true);
        }
    };

    const draw = (
        event:
            | React.MouseEvent<HTMLCanvasElement>
            | React.TouchEvent<HTMLCanvasElement>
    ) => {
        const { x, y } = getMouseCoordinates(event);

        if (isDrawing && context) {
            context.lineTo(x, y);
            context.stroke();
        }
    };

    const stopDrawing = () => {
        setIsDrawing(false);
    };

    const clearDrawing = () => {
        if (context && canvasRef.current) {
            context.clearRect(
                0,
                0,
                canvasRef.current.width,
                canvasRef.current.height
            );
            onSigningBase64Change && onSigningBase64Change(""); // Limpar a base64
            onSigningFileChange && onSigningFileChange(new File([], "")); // Limpar o arquivo
        }
    };

    const base64toFile = (
        base64: string,
        filename: string,
        mimeType: string
    ): File => {
        const byteCharacters = atob(base64);
        const byteArrays = [];

        for (let offset = 0; offset < byteCharacters.length; offset += 512) {
            const slice = byteCharacters.slice(offset, offset + 512);

            const byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            const byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }

        const blob = new Blob(byteArrays, { type: mimeType });
        return new File([blob], filename, { type: mimeType });
    };

    const saveDrawing = () => {
        if (canvasRef.current) {
            const imageDataURL = canvasRef.current.toDataURL();
            onSigningBase64Change && onSigningBase64Change(imageDataURL);

            const file = base64toFile(
                imageDataURL.replace("data:image/png;base64,", ""),
                "signature.png",
                "image/png"
            );

            onSigningFileChange && onSigningFileChange(file);
        }
    };

    return (
        <div>
            <canvas
                ref={canvasRef}
                width={width}
                height={height}
                style={{
                    background: "#d3d1d1",
                    border: "1px solid #ccc",
                    display: "flex",
                    flexDirection: "column",
                }}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                onTouchStart={startDrawing}
                onTouchMove={draw}
                onTouchEnd={stopDrawing}
            />
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginTop: 15,
                }}
            >
                <Button
                    variant="outlined"
                    color="neutral"
                    onClick={clearDrawing}
                    iconLeft={<GiBroom size={19} color="#344054" />}
                >
                    Limpar
                </Button>
                <Button
                    onClick={saveDrawing}
                    iconLeft={<PiSignatureDuotone color="#fff" size={22} />}
                >
                    Salvar
                </Button>
            </div>
        </div>
    );
};
