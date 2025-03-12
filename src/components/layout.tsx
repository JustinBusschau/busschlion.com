import React from 'react';
import Seo from './seo';
import Header from './layout/header';
import Footer from './layout/footer';
import LayoutWrapper from '../styled/LayoutWrapper';
import GlobalStyles from '../styles/GlobalStyles';

const Layout = ({ data, children }) => {
  return (
    <>
      <GlobalStyles />
      <LayoutWrapper>
        <Seo
          description={data.allContentfulSiteMeta.nodes[0].tagLine}
          title={data.allContentfulSiteMeta.nodes[0].siteName}
        />
        <Header />
        <main>{children}</main>
        <Footer data={data} />
      </LayoutWrapper>
    </>
  );
}

export default Layout;
