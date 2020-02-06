import { render } from '@testing-library/react';
import React from 'react';
import { create } from 'react-test-renderer';

import { Footer } from './footer';
import { SiteMetadata, SiteMetadataContext } from '@context/site-metadata';

describe(`Footer component`, () => {
  let siteMetadata: SiteMetadata;

  beforeEach(() => {
    siteMetadata = {
      companyName: 'Acme Co.',
      description: '',
      author: '',
    };
  });

  it(`should display the current year as part of the copyright notice`, () => {
    const expected = new Date().getFullYear().toString();

    const { getByTestId } = render(
      <SiteMetadataContext.Provider value={siteMetadata}>
        <Footer />
      </SiteMetadataContext.Provider>
    );

    expect(getByTestId('copyright')).toHaveTextContent(expected);
  });

  it(`should display the site title as part of the copyright notice`, () => {
    const expected = 'Acme Co.';

    const { getByTestId } = render(
      <SiteMetadataContext.Provider value={siteMetadata}>
        <Footer />
      </SiteMetadataContext.Provider>
    );

    expect(getByTestId('copyright')).toHaveTextContent(expected);
  });

  it(`should open a new tab when clicking on the "website created by" link`, () => {
    const { getByTestId } = render(
      <SiteMetadataContext.Provider value={siteMetadata}>
        <Footer />
      </SiteMetadataContext.Provider>
    );

    expect(getByTestId('createdBy')).toHaveAttribute(
      'href',
      'https://www.wildecreations.co.uk'
    );
    expect(getByTestId('createdBy')).toHaveAttribute('target', '_blank');
  });

  it(`should render correctly`, () => {
    const tree = create(
      <SiteMetadataContext.Provider value={siteMetadata}>
        <Footer />
      </SiteMetadataContext.Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
