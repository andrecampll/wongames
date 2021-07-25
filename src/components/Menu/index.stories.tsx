import { Story, Meta } from '@storybook/react/types-6-0';
import Menu, { MenuProps } from './index';

export default {
  title: 'Menu',
  component: Menu,
} as Meta;

export const Basic: Story<MenuProps> = args => <Menu {...args} />;

Basic.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark',
  },
};

export const Logged: Story<MenuProps> = args => <Menu {...args} />;

Logged.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark',
  },
};

Logged.args = {
  username: 'John Doe',
};
