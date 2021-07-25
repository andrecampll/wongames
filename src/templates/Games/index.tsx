import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown';
import Base from '../Base';
import ExploreSidebar, { ItemProps } from '../../components/ExploreSidebar';
import GameCard, { GameCardProps } from '../../components/GameCard';
import { Grid } from '../../components/Grid';

import { Main, ShowMore } from './styles';

export type GamesTemplateProps = {
  games?: GameCardProps[];
  filterItems: ItemProps[];
};

const Games = ({ games = [], filterItems }: GamesTemplateProps) => {
  const handleFilter = () => ({});

  const handleShowMore = () => ({});

  return (
    <Base>
      <Main>
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />

        <section>
          <Grid>
            {games.map(item => (
              <GameCard key={item.title} {...item} />
            ))}
          </Grid>

          <ShowMore role="button" onClick={handleShowMore}>
            <p>Show More</p>
            <ArrowDown size={35} />
          </ShowMore>
        </section>
      </Main>
    </Base>
  );
};

export default Games;
