import { useRouter } from 'next/router';
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown';
import { ParsedUrlQueryInput } from 'querystring';
import { useQueryGames } from '../../graphql/queries/games';

import Base from '../Base';
import Empty from '../../components/Empty';
import ExploreSidebar, { ItemProps } from '../../components/ExploreSidebar';
import GameCard from '../../components/GameCard';
import { Grid } from '../../components/Grid';

import { Main, ShowMore, ShowMoreButton, ShowMoreLoading } from './styles';
import {
  parseQueryStringToFilter,
  parseQueryStringToWhere,
} from '../../utils/filter';

export type GamesTemplateProps = {
  filterItems: ItemProps[];
};

const Games = ({ filterItems }: GamesTemplateProps) => {
  const { push, query } = useRouter();

  const { data, loading, fetchMore } = useQueryGames({
    notifyOnNetworkStatusChange: true,
    variables: {
      limit: 15,
      where: parseQueryStringToWhere({ queryString: query, filterItems }),
      sort: query.sort as string | null,
    },
  });

  if (!data) return <p>loading...</p>;

  const { games, gamesConnection } = data;

  const hasMoreGames = games.length < (gamesConnection?.values?.length || 0);

  const handleFilter = (items: ParsedUrlQueryInput) => {
    push({ query: items, pathname: '/games' });
  };

  const handleShowMore = () =>
    fetchMore({ variables: { limit: 15, start: data?.games.length } });

  return (
    <Base>
      <Main>
        <ExploreSidebar
          initialValues={parseQueryStringToFilter({
            queryString: query,
            filterItems,
          })}
          items={filterItems}
          onFilter={handleFilter}
        />

        <section>
          {data?.games.length ? (
            <>
              <Grid>
                {data?.games.map(
                  ({ id, name, slug, developers, cover, price }) => (
                    <GameCard
                      id={id}
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
                  ),
                )}
              </Grid>

              {hasMoreGames && (
                <ShowMore>
                  {loading ? (
                    <ShowMoreLoading
                      src="/img/dots.svg"
                      alt="Loading more games..."
                    />
                  ) : (
                    <ShowMoreButton role="button" onClick={handleShowMore}>
                      <p>Show More</p>
                      <ArrowDown size={35} />
                    </ShowMoreButton>
                  )}
                </ShowMore>
              )}
            </>
          ) : (
            <Empty
              title=":("
              description="We didn't find any games with this filter"
              hasLink
            />
          )}
        </section>
      </Main>
    </Base>
  );
};

export default Games;
