import { Story, Meta } from '@storybook/react/types-6-0';
import ProfileMenu from './index';

export default {
  title: 'ProfileMenu',
  component: ProfileMenu,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Basic: Story = () => <ProfileMenu />;
