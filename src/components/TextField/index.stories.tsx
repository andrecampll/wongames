import { Story, Meta } from '@storybook/react/types-6-0';
import { Email } from '@styled-icons/material-outlined/Email';
import TextField, { TextFieldProps } from '.';

export default {
  title: 'TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    labelFor: 'Email',
    id: 'Email',
    initialValue: '',
    placeholder: 'john.cage@gmail.com',
  },
  argTypes: {
    onInput: { action: 'changed' },
    icon: { type: '' },
  },
} as Meta;

export const Default: Story<TextFieldProps> = args => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
);

export const WithIcon: Story = args => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
);

WithIcon.args = {
  icon: <Email />,
};
