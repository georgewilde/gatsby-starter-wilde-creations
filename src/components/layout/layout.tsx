import React, { FC } from 'react';

import { Footer } from '@components/footer';
import { Header } from '@components/header';
import { SiteMetadataContext } from '@context/site-metadata';
import { useSiteMetadata } from '@hooks';

import '@static/styles/materialize.min.css';

export const Layout: FC = ({ children }) => {
  const siteMetadata = useSiteMetadata();

  return (
    <SiteMetadataContext.Provider value={siteMetadata}>
      <Header />
      <div className="container">
        <main>{children}</main>
        <Footer />
      </div>
    </SiteMetadataContext.Provider>
  );
};
