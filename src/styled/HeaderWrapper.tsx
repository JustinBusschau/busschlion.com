import styled from 'styled-components';
import * as pallette from './pallette';

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  border-bottom-width: 1px;
  background-color: hsl(${pallette.__background} / 0.95);
  -webkit-backdrop-filter: blur(8px);
  -moz-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);

  @supports (backdrop-filter: blur(8px)) {
    background-color: hsl(${pallette.__background} / 0.6);
  }

  nav {
    width: 100%;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 640px) {
      max-width: 640px;
      padding-left: 1rem;
      padding-right: 1rem;
    }
    @media (min-width: 768px) {
      max-width: 768px;
      padding-left: 1rem;
      padding-right: 1rem;
    }
    @media (min-width: 1024px) {
      max-width: 1024px;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
    @media (min-width: 1280px) {
      max-width: 1280px;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
    @media (min-width: 1536px) {
      max-width: 1536px;
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
`;

export default HeaderWrapper;
