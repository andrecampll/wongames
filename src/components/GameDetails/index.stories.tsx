import { Story, Meta } from '@storybook/react/types-6-0';
import GameDetails from './index';

export default {
  title: 'Game/GameDetails',
  component: GameDetails,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Basic: Story = () => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameDetails />
  </div>
);
