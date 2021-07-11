import { Story, Meta } from '@storybook/react/types-6-0';
import GameItem, { GameItemProps } from './index';

export default {
  title: 'GameItem',
  component: GameItem,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/151x70',
    title: 'Red Dead Redemption 2',
    price: 'R$ 215,00',
  },
} as Meta;

export const Basic: Story<GameItemProps> = args => <GameItem {...args} />;

export const WithPayment: Story<GameItemProps> = args => <GameItem {...args} />;

WithPayment.args = {
  downloadLink: 'https://wongames.com/game/download/21312ndasd',
};
