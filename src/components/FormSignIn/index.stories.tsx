import { Story, Meta } from '@storybook/react/types-6-0';
import FormSignIn from './index';

export default {
  title: 'Form/FormSignIn',
  component: FormSignIn,
} as Meta;

export const Basic: Story = args => (
  <div
    style={{
      width: 300,
      margin: 'auto',
    }}
  >
    <FormSignIn {...args} />
  </div>
);
