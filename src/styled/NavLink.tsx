import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import * as pallette from './pallette';

const StyledNavLink = styled(motion.a)<{ isActive: boolean }>`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${props =>
    props.isActive
      ? `hsl(${pallette.__primary})`
      : `hsl(${pallette.__foreground})`};
  transition: color 0.2s ease-in-out;

  &:hover {
    color: hsl(${pallette.__primary});
  }
`;

const NavLink = ({
  href,
  children,
  isActive,
}: {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
}) => (
  <Link to={href}>
    <StyledNavLink whileHover={{ scale: 1.05 }} isActive={isActive}>
      {children}
    </StyledNavLink>
  </Link>
);

export default NavLink;
