import styled from 'styled-components';
import { motion } from 'framer-motion';
import * as pallette from './pallette';
import { Card } from '../components/ui/card';

export const ServicesSection = styled.section`
  padding: 6rem 1.5rem;

  @media (min-width: 640px) {
    padding: 8rem 1.5rem;
  }
`;

export const ServicesContainer = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  @media (min-width: 640px) {
    max-width: 640px;
  }
  @media (min-width: 768px) {
    max-width: 768px;
  }
  @media (min-width: 1024px) {
    max-width: 1024px;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  @media (min-width: 1280px) {
    max-width: 1280px;
  }
  @media (min-width: 1536px) {
    max-width: 1536px;
  }
`;

export const ServicesHeader = styled.div`
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

export const ServicesTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: hsl(${pallette.__primary});

  @media (min-width: 640px) {
    font-size: 2.25rem;
  }
`;

export const ServicesDescription = styled.p`
  margin-top: 1.5rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: hsl(${pallette.__muted_foreground});
`;

export const ServicesGrid = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 640px) {
    margin-top: 5rem;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ServiceCard = styled(motion.div)`
  height: 100%;
`;

export const StyledCard = styled(Card)`
  && {
    height: 100% !important;
    border: 2px solid hsl(${pallette.__primary}) !important;
    border-radius: 0.5rem !important;
    background-color: hsl(${pallette.__secondary_foreground} / 0.05) !important;
  }
`;
