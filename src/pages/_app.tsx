import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import NextNprogress from 'nextjs-progressbar';
import { CartProvider } from '../hooks/cart/useCart';
import GlobalStyles from '../styles/GlobalStyles';
import theme from '../styles/theme';
import { useApollo } from '../utils/apollo';

export default function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={client}>
      <CartProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <Head>
            <link rel="manifest" href="/manifest.json" />
            <title>Won Games</title>

            <meta
              name="description"
              content="The best Game Store in the world!"
            />
          </Head>

          <GlobalStyles />
          <NextNprogress
            color="#F231A5"
            startPosition={0.3}
            stopDelayMs={200}
            height={5}
          />
        </ThemeProvider>
      </CartProvider>
    </ApolloProvider>
  );
}
