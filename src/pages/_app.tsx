import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import theme from '../styles/theme';
import { useApollo } from '../utils/apollo';

export default function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <title>Won Games</title>

          <meta
            name="description"
            content="The best Game Stores in the world!"
          />
        </Head>

        <GlobalStyles />
      </ThemeProvider>
    </ApolloProvider>
  );
}
