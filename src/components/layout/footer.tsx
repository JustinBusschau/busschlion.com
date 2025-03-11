import React from 'react';
import { Link } from 'gatsby';
import {
  FooterContainer,
  FooterContent,
  FooterGrid,
  FooterBrand,
  FooterTitle,
  FooterDescription,
  FooterSection,
  FooterList,
  FooterLink,
  FooterText,
  FooterDivider,
  FooterCopyright,
} from '../../styled/FooterWrapper';

const Footer = ({ data }) => {
  const siteMeta = data.allContentfulSiteMeta.nodes[0];

  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          <FooterBrand>
            <FooterTitle>{siteMeta.siteName}</FooterTitle>
            <FooterDescription>{siteMeta.tagLine}</FooterDescription>
          </FooterBrand>
          <FooterSection>
            <h3>Navigation</h3>
            <FooterList>
              <li>
                <FooterLink as={Link} to="/">
                  Home
                </FooterLink>
              </li>
              <li>
                <FooterLink as={Link} to="/services">
                  Services
                </FooterLink>
              </li>
              <li>
                <FooterLink as={Link} to="/about">
                  About
                </FooterLink>
              </li>
              <li>
                <FooterLink as={Link} to="/contact">
                  Contact
                </FooterLink>
              </li>
            </FooterList>
          </FooterSection>
          <FooterSection>
            <h3>Contact</h3>
            <FooterList>
              <FooterText>{siteMeta.infoEmail}</FooterText>
              <FooterText>{siteMeta.phoneNumber}</FooterText>
            </FooterList>
          </FooterSection>
        </FooterGrid>
        <FooterDivider>
          <FooterCopyright>
            © {new Date().getFullYear()} {siteMeta.siteName}. All rights reserved.
          </FooterCopyright>
        </FooterDivider>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
