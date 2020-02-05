import { SiteMetadataContext } from '@context/site-metadata';
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import { Header } from './header';

storiesOf('Header', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const siteMetadata = {
      title: 'Test Title',
    };

    return (
      <SiteMetadataContext.Provider value={siteMetadata}>
        <Header />
      </SiteMetadataContext.Provider>
    );
  });
