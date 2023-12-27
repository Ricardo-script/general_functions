// src/components/ImageCarousel

import { useState, useEffect } from 'react';
import styled from 'styled-components';

const ImageCarouselContainer = styled.div`
  width: 500px;
  height: 400px;
  position: relative;
  overflow: hidden;
`;

const TextOverlay = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px;
  border-radius: 5px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.5s ease-in-out;
  position: absolute;
`;

interface CarouselImage {
    text: string;
    image: string;
}

interface ImageCarouselProps {
    images: CarouselImage[];
}

export const ImageCarousel = ({ images }: ImageCarouselProps) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <ImageCarouselContainer>
            {images.map((image, index) => (
                <Image
                    key={index}
                    src={image.image}
                    alt={`Image ${index + 1}`}
                    style={{ opacity: index === currentImageIndex ? 1 : 0 }}
                />
            ))}
            <TextOverlay>
                {images[currentImageIndex].text}
            </TextOverlay>
        </ImageCarouselContainer>
    );
};

//---------------------------------------------------------------------------------------------------------------------------

//chamada:


import { ImageCarousel } from "./components/ImageCarousel";

const App = () => {

    const images = [
        {
            text: 'Texto da Imagem 1',
            image:
                'https://ununsplash.imgix.net/uploads/141223808515744db9995/3361b5e1?q=75&fm=jpg&w=602',
        },
        {
            text: 'Imagem 2',
            image:
                'https://unsplash.imgix.net/photo-1415356838286-df6fd593e8b3?q=75&fm=jpg&w=600',
        },
        {
            text: 'Imagem 3',
            image:
                'https://ununsplash.imgix.net/reserve/JaI1BywIT5Or8Jfmci1E_zakopane.jpg?q=75&fm=jpg&w=600',
        },
    ];

    return (
        <div>
            <h1>Image Carousel</h1>
            <ImageCarousel images={images} />
        </div>
    );
};

export default App;
