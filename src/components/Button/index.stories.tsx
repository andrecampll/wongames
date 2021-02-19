import { Story, Meta } from '@storybook/react/types-6-0';
import Button from './index';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
    },
  },
} as Meta;

export const Basic: Story = args => <Button {...args} />;

Basic.args = {
  children: 'Buy now',
};
