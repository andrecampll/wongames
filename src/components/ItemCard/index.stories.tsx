import { Story, Meta } from '@storybook/react/types-6-0';
import { CartContextDTO } from '../../hooks/cart/useCart';
import { ItemCard, ItemCardProps } from './index';

export default {
  title: 'ItemCard',
  component: ItemCard,
  args: {
    slug: 'camisa-1',
    name: 'Camisa',
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

export const Basic: Story<ItemCardProps> = args => (
  <div style={{ width: '30rem' }}>
    <ItemCard {...args} />
  </div>
);

export const IsInCart: Story<ItemCardProps & CartContextDTO> = args => (
  <div style={{ width: '30rem' }}>
    <ItemCard {...args} />
  </div>
);

IsInCart.args = {
  isInCart: () => true,
};

export const WithRibbon: Story<ItemCardProps> = args => (
  <div style={{ width: '30rem' }}>
    <ItemCard {...args} />
  </div>
);

WithRibbon.args = {
  ribbon: '20% OFF',
  ribbonSize: 'normal',
  ribbonColor: 'primary',
};
