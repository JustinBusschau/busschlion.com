import styled from 'styled-components';
import * as pallette from './pallette';
import React from 'react';

export const StyledFormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const StyledFormLabel = styled.label`
  font-size: 1rem;
  font-weight: 600;
  color: hsl(${pallette.__foreground});
`;

export const StyledFormControl = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => (
  <div
    ref={ref}
    {...props}
    style={{ display: 'flex', flexDirection: 'column' }}
  />
));

export const StyledFormDescription = styled.p`
  font-size: 0.875rem;
  color: hsl(${pallette.__muted_foreground});
`;

export const StyledFormMessage = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  color: hsl(${pallette.__accent});
`;
