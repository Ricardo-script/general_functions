'use client'

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

export const Signature: React.FC = () => {
    const canvasWidth = 300;
    const canvasHeight = 150;

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

    const [clickX, setClickX] = useState<number[]>([]);
    const [clickY, setClickY] = useState<number[]>([]);
    const [clickDrag, setClickDrag] = useState<boolean[]>([]);
    const [paint, setPaint] = useState<boolean>(false);

    const [previewImage, setPreviewImage] = useState<string | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext('2d');
            if (ctx) {
                setContext(ctx);
            }
        }
    }, []);

    const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
        const mouseX = e.pageX - (canvasRef.current?.offsetLeft || 0);
        const mouseY = e.pageY - (canvasRef.current?.offsetTop || 0);

        setPaint(true);
        addClick(mouseX, mouseY);
        redraw();
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
        if (paint) {
            const mouseX = e.pageX - (canvasRef.current?.offsetLeft || 0);
            const mouseY = e.pageY - (canvasRef.current?.offsetTop || 0);

            addClick(mouseX, mouseY, true);
            redraw();
        }
    };

    const handleMouseUp = () => {
        setPaint(false);
    };

    const handleMouseLeave = () => {
        setPaint(false);
    };

    const addClick = (x: number, y: number, dragging = false) => {
        setClickX([...clickX, x]);
        setClickY([...clickY, y]);
        setClickDrag([...clickDrag, dragging]);
    };

    const redraw = () => {
        if (context) {
            context.clearRect(0, 0, context.canvas.width, context.canvas.height);

            context.strokeStyle = '#df4b26';
            context.lineJoin = 'round';
            context.lineWidth = 5;

            for (let i = 0; i < clickX.length; i++) {
                context.beginPath();
                if (clickDrag[i] && i) {
                    context.moveTo(clickX[i - 1], clickY[i - 1]);
                } else {
                    context.moveTo(clickX[i] - 1, clickY[i]);
                }
                context.lineTo(clickX[i], clickY[i]);
                context.closePath();
                context.stroke();
            }
        }
    };

    const handleTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
        const touch = e.touches[0];
        const mouseEvent = new MouseEvent('mousedown', {
            clientX: touch.clientX,
            clientY: touch.clientY,
        });
        canvasRef.current?.dispatchEvent(mouseEvent);
    };

    const handleTouchEnd = () => {
        const mouseEvent = new MouseEvent('mouseup', {});
        canvasRef.current?.dispatchEvent(mouseEvent);
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
        const touch = e.touches[0];
        const mouseEvent = new MouseEvent('mousemove', {
            clientX: touch.clientX,
            clientY: touch.clientY,
        });
        canvasRef.current?.dispatchEvent(mouseEvent);
    };

    const handleTouchCancel = (e: React.TouchEvent<HTMLCanvasElement>) => {
        e.preventDefault();
    };

    const handleSave = () => {
        if (canvasRef.current) {
            const imageDataURL = canvasRef.current.toDataURL('image/png');
            setPreviewImage(imageDataURL);

            // Enviar a imagem para o servidor usando Axios
            /*axios.post('/api/saveImage', { imageDataURL })
              .then(response => {
                console.log('Imagem salva com sucesso!', response);
              })
              .catch(error => {
                console.error('Erro ao salvar a imagem:', error);
              });*/
        }
    };

    return (
        <div>
            <canvas
                ref={canvasRef}
                width={canvasWidth}
                height={canvasHeight}
                id="canvas"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onTouchMove={handleTouchMove}
                onTouchCancel={handleTouchCancel}
                style={{ background: '#fff' }}
            ></canvas>

            {previewImage && (
                <div>
                    <h3>Preview da Imagem</h3>
                    <Image src={previewImage} alt="Preview da Imagem" width={350} height={200} quality={100} />
                </div>
            )}

            <button onClick={handleSave}>Salvar Imagem</button>

        </div>
    );
};


