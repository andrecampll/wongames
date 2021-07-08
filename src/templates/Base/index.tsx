import { Container } from '../../components/Container';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';

import { Wrapper, SectionFooter } from './styles';

export type BaseTemplateProps = {
  children: React.ReactNode;
};

const Base = ({ children }: BaseTemplateProps) => (
  <Wrapper>
    <Container>
      <Menu />
    </Container>

    {children}

    <SectionFooter>
      <Container>
        <Footer />
      </Container>
    </SectionFooter>
  </Wrapper>
);

export default Base;
