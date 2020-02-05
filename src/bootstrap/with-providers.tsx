import React from 'react';

import { Theme } from '@styles/theme/theme';

interface WithProvidersProps {
  element: JSX.Element;
}

export const WithProviders = ({ element }: WithProvidersProps): JSX.Element => (
  <Theme>{element}</Theme>
);
