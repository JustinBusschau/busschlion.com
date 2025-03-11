import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import * as pallette from './pallette';

const StyledMobileNavLink = styled(motion.a)<{ isActive: boolean }>`
  font-size: 1.125rem;
  font-weight: 500;
  color: ${props =>
    props.isActive
      ? `hsl(${pallette.__primary})`
      : `hsl(${pallette.__foreground})`};
`;

const MobileNavLink = ({
  href,
  children,
  isActive,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}) => (
  <Link to={href}>
    <StyledMobileNavLink
      whileTap={{ scale: 0.95 }}
      isActive={isActive}
      onClick={onClick}
    >
      {children}
    </StyledMobileNavLink>
  </Link>
);

export default MobileNavLink;
