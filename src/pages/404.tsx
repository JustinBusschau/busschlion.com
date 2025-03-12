import React from 'react';
import { useEffect, useState } from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { graphql } from 'gatsby';
import styled from 'styled-components';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  text-align: center;
  padding: 2rem;
`;

const NotFoundTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: var(--foreground);
`;

const NotFoundText = styled.p`
  font-size: 1.125rem;
  color: var(--text-muted-foreground);
`;

const NotFoundPage = ({ data }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Layout data={data}>
      <NotFoundContainer>
        <NotFoundTitle>404: Page Not Found</NotFoundTitle>
        <NotFoundText>
          You just hit a route that doesn&#39;t exist... the sadness.
        </NotFoundText>
      </NotFoundContainer>
    </Layout>
  );
};

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

export const Head = () => <Seo title="404: Not Found" />;

export default NotFoundPage;
