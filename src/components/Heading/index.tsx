import { Wrapper } from './styles';

export type HeadingProps = {
  children: React.ReactNode;
  color?: 'white' | 'black';
  lineLeft?: boolean;
  lineBottom?: boolean;
};

const Heading = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false,
}: HeadingProps) => (
  <Wrapper color={color} lineLeft={lineLeft} lineBottom={lineBottom}>
    {children}
  </Wrapper>
);

export default Heading;
