import {createGlobalStyle} from "styled-components";
import {theme} from "styles/Theme";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.font};
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    background-color: unset;
    border: none;
  }

  section {
    background-color: ${theme.colors.primaryBg};
    padding: 100px 0;
    
    @media ${theme.media.mobile} {
      padding: 80px 0;
    }
  }

  h3 {
    text-align: center;
    font-size: 28px;
    font-weight: 500;
  }

  p {
    font-size: 18px;
    font-weight: 300;
  }
`