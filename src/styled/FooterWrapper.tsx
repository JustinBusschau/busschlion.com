import styled from 'styled-components';
import * as pallette from './pallette';

export const FooterContainer = styled.footer`
  position: relative;
  width: 100vw;
  margin-left: 50%;
  transform: translateX(-50%);
  isolation: isolate;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    hsl(${pallette.__background}) 0%,
    hsl(${pallette.__primary} / 0.15) 100%
  );
  border-top-width: 1px;
`;

export const FooterContent = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 4rem 1.5rem;
  max-width: 80rem;

  @media (min-width: 640px) {
    max-width: 640px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  @media (min-width: 768px) {
    max-width: 768px;
  }
  @media (min-width: 1024px) {
    padding: 6rem 2rem;
  }
  @media (min-width: 1280px) {
    max-width: 1280px;
  }
  @media (min-width: 1536px) {
    max-width: 1536px;
  }
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const FooterBrand = styled.div`
  grid-column: 1 / -1;

  @media (min-width: 768px) {
    grid-column: 1 / 3;
  }
`;

export const FooterTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: hsl(${pallette.__primary});
`;

export const FooterDescription = styled.p`
  margin-top: 1rem;
  color: hsl(${pallette.__muted_foreground});
`;

export const FooterSection = styled.div`
  h3 {
    font-size: 0.875rem;
    font-weight: 600;
    color: hsl(${pallette.__foreground});
  }
`;

export const FooterList = styled.ul`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FooterLink = styled.a`
  color: hsl(${pallette.__muted_foreground});
  transition: color 0.2s ease-in-out;

  &:hover {
    color: hsl(${pallette.__primary});
  }
`;

export const FooterText = styled.li`
  color: hsl(${pallette.__muted_foreground});
`;

export const FooterDivider = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top-width: 1px;
`;

export const FooterCopyright = styled.p`
  font-size: 0.875rem;
  color: hsl(${pallette.__muted_foreground});
  text-align: center;
`;
