/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { InputHTMLAttributes } from 'react';
import { Wrapper, Label, Input } from './styles';

type RadioValue = string | ReadonlyArray<string | number>;

export type RadioProps = {
  onCheck?: (value: RadioValue) => void;
  label?: string;
  labelFor?: string;
  labelColor?: 'white' | 'black';
  value?: RadioValue;
} & InputHTMLAttributes<HTMLInputElement>;

const Radio = ({
  onCheck,
  label,
  labelFor = '',
  labelColor = 'white',
  value,
  ...props
}: RadioProps) => {
  const onChange = () => {
    !!onCheck && onCheck(value);
  };

  return (
    <Wrapper>
      <Input
        id={labelFor}
        type="radio"
        onChange={onChange}
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

export default Radio;
