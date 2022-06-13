import React from 'react';
import {Figure, Slides } from './styles';
import FotoProducao from '../../assets/img/FotoProducao.png';

export default function Carousel(){
    return(
        <Figure>
            <Slides>
                <input type="radio" name="radio-buttons" id="img-1" checked />
                <li class="slide-container">
                    <div class="slide-image">
                        <img src={FotoProducao} alt="" />
                    </div>

                    <div class="carousel-controls">
                        <label for="img-3" className="prev-slide">
                            <span>&lsaquo;</span>
                        </label>
                        <label for="img-2" className="next-slide">
                            <span>&rsaquo;</span>
                        </label>
                    </div>
                </li>

                <input type="radio" name="radio-buttons" id="img-2" checked />
                    <li class="slide-container">
                        <div class="slide-image">
                            <img src={FotoProducao} alt="" />
                        </div>

                        <div class="carousel-controls">
                            <label for="img-1" className="prev-slide">
                                <span>&lsaquo;</span>
                            </label>
                            <label for="img-3" className="next-slide">
                                <span>&rsaquo;</span>
                            </label>
                        </div>
                    </li>

                <input type="radio" name="radio-buttons" id="img-3" checked />
                <li class="slide-container">
                    <div class="slide-image">
                        <img src={FotoProducao} alt="" />
                    </div>

                    <div class="carousel-controls">
                        <label for="img-2" className="prev-slide">
                            <span>&lsaquo;</span>
                        </label>
                        <label for="img-1" className="next-slide">
                            <span>&rsaquo;</span>
                        </label>
                    </div>
                </li>

                <div className="carousel-dots">
                    <label for="img-1" className="carousel-dot" id="img-dot-1"></label>
                    <label for="img-2" className="carousel-dot" id="img-dot-2"></label>
                    <label for="img-3" className="carousel-dot" id="img-dot-3"></label>
                </div>
            </Slides>
        </Figure>
        
    );
}


//styles.js:

import styled from 'styled-components';

export const Figure = styled.figure`
    margin: 14px auto;
    display: block;
   
`;

export const Slides = styled.ul`
    display: block;
    position: relative;
    height: 600px;
    margin: 0;
    padding: 0;
    overflow: hidden;
    list-style: none;
    * {
        user-select: none;
    }
    input {
        display: none;
    }
    .slide-container { 
        display: block; 
    }
    .slide-image {
        display: block;
        position: absolute;
        top: 0;
        opacity: 0;
        transition: all .7s ease-in-out;
    }   
    .slide-image img {
        width:100%;
    }
    .carousel-controls {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 999;
        font-size: 100px;
        line-height: 600px;
        color: #fff;
    }
    .carousel-controls label {
        display: none;
        position: absolute;
        padding: 0 20px;
        opacity: 0;
        transition: opacity .2s;
        cursor: pointer;
    }
    .slide-image:hover + .carousel-controls label{
        opacity: 0.5;
    }
    .carousel-controls label:hover {
        opacity: 1;
    }
    .carousel-controls .prev-slide {
        width: 49%;
        text-align: left;
        left: 0;
    }
    .carousel-controls .next-slide {
        width: 49%;
        text-align: right;
        right: 0;
    }
    .carousel-dots {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 20px;
        z-index: 999;
        text-align: center;
    }
    .carousel-dots .carousel-dot {
        display: inline-block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #fff;
        opacity: 0.5;
        margin: 10px 10px 60px 10px;
    }
    input:checked + .slide-container .slide-image {
        opacity: 1;
        transform: scale(1);
        transition: opacity 1s ease-in-out;
    }
    input:checked + .slide-container .carousel-controls label {
        display: block; 
    }
    input#img-1:checked ~ .carousel-dots label#img-dot-1,
    input#img-2:checked ~ .carousel-dots label#img-dot-2,
    input#img-3:checked ~ .carousel-dots label#img-dot-3,
    input#img-4:checked ~ .carousel-dots label#img-dot-4,
    input#img-5:checked ~ .carousel-dots label#img-dot-5,
    input#img-6:checked ~ .carousel-dots label#img-dot-6 {
        opacity: 1;
    }
    input:checked + .slide-container .nav label { display: block; }
`;