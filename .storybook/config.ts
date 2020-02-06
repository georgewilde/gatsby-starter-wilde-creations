import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { withTheme } from './decorators/app';

const req = require.context('../', true, /stories\.(ts|tsx)$/);

const loadStories = () => {
  req.keys().forEach(filename => req(filename));
};

// @ts-ignore
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};

// @ts-ignore
global.__PATH_PREFIX__ = '';

// @ts-ignore
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
addDecorator(withTheme);

configure(loadStories, module);
