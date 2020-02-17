import { render } from '@testing-library/react';
import React from 'react';

import { Button } from '@components/button/button';

describe(`Button component`, () => {
  it(`should default to the "default" size when no size is passed in`, () => {
    const { container } = render(<Button>This is a button</Button>);
    const component = container.firstChild;

    expect(component).toHaveStyleRule('font-size', '1rem');
  });
});
