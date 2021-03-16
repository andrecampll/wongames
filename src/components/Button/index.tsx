import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { Wrapper } from './styles';

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  icon?: JSX.Element;
  as?: React.ElementType;
  minimal?: boolean;
} & ButtonTypes;

const Button = ({
  children,
  size = 'medium',
  fullWidth = false,
  icon,
  minimal = false,
  ...props
}: ButtonProps) => (
  <Wrapper
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    minimal={minimal}
    {...props}
  >
    {icon}
    {!!children && <span>{children}</span>}
  </Wrapper>
);

export default Button;
