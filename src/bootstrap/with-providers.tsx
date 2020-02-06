import React from 'react';

import { Theme } from '@themes';
import { AvailableThemes } from '@themes/available-themes';

interface WithProvidersProps {
  element: JSX.Element;
}

export const WithProviders = ({ element }: WithProvidersProps): JSX.Element => (
  <Theme theme={AvailableThemes.Light}>{element}</Theme>
);
