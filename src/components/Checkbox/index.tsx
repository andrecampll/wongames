/* eslint-disable jsx-a11y/label-has-associated-control */
import { InputHTMLAttributes, useState } from 'react';
import { Wrapper, Label, Input } from './styles';

export type CheckboxProps = {
  onCheck?: (status: boolean) => void;
  label?: string;
  labelFor?: string;
  labelColor?: 'white' | 'black';
} & InputHTMLAttributes<HTMLInputElement>;

const Checkbox = ({
  onCheck,
  label,
  labelFor = '',
  labelColor = 'white',
}: CheckboxProps) => {
  const [checked, setChecked] = useState(false);

  const onChange = () => {
    const status = !checked;

    setChecked(status);

    if (onCheck) {
      onCheck(status);
    }
  };

  return (
    <Wrapper>
      <Input
        id={labelFor}
        type="checkbox"
        onChange={onChange}
        checked={checked}
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
