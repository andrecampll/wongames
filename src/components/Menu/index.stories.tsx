import { Story, Meta } from '@storybook/react/types-6-0';
import Menu, { MenuProps } from './index';

export default {
  title: 'Menu',
  component: Menu,
} as Meta;

export const Basic: Story<MenuProps> = args => <Menu {...args} />;

Basic.parameters = {
  layout: 'fullscreen',
  background: {
    default: 'dark',
  },
};
