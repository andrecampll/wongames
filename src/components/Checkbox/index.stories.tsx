import { Story, Meta } from '@storybook/react/types-6-0';
import Checkbox, { CheckboxProps } from './index';

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    onCheck: {
      action: 'checked',
    },
  },
} as Meta;

export const Basic: Story<CheckboxProps> = args => (
  <>
    <div style={{ padding: 10 }}>
      <Checkbox
        name="category"
        label="Action"
        labelFor="action"
        labelColor="black"
        isChecked
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox
        name="category"
        label="Action"
        labelFor="action"
        labelColor="black"
        isChecked
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox
        name="category"
        label="Action"
        labelFor="action"
        labelColor="black"
        isChecked
        {...args}
      />
    </div>
  </>
);
