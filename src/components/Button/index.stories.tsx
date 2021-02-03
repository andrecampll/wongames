import { Story, Meta } from '@storybook/react/types-6-0';
import Button from './index';

export default {
  title: 'Button',
  component: Button,
} as Meta;

export const Basic: Story = () => <Button />;
