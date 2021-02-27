import { Story, Meta } from '@storybook/react/types-6-0';
import Footer from './index';

export default {
  title: 'Footer',
  component: Footer,
} as Meta;

export const Basic: Story = () => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Footer />
  </div>
);

Basic.parameters = {
  background: {
    default: 'light',
  },
};
