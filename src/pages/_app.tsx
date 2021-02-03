import Head from 'next/head';
import GlobalStyles from '../styles/GlobalStyles';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <title>WonGames</title>
      </Head>

      <GlobalStyles />
    </>
  );
}
