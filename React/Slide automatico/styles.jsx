import styled, { keyframes } from "styled-components";


const slide = () => keyframes`
    0% {
        transform: translateX(0%);
    }

    12.5% {
        transform: translateX(0%);
    }

    25% {
        transform: translateX(-25%);
    }

    37.5% {
        transform: translateX(-25%);
    }

    50% {
        transform: translateX(-50%);
    }

    62.5% {
        transform: translateX(-50%);
    }

    75% {
        transform: translateX(-75%);
    }

    87.5% {
        transform: translateX(-75%);
    }

    99% {
        transform: translateX(-75%);
    }

    100% {
        transform: translateX(-25%);
    }
`;

export const CarrosselMascara = styled.section`
    width: 600px;
    /* tem a mesma largura das imagens*/
    margin: 0 auto;
    overflow: hidden;
    font-size: 0;
    /* para remover o espaço entre elementos-filho marcados como inline-block*/
`;

export const CarrosselContainer = styled.div`
     width: 2400px;
    /* a soma da largura de todos os elementos */
    transition: 1s ease;
    height: 337px;
    /* tem a mesma altura das imagens */

    img{
        width: 600px;
        height: auto;
        display: inline-block;
        vertical-align: top;
        font-size: 16px;
        margin: 0 auto;
    }

    &.slide {
        animation: ${slide} 20s ease infinite;
    }

    &:hover {
        animation-play-state: paused;
    }

`;

export const CarrosselTexto = styled.div`
        width: 600px;
        display: inline-block;
        vertical-align: top;
        font-size: 16px;
        margin: 0 auto;
        height: 337px;
        position: relative;

        p{
            position: relative;
            text-align: center;
        }

`;



