import { addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { jsxDecorator } from 'storybook-addon-jsx/lib';
import { withTheme } from './decorators/app';

import '../src/static/styles/materialize.min.css';

// System-wide parameters that all stories will use.
addParameters({
  options: {
    panelPosition: 'bottom',
    sortStoriesByKind: true,
  },
  viewport: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
});

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here.
// @ts-ignore Property does not exist
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};

// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment.
// @ts-ignore Property does not exist
global.__PATH_PREFIX__ = '';

// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook.
// @ts-ignore Property does not exist
window.___navigate = pathname => {
  action('NavigateTo:')(pathname);
};

// System wide decorators that will be available on all stories.
addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator(jsxDecorator);
addDecorator(withTheme);
