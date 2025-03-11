import * as React from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import {
  StyledOverlay,
  StyledContent,
  StyledCloseButton,
  StyledHeader,
  StyledFooter,
  StyledTitle,
  StyledDescription,
} from '../../styled/Sheet';

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ ...props }, ref) => <StyledOverlay {...props} ref={ref} />);
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content> {
  side?: 'top' | 'bottom' | 'left' | 'right';
}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = 'right', children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <StyledContent ref={ref} $side={side} {...props}>
      {children}
      <StyledCloseButton>
        <X />
      </StyledCloseButton>
    </StyledContent>
  </SheetPortal>
));
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <StyledHeader {...props} />
);
SheetHeader.displayName = 'SheetHeader';

const SheetFooter = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <StyledFooter {...props} />
);
SheetFooter.displayName = 'SheetFooter';

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ ...props }, ref) => <StyledTitle ref={ref} {...props} />);
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ ...props }, ref) => <StyledDescription ref={ref} {...props} />);
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
