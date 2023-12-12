import { useState, useRef, useContext } from 'react';
import { GlobalContext } from 'src/context/GlobalContext';
import {
    Container,
    AreaPhoto,
    AreaIcon,
    Photo,
    ContentVideo,
    AreaVideo,
    Video,
    AreaButtons,
    Overlay,
} from './styles';
import { AddPhoto, Camera } from 'src/assets/icons';
import { Button } from '../Forms';

export const WebCamCapture = (): JSX.Element => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [imageBase64, setImageBase64] = useState<string | null>(null);
    const [openModalCam, setOpenModalCam] = useState(false);
    const { setCapturedImageCam } = useContext(GlobalContext)


    const startWebcam = async () => {
        try {
            setOpenModalCam(true)
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
        } catch (err) {
            console.error('Erro ao acessar a webcam:', err);
        }
    };

    const takeSnapshot = () => {
        if (videoRef.current && canvasRef.current) {
            const video = videoRef.current;
            const canvas = canvasRef.current;

            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;

            const context = canvas.getContext('2d');
            if (context) {
                context.drawImage(video, 0, 0, canvas.width, canvas.height);
                const imageDataURL = canvas.toDataURL('image/png');
                setImageBase64(imageDataURL);

                canvas.toBlob((blob) => {
                    if (blob) {
                        const file = new File([blob], 'captured_image.png', { type: 'image/png' });
                        setCapturedImageCam(file);
                        console.log(file)
                    }
                }, 'image/png');
            }
        }
    };


    /*const clearSnapshot = () => {
        setImageData(null);
    };

    const stopWebcam = () => {
        const stream = videoRef.current?.srcObject as MediaStream;
        const tracks = stream?.getTracks();

        if (tracks) {
            tracks.forEach(track => track.stop());
            videoRef.current!.srcObject = null;
        }
    };*/

    return (
        <Container>
            <AreaPhoto>
                {imageBase64 !== null
                    ? <Photo src={imageBase64} alt="Preview" />
                    : <AddPhoto />
                }
                <AreaIcon onClick={startWebcam}>
                    <Camera />
                </AreaIcon>
            </AreaPhoto>
            {openModalCam &&
                <ContentVideo>
                    <AreaVideo>
                        <Video
                            ref={videoRef}
                            width="680"
                            height="520"
                            autoPlay
                            playsInline
                        />
                        <Overlay circleSize={450} />
                    </AreaVideo>
                    <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
                    <AreaButtons>
                        <Button
                            title='Cancelar'
                            type='secondary'
                            width={190}
                            onClick={() => setOpenModalCam(false)}
                        />
                        <Button
                            title='Capturar'
                            type='primary'
                            width={190}
                            onClick={takeSnapshot}
                        />
                    </AreaButtons>
                </ContentVideo>
            }
        </Container>
    );
};

