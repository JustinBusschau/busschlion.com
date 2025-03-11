import styled from 'styled-components';
import * as pallette from './pallette';

const HeroName = styled.span`
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
  color: hsl(${pallette.__primary});
  text-decoration: none;
  padding: 0.5rem;
  letter-spacing: 0.025em;
`;

export default HeroName;
