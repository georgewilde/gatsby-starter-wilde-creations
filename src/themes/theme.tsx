import React, { FC } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

import { GlobalFonts } from './fonts';
import { GlobalStyle } from './global-style';
import { darkTheme } from './theme-dark';
import { lightTheme } from './theme-light';
import { AvailableThemes } from '@themes/available-themes';

interface ThemeProps {
  theme?: AvailableThemes;
}

export const Theme: FC<ThemeProps> = ({ theme, children }) => {
  let themeToShow: DefaultTheme;

  switch (theme) {
    case 'dark':
      themeToShow = darkTheme;
      break;

    case 'light':
    default:
      themeToShow = lightTheme;
      break;
  }

  return (
    <ThemeProvider theme={themeToShow}>
      <Normalize />
      <GlobalStyle />
      <GlobalFonts />
      {children}
    </ThemeProvider>
  );
};
