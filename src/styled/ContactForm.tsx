import styled from 'styled-components';
import * as pallette from './pallette';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

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

export const StyledFormControl = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledFormMessage = styled.div`
  font-size: 0.875rem;
  color: hsl(${pallette.__accent});
`;

export const StyledInput = styled.input`
  padding: 0.75rem;
  border: 1px solid hsl(${pallette.__border});
  border-radius: 0.375rem;
  font-size: 1rem;
  color: hsl(${pallette.__foreground});
  background-color: hsl(${pallette.__background});

  &:focus {
    outline: none;
    border-color: hsl(${pallette.__primary});
  }
`;

export const StyledTextarea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid hsl(${pallette.__border});
  border-radius: 0.375rem;
  font-size: 1rem;
  color: hsl(${pallette.__foreground});
  background-color: hsl(${pallette.__background});
  min-height: 120px;

  &:focus {
    outline: none;
    border-color: hsl(${pallette.__primary});
  }
`;
