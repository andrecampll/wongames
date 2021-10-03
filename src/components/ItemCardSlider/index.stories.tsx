import { Story, Meta } from '@storybook/react/types-6-0';

import { ItemCardProps } from '../ItemCard';
import { ItemCardSlider } from '.';

import items from './mock';

export default {
  title: 'ItemCardSlider',
  component: ItemCardSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Basic: Story<ItemCardProps[]> = args => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <ItemCardSlider items={args} {...args} />
  </div>
);
