/* eslint-disable jsx-a11y/label-has-associated-control */
import { Wrapper, Label, Input } from './styles';

export type CheckboxProps = {
  label?: string;
  labelFor?: string;
  labelColor?: 'white' | 'black';
};

const Checkbox = ({
  label,
  labelFor = '',
  labelColor = 'white',
}: CheckboxProps) => (
  <Wrapper>
    <Input id={labelFor} type="checkbox" />
    {!!label && (
      <Label htmlFor={labelFor} labelColor={labelColor}>
        {label}
      </Label>
    )}
  </Wrapper>
);

export default Checkbox;
