import { createGlobalStyle } from 'styled-components';

// Site-wide base styles. Sets the modern type scale, colors and small
// quality-of-life defaults (smooth scroll, antialiasing, focus rings).
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 16px;
    line-height: 1.65;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.2;
    letter-spacing: -0.01em;
    margin: 0;
  }

  p {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: ${({ theme }) => theme.fonts.body};
  }

  img {
    max-width: 100%;
    display: block;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.red};
    color: #fff;
  }

  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.red};
    outline-offset: 2px;
  }
`;

export default GlobalStyle;
