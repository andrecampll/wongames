import Base from '../Base';

import Heading from '../../components/Heading';
import Showcase from '../../components/Showcase';
import Empty from '../../components/Empty';
import GameCard, { GameCardProps } from '../../components/GameCard';
import { Container } from '../../components/Container';
import { HighlightProps } from '../../components/Highlight';
import { Grid } from '../../components/Grid';
import { Divider } from '../../components/Divider';

export type WishlistTemplateProps = {
  games?: GameCardProps[];
  recommendedTitle?: string;
  recommendedGames: GameCardProps[];
  recommendedHighlist: HighlightProps;
};

const Wishlist = ({
  recommendedGames,
  recommendedTitle,
  recommendedHighlist,
  games,
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>

      {games?.length ? (
        <Grid>
          {games?.map((game, index) => (
            <GameCard key={`wishlist-game-${index}`} {...game} />
          ))}
        </Grid>
      ) : (
        <Empty
          title="Your wishlist is empty"
          description="Games added to your wishlist will appear here"
        />
      )}

      <Divider />
    </Container>

    <Showcase
      title={recommendedTitle || 'You may like these games'}
      games={recommendedGames}
      highlight={recommendedHighlist}
    />
  </Base>
);

export default Wishlist;
