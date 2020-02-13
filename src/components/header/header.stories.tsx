import React from 'react';

import { Header } from './header';
import { SiteMetadataContext } from '@context/site-metadata';
import { SiteMetadataMock } from '@mocks';

export default {
  title: 'Simple Components/Header',
  component: Header,
};

export const Default = () => (
  <SiteMetadataContext.Provider value={SiteMetadataMock}>
    <Header />
  </SiteMetadataContext.Provider>
);
