crie um hook useScrollPosition:


import { useState, useEffect } from 'react';

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPosition;
};


//-----------------------------------------------------------------------------------------------------------------

criar um arquivo chamado AnimatedDiv

import styled, { css } from 'styled-components';

interface AnimatedDivProps {
  inView: boolean;
  direction: 'left' | 'right' | 'up' | 'down';
}

const directionAnimation = {
  left: css`
    transform: translateX(-100%);
  `,
  right: css`
    transform: translateX(100%);
  `,
  up: css`
    transform: translateY(-100%);
  `,
  down: css`
    transform: translateY(100%);
  `,
};

export const AnimatedDiv = styled.div<AnimatedDivProps>`
  opacity: ${({ inView }) => (inView ? 1 : 0)};
  transform: ${({ inView }) => (inView ? 'translate(0, 0)' : 'none')};
  transition: transform 0.6s ease-out, opacity 0.6s ease-out;

  ${({ direction, inView }) => !inView && direction && directionAnimation[direction]};
`;

//--------------------------------------------------------------------------------------------------------------------


//arquivo ScrollAnimation.tsx

import React, { useState, useEffect, useRef } from 'react';
import { AnimatedDiv } from './AnimatedDiv'; // O styled component criado acima
import { useScrollPosition } from './useScrollPosition'; // O hook de scroll

interface ScrollAnimationProps {
  direction: 'left' | 'right' | 'up' | 'down';
  children: React.ReactNode;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ direction, children }) => {
  const scrollPosition = useScrollPosition();
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const elementTop = ref.current.getBoundingClientRect().top;
      const elementHeight = ref.current.getBoundingClientRect().height;
      const triggerPoint = window.innerHeight - elementHeight / 4;

      if (elementTop < triggerPoint) {
        setInView(true);
      } else {
        setInView(false);
      }
    }
  }, [scrollPosition]);

  return (
    <AnimatedDiv ref={ref} inView={inView} direction={direction}>
      {children}
    </AnimatedDiv>
  );
};

export default ScrollAnimation;


//----------------------------------------------------------------------------------------------------------------------


uso: 

import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const HomePage = () => {
  return (
    <div>
      <ScrollAnimation direction="left">
        <h1>Slide from Left</h1>
      </ScrollAnimation>
      <ScrollAnimation direction="right">
        <h1>Slide from Right</h1>
      </ScrollAnimation>
      <ScrollAnimation direction="up">
        <h1>Slide from Bottom</h1>
      </ScrollAnimation>
      <ScrollAnimation direction="down">
        <h1>Slide from Top</h1>
      </ScrollAnimation>
    </div>
  );
};

export default HomePage;
