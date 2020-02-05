import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

import { theme } from './theme-dark';
import { GlobalStyle } from './global-style';
import { GlobalFonts } from './fonts';

export const Theme: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Normalize />
    <GlobalStyle />
    <GlobalFonts />
    {children}
  </ThemeProvider>
);
