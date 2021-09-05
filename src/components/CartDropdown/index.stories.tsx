import { Story, Meta } from '@storybook/react/types-6-0';
import items from '../CartList/mock';
import CartDropdown from '.';

export default {
  title: 'CartDropdown',
  component: CartDropdown,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Basic: Story = args => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
    <CartDropdown {...args} />
  </div>
);

Basic.args = {
  cartContextValue: {
    items,
    quantity: items.length,
    total: 'R$ 300,00',
  },
};

export const Empty: Story = () => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
    <CartDropdown />
  </div>
);
