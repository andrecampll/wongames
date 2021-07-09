import Base from '../Base';

import Heading from '../../components/Heading';
import Showcase from '../../components/Showcase';
import GameCard, { GameCardProps } from '../../components/GameCard';
import { Container } from '../../components/Container';
import { HighlightProps } from '../../components/Highlight';
import { Grid } from '../../components/Grid';

// import { Wrapper } from './styles';

export type WishlistTemplateProps = {
  games?: GameCardProps[];
  recommendedGames: GameCardProps[];
  recommendedHighlist: HighlightProps;
};

const Wishlist = ({
  recommendedGames,
  recommendedHighlist,
  games,
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>

      <Grid>
        {games?.map((game, index) => (
          <GameCard key={`wishlist-game-${index}`} {...game} />
        ))}
      </Grid>
    </Container>

    <Showcase
      title="You may like these games"
      games={recommendedGames}
      highlight={recommendedHighlist}
    />
  </Base>
);

export default Wishlist;
