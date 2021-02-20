import { Wrapper } from './styles';

export type ButtonProps = {
  children?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
};

const Button = ({
  children,
  size = 'medium',
  fullWidth = false,
}: ButtonProps) => (
  <Wrapper size={size} fullWidth={fullWidth}>
    {!!children && <span>{children}</span>}
  </Wrapper>
);

export default Button;
