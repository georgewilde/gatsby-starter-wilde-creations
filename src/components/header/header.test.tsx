import { render } from '@testing-library/react';
import React from 'react';

import { Default } from './header.stories';

describe(`Header component`, () => {
  it(`should correctly render the site title`, () => {
    const { getByTestId } = render(<Default />);

    expect(getByTestId('siteTitle')).toHaveTextContent('Acme Co.');
  });

  it(`should have a link to the home page on the site title`, () => {
    const { getByTestId } = render(<Default />);

    expect(getByTestId('siteTitle')).toHaveAttribute('href', '/');
  });
});
