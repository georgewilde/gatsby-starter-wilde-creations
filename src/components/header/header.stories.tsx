import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import { Header } from './header';

storiesOf('Header', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const title = 'Test';

    return <Header siteTitle={title} />;
  });
