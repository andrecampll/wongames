import { Story, Meta } from '@storybook/react/types-6-0';
import CartIcon from '.';

export default {
  title: 'CartIcon',
  component: CartIcon,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Basic: Story = args => <CartIcon {...args} />;

export const WithItems: Story = args => <CartIcon {...args} />;

WithItems.args = {
  quantity: 12,
};
