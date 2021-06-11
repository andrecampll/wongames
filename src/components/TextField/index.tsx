/* eslint-disable no-unused-expressions */
import { useState, InputHTMLAttributes } from 'react';

import { Wrapper, Label, InputWrapper, Input, Icon } from './styles';

export type TextFieldProps = {
  onInput?: (value: string) => void;
  label?: string;
  labelFor?: string;
  initialValue?: string;
  icon?: JSX.Element;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = ({
  label,
  labelFor = '',
  initialValue = '',
  onInput,
  icon,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setValue(newValue);

    !!onInput && onInput(newValue);
  };

  return (
    <Wrapper>
      {!!label && <Label htmlFor={labelFor}>{label}</Label>}
      <InputWrapper>
        {!!icon && <Icon>{icon}</Icon>}
        <Input type="text" onChange={onChange} value={value} {...props} />
      </InputWrapper>
    </Wrapper>
  );
};

export default TextField;
