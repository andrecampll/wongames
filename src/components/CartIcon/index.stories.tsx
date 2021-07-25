import { Story, Meta } from '@storybook/react/types-6-0';
import CartIcon, { CartIconProps } from '.';

export default {
  title: 'CartIcon',
  component: CartIcon,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Basic: Story<CartIconProps> = args => <CartIcon {...args} />;

export const WithItems: Story<CartIconProps> = args => <CartIcon {...args} />;

WithItems.args = {
  quantity: 12,
};
