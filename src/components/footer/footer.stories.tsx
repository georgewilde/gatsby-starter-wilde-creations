import { storiesOf } from '@storybook/react';
import React from 'react';

import { Footer } from '@components/footer/footer';
import { SiteMetadata, SiteMetadataContext } from '@context/site-metadata';

storiesOf('Footer', module).add('default', () => {
  const siteMetadata: SiteMetadata = {
    companyName: 'Acme Co.',
    description: '',
    author: '',
  };

  return (
    <SiteMetadataContext.Provider value={siteMetadata}>
      <Footer />
    </SiteMetadataContext.Provider>
  );
});
