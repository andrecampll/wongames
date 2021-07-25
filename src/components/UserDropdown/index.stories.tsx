import { Story, Meta } from '@storybook/react/types-6-0';
import UserDropdown, { UserDropdownProps } from './index';

export default {
  title: 'UserDropdown',
  component: UserDropdown,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Basic: Story<UserDropdownProps> = args => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
    <UserDropdown {...args} />
  </div>
);

Basic.args = {
  username: 'John Doe',
};
