import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      border: string;
      text: string;
      link: string;
      linkHover: string;
      primary: string;
      secondary: string;
      tertiary: string;
    };
    maxWidth: string;
    boxShadow: string;
  }
}
