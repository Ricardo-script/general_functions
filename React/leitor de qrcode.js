import { useRef, useEffect } from 'react';
import jsQR, { QRCode } from 'jsqr';

export function QRCodeReader(): JSX.Element {
    const videoRef = useRef<HTMLVideoElement>(null);
    const videoStream = useRef<MediaStream | null>(null);
	
	/* 
		const stopCamera = () => {
			if (videoStream.current) {
				videoStream.current.getTracks().forEach(track => track.stop());
			}
		};
	*/

    useEffect(() => {
        const handleQRCode = (qrCode: QRCode | null) => {
            if (qrCode) {
                console.log('QR code detectado:', qrCode.data);
                // Faça o que precisar com os dados do QR code
            }
        };

        const detectQRCode = () => {
            const video = videoRef.current;
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');

            if (!context || !video || !videoStream.current) return;

            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            context.drawImage(video, 0, 0, canvas.width, canvas.height);

            const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            const qrCode = jsQR(imageData.data, imageData.width, imageData.height);

            handleQRCode(qrCode);
        };

        if (videoRef.current) {
            navigator.mediaDevices
                .getUserMedia({ video: { facingMode: 'environment' } })
                .then((stream) => {
                    const video = videoRef.current!;
                    video.srcObject = stream;
                    video.play();
                    videoStream.current = stream;
                })
                .catch((error) => {
                    console.error('Error accessing the camera:', error);
                });

            const interval = setInterval(detectQRCode, 1000);

            return () => {
                clearInterval(interval);
                if (videoStream.current) {
                    videoStream.current.getTracks().forEach((track) => track.stop());
                }
            };
        }
    }, []);

    return <video ref={videoRef} />;
}

