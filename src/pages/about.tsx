import * as React from 'react';
import { motion } from 'framer-motion';
import { Shield, Star, Users } from 'lucide-react';
import {
  AboutContainer,
  AboutInnerContainer,
  AboutHeader,
  AboutTitle,
  AboutDescription,
  AboutSection,
  AboutSectionTitle,
  AboutSectionText,
  ValuesGrid,
  ValueCard,
  ValueIcon,
  ValueTitle,
  ValueDescription,
} from '../styled/AboutPage';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

const values = [
  {
    name: 'Innovation',
    description: 'Pushing boundaries with cutting-edge solutions',
    icon: Star,
  },
  {
    name: 'Reliability',
    description: 'Delivering consistent, high-quality results',
    icon: Shield,
  },
  {
    name: 'Partnership',
    description: 'Building lasting relationships with our clients',
    icon: Users,
  },
];

const AboutPage = ({ data }) => {
  return (
    <Layout data={data}>
      <AboutContainer>
        <AboutInnerContainer>
          <AboutHeader
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <AboutTitle>About Bussch Lion</AboutTitle>
            <AboutDescription>
              We are a forward-thinking digital consultancy specializing in
              software solutions, digital strategy, and system architecture.
            </AboutDescription>
          </AboutHeader>

          <AboutSection>
            <AboutSectionTitle>Our Mission</AboutSectionTitle>
            <AboutSectionText>
              To empower businesses through innovative digital solutions that
              drive growth, efficiency, and competitive advantage in the modern
              marketplace.
            </AboutSectionText>
          </AboutSection>

          <AboutSection>
            <AboutSectionTitle>Our Values</AboutSectionTitle>
            <ValuesGrid>
              {values.map((value, index) => (
                <ValueCard
                  key={value.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <ValueIcon>
                    <value.icon />
                  </ValueIcon>
                  <ValueTitle>{value.name}</ValueTitle>
                  <ValueDescription>{value.description}</ValueDescription>
                </ValueCard>
              ))}
            </ValuesGrid>
          </AboutSection>

          <AboutSection>
            <AboutSectionTitle>Why Choose Us</AboutSectionTitle>
            <ValuesGrid
              as="div"
              style={{ gridTemplateColumns: '1fr', gap: '2rem' }}
            >
              <div>
                <ValueTitle>Expertise</ValueTitle>
                <ValueDescription>
                  Our team brings years of experience in software development,
                  digital strategy, and system architecture to every project.
                </ValueDescription>
              </div>
              <div>
                <ValueTitle>Results-Driven</ValueTitle>
                <ValueDescription>
                  We focus on delivering measurable outcomes that drive your
                  business forward through innovative solutions and strategic
                  thinking.
                </ValueDescription>
              </div>
            </ValuesGrid>
          </AboutSection>
        </AboutInnerContainer>
      </AboutContainer>
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

export default AboutPage;
