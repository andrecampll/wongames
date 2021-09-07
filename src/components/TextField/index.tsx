/* eslint-disable no-unused-expressions */
import { useState, InputHTMLAttributes } from 'react';

import { Wrapper, Label, InputWrapper, Input, Icon, Error } from './styles';

export type TextFieldProps = {
  onInputChange?: (value: string) => void;
  label?: string;
  initialValue?: string;
  icon?: JSX.Element;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = ({
  label,
  initialValue = '',
  iconPosition = 'left',
  onInputChange,
  name,
  icon,
  disabled = false,
  error,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setValue(newValue);

    !!onInputChange && onInputChange(newValue);
  };

  return (
    <Wrapper disabled={disabled} error={!!error}>
      {!!label && <Label htmlFor={name}>{label}</Label>}
      <InputWrapper>
        {!!icon && <Icon iconPosition={iconPosition}>{icon}</Icon>}
        <Input
          iconPosition={iconPosition}
          type="text"
          onChange={onChange}
          value={value}
          disabled={disabled}
          name={name}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </InputWrapper>
      {!!error && <Error>{error}</Error>}
    </Wrapper>
  );
};

export default TextField;
