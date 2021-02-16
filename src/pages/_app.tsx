import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import theme from '../styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <title>WonGames</title>
      </Head>

      <GlobalStyles />
    </ThemeProvider>
  );
}
