import { Container } from '../../components/Container';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';

import { SectionFooter } from './styles';

export type BaseTemplateProps = {
  children: React.ReactNode;
};

const Base = ({ children }: BaseTemplateProps) => (
  <section>
    <Container>
      <Menu />

      {children}

      <SectionFooter>
        <Container>
          <Footer />
        </Container>
      </SectionFooter>
    </Container>
  </section>
);

export default Base;
