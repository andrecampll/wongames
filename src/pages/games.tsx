/* eslint-disable react-hooks/rules-of-hooks */
import { useGames } from '../hooks/useGames';

import GamesTemplate, { GamesTemplateProps } from '../templates/Games';
import filterItemsMock from '../components/ExploreSidebar/mock';

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />;
}

export async function getStaticProps() {
  const { apolloClient } = await useGames();

  return {
    props: {
      revalidate: 60,
      filterItems: filterItemsMock,
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}
