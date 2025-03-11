import styled from 'styled-components';
import * as pallette from './pallette';

export const StyledCard = styled.div`
  border-radius: 0.5rem;
  border: 1px solid hsl(${pallette.__border});
  background-color: hsl(${pallette.__card});
  color: hsl(${pallette.__card_foreground});
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
`;

export const StyledCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  padding: 1.5rem;
`;

export const StyledCardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.025em;
`;

export const StyledCardDescription = styled.p`
  font-size: 0.875rem;
  color: hsl(${pallette.__muted_foreground});
`;

export const StyledCardContent = styled.div`
  padding: 1.5rem;
  padding-top: 0;
`;

export const StyledCardFooter = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  padding-top: 0;
`;
