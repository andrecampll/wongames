/* eslint-disable no-unused-expressions */
import { useState, InputHTMLAttributes } from 'react';

import { Wrapper, Label, InputWrapper, Input, Icon } from './styles';

export type TextFieldProps = {
  onInput?: (value: string) => void;
  label?: string;
  labelFor?: string;
  initialValue?: string;
  icon?: JSX.Element;
  iconPosition?: 'left' | 'right';
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = ({
  label,
  labelFor = '',
  initialValue = '',
  iconPosition = 'left',
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
      <InputWrapper iconPosition={iconPosition}>
        {!!icon && <Icon iconPosition={iconPosition}>{icon}</Icon>}
        <Input
          iconPosition={iconPosition}
          type="text"
          onChange={onChange}
          value={value}
          {...props}
        />
      </InputWrapper>
    </Wrapper>
  );
};

export default TextField;
