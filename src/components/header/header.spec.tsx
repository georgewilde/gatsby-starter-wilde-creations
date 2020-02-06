import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { SiteMetadata, SiteMetadataContext } from '@context/site-metadata';
import { Header } from './Header';

describe(`Header component`, () => {
  let siteMetadata: SiteMetadata;

  beforeEach(() => {
    siteMetadata = {
      companyName: 'Acme Co.',
      description: '',
      author: '',
    };
  });

  it(`should correctly render the site title`, () => {
    const { getByTestId } = render(
      <SiteMetadataContext.Provider value={siteMetadata}>
        <Header />
      </SiteMetadataContext.Provider>
    );

    expect(getByTestId('siteTitle')).toHaveTextContent('Acme Co.');
  });

  it(`should have a link to the home page on the site title`, () => {
    const { getByTestId } = render(<Header />);

    expect(getByTestId('siteTitle')).toHaveAttribute('href', '/');
  });

  it(`should render correctly`, () => {
    const tree = renderer
      .create(
        <SiteMetadataContext.Provider value={siteMetadata}>
          <Header />
        </SiteMetadataContext.Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
