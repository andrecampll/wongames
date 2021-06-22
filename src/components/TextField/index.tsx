/* eslint-disable no-unused-expressions */
import { useState, InputHTMLAttributes } from 'react';

import { Wrapper, Label, InputWrapper, Input, Icon, Error } from './styles';

export type TextFieldProps = {
  onInput?: (value: string) => void;
  label?: string;
  labelFor?: string;
  initialValue?: string;
  icon?: JSX.Element;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = ({
  label,
  labelFor = '',
  initialValue = '',
  iconPosition = 'left',
  onInput,
  icon,
  disabled = false,
  error,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setValue(newValue);

    !!onInput && onInput(newValue);
  };

  return (
    <Wrapper disabled={disabled} error={!!error}>
      {!!label && <Label htmlFor={labelFor}>{label}</Label>}
      <InputWrapper>
        {!!icon && <Icon iconPosition={iconPosition}>{icon}</Icon>}
        <Input
          iconPosition={iconPosition}
          type="text"
          onChange={onChange}
          value={value}
          disabled={disabled}
          {...props}
        />
      </InputWrapper>
      {!!error && <Error>{error}</Error>}
    </Wrapper>
  );
};

export default TextField;
