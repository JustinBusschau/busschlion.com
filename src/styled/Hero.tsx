import styled from 'styled-components';
import { motion } from 'framer-motion';
import * as pallette from './pallette';

export const HeroContainer = styled.div`
  position: relative;
  width: 100vw;
  margin-left: 50%;
  transform: translateX(-50%);
  isolation: isolate;
  overflow: hidden;
  background: linear-gradient(
    90deg,
    hsl(${pallette.__primary} / 0.15) 0%,
    hsl(${pallette.__background}) 100%
  );
`;

export const HeroContent = styled.div`
  margin: 0 auto;
  max-width: 80rem;
  padding: 0 1.5rem;
  padding-bottom: 6rem;
  padding-top: 2.5rem;

  @media (min-width: 640px) {
    padding-bottom: 8rem;
  }

  @media (min-width: 1024px) {
    display: flex;
    padding: 0 2rem;
    padding-top: 10rem;
    padding-bottom: 10rem;
  }
`;

export const HeroTextContainer = styled(motion.div)`
  margin: 0 auto;
  max-width: 42rem;
  flex-shrink: 0;

  @media (min-width: 1024px) {
    margin: 0;
    max-width: 36rem;
    padding-top: 2rem;
  }
`;

export const HeroTitle = styled.h1`
  margin-top: 2.5rem;
  font-size: 2.25rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: hsl(${pallette.__primary});

  @media (min-width: 640px) {
    font-size: 3.75rem;
  }
`;

export const HeroDescription = styled.p`
  margin-top: 1.5rem;
  font-size: 1.125rem;
  line-height: 1.75;
  color: hsl(${pallette.__muted_foreground});
`;

export const HeroButtonContainer = styled.div`
  margin-top: 2.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const HeroLogoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 200px;
  margin-left: 1rem;

  @media (max-width: 1023px) {
    display: none;
  }
`;
