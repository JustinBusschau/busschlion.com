import * as React from 'react';
import styled, { css, keyframes } from 'styled-components';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import * as pallette from './pallette';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const slideInFromRight = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;

const slideOutToRight = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(100%); }
`;

const slideInFromLeft = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`;

const slideOutToLeft = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
`;

const slideInFromTop = keyframes`
  from { transform: translateY(-100%); }
  to { transform: translateY(0); }
`;

const slideOutToTop = keyframes`
  from { transform: translateY(0); }
  to { transform: translateY(-100%); }
`;

const slideInFromBottom = keyframes`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`;

const slideOutToBottom = keyframes`
  from { transform: translateY(0); }
  to { transform: translateY(100%); }
`;

export const StyledOverlay = styled(SheetPrimitive.Overlay)`
  position: fixed;
  inset: 0;
  z-index: 50;
  background-color: rgb(0 0 0 / 0.8);

  &[data-state='open'] {
    animation: ${fadeIn} 500ms ease-out;
  }

  &[data-state='closed'] {
    animation: ${fadeOut} 300ms ease-in;
  }
`;

interface SheetContentProps {
  $side?: 'top' | 'bottom' | 'left' | 'right';
}

export const StyledContent = styled(SheetPrimitive.Content)<SheetContentProps>`
  position: fixed;
  z-index: 50;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: hsl(${pallette.__background});
  padding: 1.5rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  transition: all 0.3s ease-in-out;

  ${props => {
    switch (props.$side) {
      case 'top':
        return css`
          inset-inline: 0;
          top: 0;
          border-bottom: 1px solid hsl(${pallette.__border});
          &[data-state='open'] {
            animation: ${slideInFromTop} 500ms ease-out;
          }
          &[data-state='closed'] {
            animation: ${slideOutToTop} 300ms ease-in;
          }
        `;
      case 'bottom':
        return css`
          inset-inline: 0;
          bottom: 0;
          border-top: 1px solid hsl(${pallette.__border});
          &[data-state='open'] {
            animation: ${slideInFromBottom} 500ms ease-out;
          }
          &[data-state='closed'] {
            animation: ${slideOutToBottom} 300ms ease-in;
          }
        `;
      case 'left':
        return css`
          inset-block: 0;
          left: 0;
          height: 100%;
          width: 75%;
          max-width: 24rem;
          border-right: 1px solid hsl(${pallette.__border});
          &[data-state='open'] {
            animation: ${slideInFromLeft} 500ms ease-out;
          }
          &[data-state='closed'] {
            animation: ${slideOutToLeft} 300ms ease-in;
          }
        `;
      default:
        return css`
          inset-block: 0;
          right: 0;
          height: 100%;
          width: 75%;
          max-width: 24rem;
          border-left: 1px solid hsl(${pallette.__border});
          &[data-state='open'] {
            animation: ${slideInFromRight} 500ms ease-out;
          }
          &[data-state='closed'] {
            animation: ${slideOutToRight} 300ms ease-in;
          }
        `;
    }
  }}
`;

export const StyledCloseButton = styled(SheetPrimitive.Close)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.5rem;
  position: absolute;
  right: 1rem;
  top: 1rem;
  background: transparent;
  border: none;
  color: hsl(${pallette.__primary});
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: hsl(${pallette.__accent} / 0.1);
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: center;

  @media (min-width: 640px) {
    text-align: left;
  }
`;

export const StyledFooter = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: flex-end;
    gap: 0.5rem;
  }
`;

export const StyledTitle = styled(SheetPrimitive.Title)`
  font-size: 1.125rem;
  font-weight: 600;
  color: hsl(${pallette.__foreground});
`;

export const StyledDescription = styled(SheetPrimitive.Description)`
  font-size: 0.875rem;
  color: hsl(${pallette.__muted_foreground});
`;
