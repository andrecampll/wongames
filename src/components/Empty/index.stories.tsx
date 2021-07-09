import { Story, Meta } from '@storybook/react/types-6-0';
import Empty, { EmptyProps } from './index';

export default {
  title: 'Empty',
  component: Empty,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Basic: Story<EmptyProps> = args => <Empty {...args} />;

Basic.args = {
  title: 'Your wishlsit is empty',
  description: 'Games added to your wishlist will appear here',
};
