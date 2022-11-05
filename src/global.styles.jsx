import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { color } from "./theme";

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    scroll-behavior: smooth;
    scroll-margin: 100px;
  }
  
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${color('htmlBody')};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`;

export default GlobalStyle