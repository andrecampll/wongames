/* eslint-disable react-hooks/rules-of-hooks */
import { GetServerSidePropsContext } from 'next';
import { useGames } from '../hooks/useGames';

import GamesTemplate, { GamesTemplateProps } from '../templates/Games';

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />;
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const { apolloClient, filterItems } = await useGames({
    query,
  });

  return {
    props: {
      revalidate: 60,
      filterItems,
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}
