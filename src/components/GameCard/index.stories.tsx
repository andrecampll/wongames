import { Story, Meta } from '@storybook/react/types-6-0';
import { CartContextDTO } from '../../hooks/cart/useCart';
import GameCard, { GameCardProps } from './index';

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    slug: 'population-zero',
    title: 'Population Zero',
    developer: 'Rockstar Games',
    image: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 235,
    promotionalPrice: 100,
  },
  argTypes: {
    onFav: { action: 'clicked' },
    ribbon: {
      type: 'string',
    },
  },
} as Meta;

export const Basic: Story<GameCardProps> = args => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
);

export const IsInCart: Story<GameCardProps & CartContextDTO> = args => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
);

IsInCart.args = {
  isInCart: () => true,
};

export const WithRibbon: Story<GameCardProps> = args => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
);

WithRibbon.args = {
  ribbon: '20% OFF',
  ribbonSize: 'normal',
  ribbonColor: 'primary',
};
