import React from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Logo } from '../ui/logo';

import HeaderWrapper from '../../styled/HeaderWrapper';
import NavComponentWrapper from '../../styled/NavComponentWrapper';
import NavComponentLink from '../../styled/NavComponentLink';
import NavLogoWrapper from '../../styled/NavLogoWrapper';
import NavLinkWrapper from '../../styled/NavLinkWrapper';
import HeroName from '../../styled/HeroName';
import NavInnerWrapper from '../../styled/NavInnerWrapper';
import NavLogoContainer from '../../styled/NavLogoContainer';
import MobileNavWrapper from '../../styled/MobileNavWrapper';
import MobileMenuButton from '../../styled/MobileMenuButton';
import NavLink from '../../styled/NavLink';
import MobileNavLink from '../../styled/MobileNavLink';
import {
  MobileNavHeader,
  MobileNavLinks,
  MobileNavTitle,
} from '../../styled/MobileNavContent';
import { useStaticQuery } from 'gatsby';
import { graphql } from 'gatsby';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isBrowser, setIsBrowser] = useState(false);
  const [location, setLocation] = useState('/');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  useEffect(() => {
    setIsBrowser(true);
    if (typeof window !== 'undefined') {
      setLocation(window.location.pathname);
    }
  }, []);

  if (!isBrowser) {
    return null;
  }

  return (
    <HeaderWrapper>
      <nav aria-label="Top">
        <NavComponentWrapper>
          <NavInnerWrapper>
            <NavLogoContainer>
              <NavComponentLink href="/">
                <NavLogoWrapper>
                  <Logo />
                </NavLogoWrapper>
                <HeroName>{site.siteMetadata?.title}</HeroName>
              </NavComponentLink>
            </NavLogoContainer>

            {/* Desktop Navigation */}
            <NavLinkWrapper>
              {navigation.map(link => (
                <NavLink
                  key={link.name}
                  href={link.href}
                  isActive={location === link.href}
                >
                  {link.name}
                </NavLink>
              ))}
            </NavLinkWrapper>
          </NavInnerWrapper>
        </NavComponentWrapper>
      </nav>

      {/* Mobile Navigation */}
      <MobileNavWrapper>
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <MobileMenuButton>
              <Menu />
            </MobileMenuButton>
          </SheetTrigger>
          <SheetContent>
            <MobileNavHeader>
              <NavLogoWrapper>
                <Logo />
              </NavLogoWrapper>
              <MobileNavTitle>{site.siteMetadata?.title}</MobileNavTitle>
            </MobileNavHeader>
            <MobileNavLinks>
              {navigation.map(link => (
                <MobileNavLink
                  key={link.name}
                  href={link.href}
                  isActive={location === link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </MobileNavLink>
              ))}
            </MobileNavLinks>
          </SheetContent>
        </Sheet>
      </MobileNavWrapper>
    </HeaderWrapper>
  );
}
