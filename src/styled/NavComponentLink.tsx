import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';

const NavComponentLink = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  text-decoration: none;

  a {
    text-decoration: none;
  }
`;

const NavComponentLinkWrapper = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link to={href} style={{ textDecoration: 'none' }}>
    <NavComponentLink whileHover={{ scale: 1.05 }}>{children}</NavComponentLink>
  </Link>
);

export default NavComponentLinkWrapper;
