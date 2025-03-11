import * as React from 'react';
import styled from 'styled-components';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const StyledTextarea = styled.textarea`
  display: flex;
  min-height: 80px;
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

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return <StyledTextarea ref={ref} {...props} />;
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
