import { Story, Meta } from '@storybook/react/types-6-0';
import GameDetails, { GameDetailsProps } from './index';

export default {
  title: 'Game/GameDetails',
  component: GameDetails,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  args: {
    platforms: ['windows', 'linux', 'mac'],
  },
  argTypes: {
    platforms: {
      control: {
        type: 'inline-check',
        options: ['windows', 'linux', 'mac'],
      },
    },
  },
} as Meta;

export const Basic: Story<GameDetailsProps> = args => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameDetails {...args} />
  </div>
);
