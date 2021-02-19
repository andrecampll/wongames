import { Wrapper } from './styles';

export type ButtonProps = {
  children?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
};

const Button = ({ children, size = 'medium' }: ButtonProps) => (
  <Wrapper size={size}>{!!children && <span>{children}</span>}</Wrapper>
);

export default Button;
