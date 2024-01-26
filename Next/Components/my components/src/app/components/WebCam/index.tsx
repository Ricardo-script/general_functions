import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
    Container,
    AreaVideo,
    Video,
    Overlay,
    BodyDialog,
    Title,
    Description,
    AreaButtons,
} from "./styles";
import { Button } from "../Forms";
import { MdCamera } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";

type WebCamProps = {
    open: boolean;
    title: string;
    description: string;
    onClickCancel?: () => void;
    onTakePicture?: (file: File) => void;
    onTakeBase64?: (imageBase64: string) => void;
};

/**
 * Componente WebCam
 * @param open
 * @returns Abre o componente
 * @param title
 * @returns Título da funcionalidade ao qual sera realizada a função da câmera
 * @param description
 * @returns Descrição da funcionalidade ao qual será realizada a função da câmera
 * @param onClickCancel
 * @returns aborta e fecha componente
 * @param onTakePicture
 * @returns função disparada ao tirar foto retornando o arquivo File para envar ao servidor
 * onTakePicture={(image) => console.log("file", image)}
 * @param onTakeBase64
 * @returns função disparada ao tirar foto retornando um Base64 da imagem
 * a função recebe um parametro: onTakeBase64={(image) => console.log("image base64", image)}
 */

export const WebCam = ({
    open,
    title,
    description,
    onTakeBase64,
    onTakePicture,
    onClickCancel,
}: WebCamProps): JSX.Element | null => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [previewImage, setPreviewImage] = useState<string | null>(null);

    const startWebcam = async (): Promise<void> => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: true,
            });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
        } catch (err) {
            console.error("Erro ao acessar a webcam:", err);
        }
    };

    const takeSnapshot = (): void => {
        if (videoRef.current && canvasRef.current) {
            const video = videoRef.current;
            const canvas = canvasRef.current;

            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;

            const context = canvas.getContext("2d");
            if (context) {
                context.drawImage(video, 0, 0, canvas.width, canvas.height);
                const imageDataURL = canvas.toDataURL("image/png");
                setPreviewImage(imageDataURL);
                onTakeBase64 && onTakeBase64(imageDataURL);

                canvas.toBlob((blob) => {
                    if (blob) {
                        const file = new File([blob], "captured_image.png", {
                            type: "image/png",
                        });
                        onTakePicture && onTakePicture(file);
                    }
                }, "image/png");
            }
            stopWebcam();
        }
    };

    const stopWebcam = (): void => {
        const stream = videoRef.current?.srcObject as MediaStream;
        const tracks = stream?.getTracks();

        if (tracks) {
            tracks.forEach((track) => track.stop());
            videoRef.current!.srcObject = null;
        }
    };

    const onCancel = (): void => {
        stopWebcam();
        setPreviewImage(null);
        onClickCancel && onClickCancel();
    };

    const takeAnother = (): void => {
        setPreviewImage(null);
        startWebcam();
    };

    useEffect(() => {
        if (open) {
            startWebcam();
        }

        return () => {
            stopWebcam();
        };
    }, [open]);

    if (!open) {
        return null;
    }

    return (
        <Container>
            {previewImage !== null ? (
                <AreaVideo>
                    <Image src={previewImage} alt="" width={450} height={350} />
                </AreaVideo>
            ) : (
                <AreaVideo>
                    <Video
                        ref={videoRef}
                        width={450}
                        height={350}
                        autoPlay
                        playsInline
                    />
                    <Overlay $circleSize={320} />
                </AreaVideo>
            )}
            <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
            <BodyDialog>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </BodyDialog>

            {previewImage ? (
                <AreaButtons>
                    <Button
                        variant="outlined"
                        color="neutral"
                        iconLeft={<MdCamera color="#344054" size={18} />}
                        onClick={takeAnother}
                    >
                        Tirar Outra
                    </Button>
                    <Button
                        variant="contained"
                        color="success"
                        onClick={onCancel}
                        iconLeft={<AiFillLike color="#FFF" size={18} />}
                    >
                        Gostei, usar esta!
                    </Button>
                </AreaButtons>
            ) : (
                <AreaButtons>
                    <Button
                        variant="outlined"
                        color="neutral"
                        onClick={onCancel}
                    >
                        Cancelar
                    </Button>
                    <Button
                        variant="contained"
                        color="success"
                        iconLeft={<MdCamera color="#FFF" size={18} />}
                        onClick={takeSnapshot}
                    >
                        Tirar Foto
                    </Button>
                </AreaButtons>
            )}
        </Container>
    );
};
