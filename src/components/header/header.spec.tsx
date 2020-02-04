import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { Header } from './Header';

describe(`Header component`, () => {
  it(`should correctly render the site title`, () => {
    const siteTitle = 'test site title';

    const { getByTestId } = render(<Header siteTitle={siteTitle} />);

    expect(getByTestId('siteTitle')).toHaveTextContent(siteTitle);
  });

  it(`should have a link to the home page on the site title`, () => {
    const { getByTestId } = render(<Header siteTitle="test site title" />);

    expect(getByTestId('siteTitle')).toHaveAttribute('href', '/');
  });

  it(`should render correctly`, () => {
    const tree = renderer
      .create(<Header siteTitle="test site title" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
