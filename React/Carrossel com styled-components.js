import { useState } from "react";
import { Button, Form, Input } from "src/components/Forms";
import { CarouselContainer, CarouselContent, CarouselStage, Content, AreaTitle, Title, Span, AreaButtons } from "./styles";

export const ContentModalForgot = (): JSX.Element => {

    const [sliderIndex, setSliderIndex] = useState(0);

    const handlePrevSlide = () => {
        setSliderIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    };

    const handleNextSlide = () => {
        setSliderIndex((prevIndex) => (prevIndex === 0 ? 1 : prevIndex === 1 ? 2 : 0));
    };

    return (

        <CarouselContainer>
            <CarouselContent
                style={{ transform: `translateX(-${sliderIndex * 100}%)` }}
            >
                <CarouselStage>
                    <Content>
                        <AreaTitle>
                            <Title>Esqueceu a senha?{sliderIndex * 100}</Title>
                            <Span>
                                Enviaremos um código de validação para o e-mail selecionado
                                abaixo:
                            </Span>
                        </AreaTitle>
                        <Form>
                            <Input label="E-mail" type="email" placeholder="Digite o e-mail" />
                        </Form>
                    </Content>
                    <AreaButtons>
                        <Button
                            title="Confirmar"
                            type="primary"
                            width={125}
                            onClick={handleNextSlide}
                        />
                    </AreaButtons>
                </CarouselStage>

                <CarouselStage>
                    <Content>
                        <AreaTitle>
                            <Title>Esqueceu a senha? 2 {sliderIndex * 100}</Title>
                            <Span>
                                Enviaremos um código de validação para o e-mail selecionado
                                abaixo:
                            </Span>
                        </AreaTitle>
                        <Form>
                            <Input label="E-mail" type="email" placeholder="Digite o e-mail" />
                        </Form>
                    </Content>
                    <AreaButtons>
                        <Button
                            title="Confirmar"
                            type="primary"
                            width={125}
                            onClick={handleNextSlide}
                        />
                    </AreaButtons>
                </CarouselStage>

                <CarouselStage>
                    <Content>
                        <AreaTitle>
                            <Title>Esqueceu a senha? 3 {sliderIndex * 100}</Title>
                            <Span>
                                Enviaremos um código de validação para o e-mail selecionado
                                abaixo:
                            </Span>
                        </AreaTitle>
                        <Form>
                            <Input label="E-mail" type="email" placeholder="Digite o e-mail" />
                        </Form>
                    </Content>
                    <AreaButtons>
                        <Button
                            title="Confirmar"
                            type="primary"
                            width={125}
                            onClick={handlePrevSlide}
                        />
                    </AreaButtons>
                </CarouselStage>

            </CarouselContent>
        </CarouselContainer>

    );
}

// styles:

import styled from 'styled-components'

export const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const CarouselContent = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
`;

export const CarouselStage = styled.div`
  min-width: 100%;
`;

export const Stage = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
`;

export const Content = styled.div`
    padding: 0 84px;
    display: flex;
    flex-direction: column;
    gap: 32px;
`;

export const AreaTitle = styled.div`
   display: flex;
   flex-direction: column; 
   align-items: center;
   gap: 10px;
`;

export const Title = styled.span`
    color: ${({ theme }) => theme.colors.darkBlue_20};
    font-weight: 700;
    font-size: 25px;
    line-height: 18.75px;
`;

export const Span = styled.span`
    text-align: center;
    font-size: 16px;
    line-height: 18.75px;
    color: ${({ theme }) => theme.colors.darkBlue_50};
`;

export const AreaButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;


