import { StoryFn } from '@storybook/addons';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

import { Theme } from '../../src/styles/theme/theme';

export const withTheme = (story: StoryFn<StoryFnReactReturnType>) => (
  <Theme>{story()}</Theme>
);
