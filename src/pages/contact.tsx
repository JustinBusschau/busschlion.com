import * as React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/contact/ContactForm';
import { Card, CardContent } from '../components/ui/card';
import { Mail, MapPin, Phone } from 'lucide-react';
import styled from 'styled-components';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
const ContactContainer = styled.div`
  padding: 6rem 0;
`;

const InnerContainer = styled.div`
  margin: 0 auto;
  max-width: 112rem;
  padding: 0 1.5rem;

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

const TextCenter = styled.div`
  margin: 0 auto;
  max-width: 64rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  line-height: 1.2;
  color: var(--foreground);

  @media (min-width: 640px) {
    font-size: 4rem;
  }
`;

const Subtitle = styled.p`
  margin-top: 1.5rem;
  font-size: 1.125rem;
  line-height: 2;
  color: var(--text-muted-foreground);
`;

const GridContainer = styled.div`
  margin: 0 auto;
  margin-top: 4rem;
  display: grid;
  max-width: 80rem;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.2;
  color: var(--foreground);
  margin-bottom: 2rem;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const InfoText = styled.p`
  color: var(--text-muted-foreground);
`;

const Icon = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  color: var(--primary);
`;

const ContactPage = ({ data }) => {
  return (
    <Layout data={data}>
      <ContactContainer>
        <InnerContainer>
          <TextCenter>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Title>Contact Us</Title>
              <Subtitle>
                Get in touch with us to discuss your project or learn more about
                our services.
              </Subtitle>
            </motion.div>
          </TextCenter>

          <GridContainer>
            <div>
              <SectionTitle>Get in Touch</SectionTitle>
              <div className="space-y-6">
                <InfoContainer>
                  <Icon as={Mail} />
                  <InfoText>info@busschlion.com</InfoText>
                </InfoContainer>
                <InfoContainer>
                  <Icon as={Phone} />
                  <InfoText>+1 (555) 123-4567</InfoText>
                </InfoContainer>
                <InfoContainer>
                  <Icon as={MapPin} />
                  <InfoText>123 Business Street, Tech City, TC 12345</InfoText>
                </InfoContainer>
              </div>
            </div>

            <Card>
              <CardContent className="pt-6">
                <ContactForm />
              </CardContent>
            </Card>
          </GridContainer>
        </InnerContainer>
      </ContactContainer>
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

export default ContactPage;
