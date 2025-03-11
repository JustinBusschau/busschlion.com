import styled, { css } from 'styled-components';
import * as pallette from './pallette';

const baseButtonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  white-space: nowrap;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: colors 0.2s;

  &:focus-visible {
    outline: none;
    ring: 2px;
    ring-offset: 2px;
    ring-color: hsl(${pallette.__ring});
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  svg {
    pointer-events: none;
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
  }
`;

const variantStyles = {
  default: css`
    background-color: hsl(${pallette.__primary});
    color: hsl(${pallette.__primary_foreground});
    &:hover {
      background-color: hsl(${pallette.__primary} / 0.9);
    }
  `,
  destructive: css`
    background-color: hsl(${pallette.__destructive});
    color: hsl(${pallette.__destructive_foreground});
    &:hover {
      background-color: hsl(${pallette.__destructive} / 0.9);
    }
  `,
  outline: css`
    border: 1px solid hsl(${pallette.__input});
    background-color: hsl(${pallette.__background});
    &:hover {
      background-color: hsl(${pallette.__accent});
      color: hsl(${pallette.__accent_foreground});
    }
  `,
  secondary: css`
    background-color: hsl(${pallette.__secondary});
    color: hsl(${pallette.__secondary_foreground});
    &:hover {
      background-color: hsl(${pallette.__secondary} / 0.8);
    }
  `,
  ghost: css`
    &:hover {
      background-color: hsl(${pallette.__accent});
      color: hsl(${pallette.__accent_foreground});
    }
  `,
  link: css`
    color: hsl(${pallette.__primary});
    text-decoration: underline;
    text-underline-offset: 4px;
    &:hover {
      text-decoration: none;
    }
  `,
};

const sizeStyles = {
  default: css`
    height: 2.5rem;
    padding: 0.5rem 1rem;
  `,
  sm: css`
    height: 2.25rem;
    padding: 0 0.75rem;
  `,
  lg: css`
    height: 2.75rem;
    padding: 0 2rem;
  `,
  icon: css`
    height: 2.5rem;
    width: 2.5rem;
  `,
};

interface StyledButtonProps {
  $variant?: keyof typeof variantStyles;
  $size?: keyof typeof sizeStyles;
}

export const StyledButton = styled.button<StyledButtonProps>`
  ${baseButtonStyles}
  ${props => props.$variant && variantStyles[props.$variant]}
  ${props => props.$size && sizeStyles[props.$size]}
`;
