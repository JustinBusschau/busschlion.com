import * as React from 'react';
import styled from 'styled-components';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const StyledInput = styled.input`
  display: flex;
  height: 2.5rem;
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid var(--border-input);
  background-color: var(--background);
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  outline: none;
  transition: box-shadow 0.2s ease-in-out;

  &::placeholder {
    color: var(--text-muted-foreground);
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px var(--ring);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return <StyledInput type={type} ref={ref} {...props} />;
  }
);
Input.displayName = 'Input';

export { Input };
