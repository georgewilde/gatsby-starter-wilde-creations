import { createGlobalStyle } from 'styled-components';

export const GlobalFonts = createGlobalStyle`
  @font-face {
    font-weight: 300;
    font-family: 'montserrat';
    font-style: normal;
    src: url('@static/fonts/montserrat/Montserrat-Light.ttf') format('ttf');
  }

  @font-face {
    font-weight: 500;
    font-family: 'montserrat';
    font-style: normal;
    src: url('@static/fonts/montserrat/Montserrat-Regular.ttf') format('ttf');
  }

  @font-face {
    font-weight: 500;
    font-family: 'montserrat';
    font-style: italic;
    src: url('@static/fonts/montserrat/Montserrat-Italic.ttf') format('ttf');
  }

  @font-face {
    font-weight: 700;
    font-family: 'montserrat';
    font-style: normal;
    src: url('@static/fonts/montserrat/Montserrat-Bold.ttf') format('ttf');
  }
`;
