import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import {
  HeroContainer,
  HeroContent,
  HeroTextContainer,
  HeroTitle,
  HeroDescription,
  HeroButtonContainer,
  HeroLogoContainer,
} from '../../styled/Hero';
import { Logo } from '../ui/logo';

const Hero = ({ data }) => {
  const heroSection = data.allContentfulHeroSection.nodes[0];
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTextContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <HeroTitle>{heroSection.title}</HeroTitle>
          <HeroDescription>
            {heroSection.content.content}
          </HeroDescription>
          <HeroButtonContainer>
            <Button asChild size="lg">
              <a href="/contact">Book a Consultation</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/services">Explore Services</a>
            </Button>
          </HeroButtonContainer>
        </HeroTextContainer>
        <HeroLogoContainer>
          <Logo />
        </HeroLogoContainer>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;
