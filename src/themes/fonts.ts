import { createGlobalStyle } from 'styled-components';

import fontFiles from './fonts-loader';

export const GlobalFonts = createGlobalStyle`
  @font-face {
    font-weight: 300;
    font-family: 'montserrat';
    font-style: normal;
    src: url(${fontFiles.MontserratLight}) format("truetype");
  }

  @font-face {
    font-weight: 500;
    font-family: 'montserrat';
    font-style: normal;
    src: url(${fontFiles.MontserratRegular}) format('truetype');
  }

  @font-face {
    font-weight: 500;
    font-family: 'montserrat';
    font-style: italic;
    src: url(${fontFiles.MontserratItalic}) format('truetype');
  }

  @font-face {
    font-weight: 700;
    font-family: 'montserrat';
    font-style: normal;
    src: url(${fontFiles.MontserratBold}) format('truetype');
  }
`;
