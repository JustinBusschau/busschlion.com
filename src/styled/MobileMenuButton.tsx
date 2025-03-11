import styled from 'styled-components';
import * as pallette from './pallette';

const MobileMenuButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.5rem;
  background: transparent;
  border: none;
  color: hsl(${pallette.__primary});
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: hsl(${pallette.__accent} / 0.1);
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export default MobileMenuButton;
