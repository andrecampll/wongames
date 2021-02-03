import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #282C34;

    h1 {
      color: #fff;
    }
  }

  body, input, button, textarea {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
  }

  button {
    border: 0;
  }

  html, body, #__next {
    height: 100%;
  }

  html {
    font-size: 62.5%;
  }
`;
