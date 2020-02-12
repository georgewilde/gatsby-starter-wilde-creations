import { render } from '@testing-library/react';
import React from 'react';

import { Default } from './footer.stories';

describe(`Footer component`, () => {
  it(`should display the current year as part of the copyright notice`, () => {
    const expected = new Date().getFullYear().toString();

    const { getByTestId } = render(<Default />);

    expect(getByTestId('copyright')).toHaveTextContent(expected);
  });

  it(`should display the site title as part of the copyright notice`, () => {
    const expected = 'Acme Co.';

    const { getByTestId } = render(<Default />);

    expect(getByTestId('copyright')).toHaveTextContent(expected);
  });

  it(`should open a new tab when clicking on the "website created by" link`, () => {
    const { getByTestId } = render(<Default />);

    expect(getByTestId('createdBy')).toHaveAttribute(
      'href',
      'https://www.wildecreations.co.uk'
    );
    expect(getByTestId('createdBy')).toHaveAttribute('target', '_blank');
  });
});
