import styled from 'styled-components';
import * as pallette from './pallette';

const NavLogoWrapper = styled.div`
  height: 2rem;
  width: 2rem;
  color: hsl(${pallette.__primary});
  padding: 0.25rem 0.1rem 0rem 0rem;
  background-color: hsl(${pallette.__logo_background});
  border-radius: 0.9rem;
`;

export default NavLogoWrapper;
