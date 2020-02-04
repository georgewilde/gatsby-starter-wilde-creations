import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { Footer } from './footer';

describe(`Footer component`, () => {
  it(`should display the current year as part of the copyright notice`, () => {
    const expected = new Date().getFullYear().toString();

    const { getByTestId } = render(<Footer />);

    expect(getByTestId('copyright')).toHaveTextContent(expected);
  });

  it(`should open a new tab when clicking on the "website created by" link`, () => {
    const { getByTestId } = render(<Footer />);

    expect(getByTestId('createdBy')).toHaveAttribute(
      'href',
      'https://www.wildecreations.co.uk'
    );
    expect(getByTestId('createdBy')).toHaveAttribute('target', '_blank');
  });

  it(`should render correctly`, () => {
    const tree = renderer.create(<Footer />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
