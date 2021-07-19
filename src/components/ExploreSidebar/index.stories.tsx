import { Story, Meta } from '@storybook/react/types-6-0';
import ExploreSidebar from './index';

export default {
  title: 'ExploreSidebar',
  component: ExploreSidebar,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Basic: Story = () => <ExploreSidebar />;
