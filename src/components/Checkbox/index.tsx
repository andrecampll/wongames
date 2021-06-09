/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { InputHTMLAttributes, useState } from 'react';
import { Wrapper, Label, Input } from './styles';

export type CheckboxProps = {
  onCheck?: (status: boolean) => void;
  label?: string;
  labelFor?: string;
  labelColor?: 'white' | 'black';
  isChecked?: boolean;
  value?: string | ReadonlyArray<string> | number;
} & InputHTMLAttributes<HTMLInputElement>;

const Checkbox = ({
  onCheck,
  isChecked = false,
  label,
  labelFor = '',
  labelColor = 'white',
  value,
  ...props
}: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked);

  const onChange = () => {
    const status = !checked;

    setChecked(status);

    !!onCheck && onCheck(status);
  };

  return (
    <Wrapper>
      <Input
        id={labelFor}
        type="checkbox"
        onChange={onChange}
        checked={checked}
        value={value}
        {...props}
      />
      {!!label && (
        <Label htmlFor={labelFor} labelColor={labelColor}>
          {label}
        </Label>
      )}
    </Wrapper>
  );
};

export default Checkbox;
