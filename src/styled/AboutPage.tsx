import styled from 'styled-components';
import { motion } from 'framer-motion';
import * as pallette from './pallette';

export const AboutContainer = styled.div`
  padding: 6rem 0;

  @media (min-width: 640px) {
    padding: 8rem 0;
  }
`;

export const AboutInnerContainer = styled.div`
  margin: 0 auto;
  max-width: 80rem;
  padding: 0 1.5rem;

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

export const AboutHeader = styled(motion.div)`
  margin: 0 auto;
  max-width: 42rem;
  text-align: center;
`;

export const AboutTitle = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: hsl(${pallette.__foreground});

  @media (min-width: 640px) {
    font-size: 2.25rem;
  }
`;

export const AboutDescription = styled.p`
  margin-top: 1.5rem;
  font-size: 1.125rem;
  line-height: 2rem;
  color: hsl(${pallette.__muted_foreground});
`;

export const AboutSection = styled.div`
  margin-top: 5rem;
`;

export const AboutSectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: hsl(${pallette.__foreground});
  margin-bottom: 2rem;
`;

export const AboutSectionText = styled.p`
  font-size: 1.125rem;
  color: hsl(${pallette.__muted_foreground});
`;

export const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ValueCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const ValueIcon = styled.div`
  margin-bottom: 1rem;
  color: hsl(${pallette.__primary});

  svg {
    width: 3rem;
    height: 3rem;
  }
`;

export const ValueTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: hsl(${pallette.__foreground});
`;

export const ValueDescription = styled.p`
  margin-top: 0.5rem;
  color: hsl(${pallette.__muted_foreground});
`;
