import React from 'react';
import { StoryFn } from '@storybook/addons';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';

import { Theme, AvailableThemes } from '@themes';

export const withTheme = (story: StoryFn<StoryFnReactReturnType>) => (
  <Theme theme={AvailableThemes.Light}>{story()}</Theme>
);
