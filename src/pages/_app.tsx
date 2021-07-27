import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import theme from '../styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache(),
  });

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
