import React, { FC } from 'react';

import { useSiteMetadata } from '@hooks/site-metadata';
import { Header } from '@components/header';
import { Footer } from '@components/footer';
import { SiteMetadataContext } from '@context/site-metadata';

import '@styles/materialize.min.css';

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
