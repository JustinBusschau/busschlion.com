import React from 'react';
import { useEffect, useState } from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { graphql } from 'gatsby';

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
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
        <h1 className="text-4xl font-bold mb-4">404: Page Not Found</h1>
        <p className="text-lg text-muted-foreground">
          You just hit a route that doesn&#39;t exist... the sadness.
        </p>
      </div>
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
