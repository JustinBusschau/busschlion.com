import React from 'react';
import Layout from '../components/layout';
import ServicesOverview from '../components/home/ServicesOverview';
import Hero from '../components/home/Hero';
import { graphql } from "gatsby"

const IndexPage = ({ data }) => (
  <Layout data={data}>
    <div>
      <Hero data={data} />
      <ServicesOverview />
    </div>
  </Layout>
);

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
    allContentfulHeroSection(filter: {active: {eq: true}}, limit: 1) {
      nodes {
        active
        contentful_id
        title
        content {
          content
        }
      }
    }
  }
`

export default IndexPage;
