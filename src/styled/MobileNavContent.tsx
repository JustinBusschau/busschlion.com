import styled from 'styled-components';
import * as pallette from './pallette';

export const MobileNavHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

export const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const MobileNavTitle = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: hsl(${pallette.__primary});
`;
