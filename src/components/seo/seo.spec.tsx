import React from 'react';
import renderer from 'react-test-renderer';

import { SiteMetadata, SiteMetadataContext } from '@context/site-metadata';
import { SEO } from '@components/seo/seo';

describe(`SEO component`, () => {
  let siteMetadata: SiteMetadata;

  beforeEach(() => {
    siteMetadata = {
      companyName: 'Acme Co.',
      description: '',
      author: '',
    };
  });

  it(`should not render anything to the screen`, () => {
    const tree = renderer
      .create(
        <SiteMetadataContext.Provider value={siteMetadata}>
          <SEO title="test title" />
        </SiteMetadataContext.Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
