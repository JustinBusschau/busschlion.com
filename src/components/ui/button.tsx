import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { StyledButton } from '../../styled/Button';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = 'default', size = 'default', asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : StyledButton;
    return <Comp ref={ref} $variant={variant} $size={size} {...props} />;
  }
);
Button.displayName = 'Button';

export { Button };
