import { storiesOf } from '@storybook/react';
import React from 'react';

import { Header } from './header';
import { SiteMetadata, SiteMetadataContext } from '@context/site-metadata';

storiesOf('Header', module).add('default', () => {
  const siteMetadata: SiteMetadata = {
    companyName: 'Acme Co.',
    description: '',
    author: '',
  };

  return (
    <SiteMetadataContext.Provider value={siteMetadata}>
      <Header />
    </SiteMetadataContext.Provider>
  );
});
