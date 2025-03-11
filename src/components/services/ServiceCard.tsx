import * as React from 'react';
import { Button } from '../ui/button';
import { CardHeader } from '../ui/card';
import { Check } from 'lucide-react';
import {
  ServiceCardContainer,
  ServiceCardWrapper,
  ServiceCardTitleWrapper,
  ServiceCardDescriptionWrapper,
  ServiceCardContentWrapper,
  ServiceFeatureList,
  ServiceFeatureItem,
  ServiceCardFooterWrapper,
} from '../../styled/ServiceCard';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  ctaText: string;
  onCtaClick: () => void;
}

export default function ServiceCard({
  title,
  description,
  features,
  ctaText,
  onCtaClick,
}: ServiceCardProps) {
  return (
    <ServiceCardContainer>
      <ServiceCardWrapper>
        <CardHeader>
          <ServiceCardTitleWrapper>{title}</ServiceCardTitleWrapper>
          <ServiceCardDescriptionWrapper>
            {description}
          </ServiceCardDescriptionWrapper>
        </CardHeader>
        <ServiceCardContentWrapper>
          <ServiceFeatureList>
            {features.map((feature, index) => (
              <ServiceFeatureItem key={index}>
                <Check />
                <span>{feature}</span>
              </ServiceFeatureItem>
            ))}
          </ServiceFeatureList>
        </ServiceCardContentWrapper>
        <ServiceCardFooterWrapper>
          <Button onClick={onCtaClick}>{ctaText}</Button>
        </ServiceCardFooterWrapper>
      </ServiceCardWrapper>
    </ServiceCardContainer>
  );
}
