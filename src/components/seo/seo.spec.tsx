import React from 'react';
import { create } from 'react-test-renderer';

import { SEO } from '@components/seo/seo';
import { SiteMetadata, SiteMetadataContext } from '@context/site-metadata';

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
    const tree = create(
      <SiteMetadataContext.Provider value={siteMetadata}>
        <SEO title="test title" />
      </SiteMetadataContext.Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
