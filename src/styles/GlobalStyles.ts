import {
  createGlobalStyle,
  css,
  GlobalStyleComponent,
  DefaultTheme,
} from 'styled-components';

type GlobalStylesProps = {
  removeBg?: boolean;
};

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
  ${({ theme, removeBg }) => css`
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: local('Poppins Light'), local('Poppins-Light'),
        url('/fonts/poppins-v12-latin-300.woff2') format('woff2');
    }
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: local('Poppins Regular'), local('Poppins-Regular'),
        url('/fonts/poppins-v12-latin-regular.woff2') format('woff2');
    }
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: local('Poppins SemiBold'), local('Poppins-SemiBold'),
        url('/fonts/poppins-v12-latin-600.woff2') format('woff2');
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      &::before,
      &::after {
        box-sizing: inherit;
      }
    }

    body {
      font-size: ${theme.font.sizes.medium};
      font-family: ${theme.font.family};

      ${!removeBg &&
      css`
        background-color: ${theme.colors.mainBg};
      `}
    }

    body,
    input,
    button,
    textarea {
      font-family: ${theme.font.family};
    }

    button {
      border: 0;
    }

    html {
      font-size: 62.5%;
    }
  `}
`;

export default GlobalStyles;
