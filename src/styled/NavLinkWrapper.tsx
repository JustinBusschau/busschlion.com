import styled from 'styled-components';
import * as pallette from './pallette';

// className="md:flex items-center space-x-8"
const NavLinkWrapper = styled.div`
  display: none;
  align-items: center;
  gap: 2rem;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export default NavLinkWrapper;
