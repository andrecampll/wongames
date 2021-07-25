import { Story, Meta } from '@storybook/react/types-6-0';
import items from '../CartList/mock';
import CartDropdown, { CartDropdownProps } from '.';

export default {
  title: 'CartDropdown',
  component: CartDropdown,
  args: {
    items,
    total: 'R$ 300,00',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Basic: Story<CartDropdownProps> = args => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
    <CartDropdown {...args} />
  </div>
);

export const Empty: Story<CartDropdownProps> = () => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
    <CartDropdown />
  </div>
);
