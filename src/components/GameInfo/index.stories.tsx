import { Story, Meta } from '@storybook/react/types-6-0';
import GameInfo from './index';

export default {
  title: 'GameInfo',
  component: GameInfo,
} as Meta;

export const Basic: Story = () => <GameInfo />;
