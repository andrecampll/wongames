import { useRouter } from 'next/router';
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown';
import { ParsedUrlQueryInput } from 'querystring';
import { useQueryGames } from '../../graphql/queries/games';

import Base from '../Base';
import Empty from '../../components/Empty';
import ExploreSidebar, { ItemProps } from '../../components/ExploreSidebar';
import GameCard from '../../components/GameCard';
import { Grid } from '../../components/Grid';

import { Main, ShowMore } from './styles';
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
    variables: {
      limit: 15,
      where: parseQueryStringToWhere({ queryString: query, filterItems }),
      sort: query.sort as string | null,
    },
  });

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

        {loading ? (
          <p>Loading...</p>
        ) : (
          <section>
            {data?.games.length ? (
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
            ) : (
              <Empty
                title=":("
                description="We didn't find any games with this filter"
                hasLink
              />
            )}

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
