import React from 'react';

import { Footer } from './footer';
import { SiteMetadataContext } from '@context/site-metadata';
import { SiteMetadataMock } from '@mocks';

export default {
  title: 'Simple Component|Footer',
  component: Footer,
};

export const Default = () => (
  <SiteMetadataContext.Provider value={SiteMetadataMock}>
    <Footer />
  </SiteMetadataContext.Provider>
);
