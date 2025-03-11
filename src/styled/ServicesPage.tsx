import styled from 'styled-components';
import * as pallette from './pallette';

export const ServicesContainer = styled.div`
  padding: 6rem 0;

  @media (min-width: 640px) {
    padding: 8rem 0;
  }
`;

export const ServicesInnerContainer = styled.div`
  margin: 0 auto;
  max-width: 80rem;
  padding: 0 1.5rem;

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

export const ServicesHeader = styled.div`
  margin: 0 auto;
  max-width: 42rem;
  text-align: center;
`;

export const ServicesTitle = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: hsl(${pallette.__foreground});

  @media (min-width: 640px) {
    font-size: 2.25rem;
  }
`;

export const ServicesDescription = styled.p`
  margin-top: 1.5rem;
  font-size: 1.125rem;
  line-height: 2rem;
  color: hsl(${pallette.__muted_foreground});
`;

export const ServicesGrid = styled.div`
  margin: 4rem auto 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 80rem;

  @media (min-width: 640px) {
    margin-top: 5rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
