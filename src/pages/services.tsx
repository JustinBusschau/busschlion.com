import * as React from 'react';
import ServiceCard from '../components/services/ServiceCard';
import {
  ServicesContainer,
  ServicesInnerContainer,
  ServicesHeader,
  ServicesTitle,
  ServicesDescription,
  ServicesGrid,
} from '../styled/ServicesPage';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

const services = [
  {
    title: 'Software Solutions',
    description: 'Custom software development and enterprise solutions',
    features: [
      'Custom Application Development',
      'Enterprise Software Integration',
      'Legacy System Modernization',
      'Cloud Migration Services',
      'Quality Assurance & Testing',
    ],
  },
  {
    title: 'Digital Consultancy',
    description: 'Strategic guidance for digital transformation',
    features: [
      'Digital Strategy Development',
      'Process Optimization',
      'Technology Stack Assessment',
      'Digital Transformation Roadmap',
      'Change Management',
    ],
  },
  {
    title: 'Architecture & System Design',
    description: 'Scalable and efficient infrastructure solutions',
    features: [
      'System Architecture Design',
      'Infrastructure Planning',
      'Scalability Solutions',
      'Security Architecture',
      'Performance Optimization',
    ],
  },
];

const ServicesPage = ({ data }) => {
  const handleCtaClick = () => {
    window.location.href = '/contact';
  };

  return (
    <Layout data={data}>
      <div>
        <ServicesContainer>
          <ServicesInnerContainer>
            <ServicesHeader>
              <ServicesTitle>Our Services</ServicesTitle>
              <ServicesDescription>
                Comprehensive solutions tailored to your business needs
              </ServicesDescription>
            </ServicesHeader>
            <ServicesGrid>
              {services.map(service => (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  ctaText="Get Started"
                  onCtaClick={handleCtaClick}
                />
              ))}
            </ServicesGrid>
          </ServicesInnerContainer>
        </ServicesContainer>
      </div>
    </Layout>
  );
}

export const getMetaInfo = graphql`
  query MetaQuery {
    allContentfulSiteMeta(filter: {active: {eq: true}}, limit: 1) {
      nodes {
        active
        contentful_id
        siteName
        phoneNumber
        infoEmail
        tagLine
      }
    }
  }
`

export default ServicesPage;