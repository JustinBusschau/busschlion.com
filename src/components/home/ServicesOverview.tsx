import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Server } from 'lucide-react';
import { CardHeader, CardTitle, CardDescription } from '../ui/card';
import {
  ServicesSection,
  ServicesContainer,
  ServicesHeader,
  ServicesTitle,
  ServicesDescription,
  ServicesGrid,
  ServiceCard,
  StyledCard,
} from '../../styled/ServicesOverview';

const services = [
  {
    title: 'Software Solutions',
    description:
      'Custom development, integrations, and enterprise software tailored to your needs.',
    icon: Code2,
  },
  {
    title: 'Digital Consultancy',
    description:
      'Strategic guidance for digital transformation and business optimization.',
    icon: Layout,
  },
  {
    title: 'Architecture & System Design',
    description:
      'Scalable and efficient digital infrastructure design and implementation.',
    icon: Server,
  },
];

export default function ServicesOverview() {
  return (
    <ServicesSection>
      <ServicesContainer>
        <ServicesHeader>
          <ServicesTitle>Our Services</ServicesTitle>
          <ServicesDescription>
            Comprehensive digital solutions to power your business growth
          </ServicesDescription>
        </ServicesHeader>
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <StyledCard>
                <CardHeader>
                  <service.icon className="h-8 w-8 text-primary" />
                  <CardTitle className="mt-4">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </StyledCard>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </ServicesContainer>
    </ServicesSection>
  );
}
