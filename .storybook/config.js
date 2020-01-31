import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { addDecorator, addParameters } from '@storybook/react';

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader. To prevent its method calls from creating console errors you override it here.
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};

// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment.
global.__PATH_PREFIX__ = '';

// This is utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook.
window.___navigate = pathname => {
  action('NavigateTo:')(pathname);
};

addParameters({
  options: {
    sortStoriesByKind: true,
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

addDecorator(withKnobs);
addDecorator(withA11y);
