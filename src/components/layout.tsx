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
        <Seo />
        <Header />
        <main>{children}</main>
        <Footer data={data} />
      </LayoutWrapper>
    </>
  );
}

export default Layout;
