import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-size: 1.5rem;
    font-family: montserrat, sans-serif;
    background-color: ${props => props.theme.colors.background};
  }

  a {
    color: ${props => props.theme.colors.link};
    text-decoration: none;

    &:hover {
      color: ${props => props.theme.colors.linkHover};
      text-decoration: none;
    }
  }
`;
