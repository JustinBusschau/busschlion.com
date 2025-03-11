import { createGlobalStyle } from 'styled-components';
import * as pallette from '../styled/pallette';

const GlobalStyles = createGlobalStyle`
  * {
    border-color: hsl(${pallette.__border});
  }

  body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: hsl(${pallette.__background});
    color: hsl(${pallette.__foreground});
  }
`;

export default GlobalStyles;
