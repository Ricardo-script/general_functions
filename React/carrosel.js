import { useState, useEffect } from "react";
import styled from "styled-components";

const items = [
    {
        image:
            "https://cdn.pixabay.com/photo/2023/12/08/23/46/cat-8438334_1280.jpg",
        text: "Texto da imagem 1",
    },
    {
        image:
            "https://cdn.pixabay.com/photo/2023/12/05/08/14/woman-8431035_1280.jpg",
        text: "Texto da imagem 2",
    },
    {
        image: "https://cdn.pixabay.com/photo/2023/10/08/14/18/red-stem-8302232_1280.jpg",
        text: "Texto da imagem 3"
    }
];

const CarouselContainer = styled.div`
  overflow: hidden;
  width: 100%;
  max-width: 600px;
  //margin: 0 auto; 
  position: relative;
`;

const CarouselSlide = styled.div`
  display: flex;
  transition: transform 1.5s ease;
`;

const SlideContent = styled.div`
  flex: 0 0 100%;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Text = styled.p`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  font-size: 18px;
  background: rgba(0, 0, 0, 0.5);
  padding: 8px;
  width: calc(100% - 40px);
  margin: 0; 
  z-index: 1; 
`;

export default function App(): JSX.Element {
    const [currentItem, setCurrentItem] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const newIndex = (currentItem + 1) % items.length;
            setCurrentItem(newIndex);
        }, 7000);

        return () => clearInterval(interval);
    }, [currentItem]);

    return (
        <CarouselContainer>
            <CarouselSlide style={{ transform: `translateX(-${currentItem * 100}%)` }}>
                {items.map((item, index) => (
                    <SlideContent key={index}>
                        <Image src={item.image} alt={`carousel-item-${index}`} />
                        <Text>{item.text}</Text>
                    </SlideContent>
                ))}
            </CarouselSlide>
        </CarouselContainer>
    );
}
