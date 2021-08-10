import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown';
// import { useQuery } from '@apollo/client';
import {
  QueryGames,
  QueryGamesVariables,
} from '../../graphql/generated/QueryGames';
import { useQuery } from '../../hooks/graphql/useQuery';
import { QUERY_GAMES } from '../../graphql/queries/games';

import Base from '../Base';
import ExploreSidebar, { ItemProps } from '../../components/ExploreSidebar';
import GameCard, { GameCardProps } from '../../components/GameCard';
import { Grid } from '../../components/Grid';

import { Main, ShowMore } from './styles';

export type GamesTemplateProps = {
  games?: GameCardProps[];
  filterItems: ItemProps[];
};

const Games = ({ filterItems }: GamesTemplateProps) => {
  const { data, loading } = useQuery<QueryGames, QueryGamesVariables>(
    QUERY_GAMES,
    {
      variables: {
        limit: 15,
      },
    },
  );

  const handleFilter = () => ({});

  const handleShowMore = () => ({});

  return (
    <Base>
      <Main>
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />

        {loading ? (
          <p>Loading...</p>
        ) : (
          <section>
            <Grid>
              {data?.games.map(({ name, slug, developers, cover, price }) => (
                <GameCard
                  key={slug}
                  title={name}
                  slug={slug}
                  developer={developers[0].name}
                  image={
                    cover?.url
                      ? `http://localhost:1337${cover?.url}`
                      : 'https://i.stack.imgur.com/y9DpT.jpg'
                  }
                  price={price}
                />
              ))}
            </Grid>

            <ShowMore role="button" onClick={handleShowMore}>
              <p>Show More</p>
              <ArrowDown size={35} />
            </ShowMore>
          </section>
        )}
      </Main>
    </Base>
  );
};

export default Games;
