/* eslint-disable jsx-a11y/label-has-associated-control */
import { Wrapper } from './styles';

export type CheckboxProps = {
  label?: string;
  labelFor?: string;
};

const Checkbox = ({ label, labelFor = '' }: CheckboxProps) => (
  <Wrapper>
    <input id={labelFor} type="checkbox" />
    {!!label && <label htmlFor={labelFor}>{label}</label>}
  </Wrapper>
);

export default Checkbox;
