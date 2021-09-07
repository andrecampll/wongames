import { useSession } from 'next-auth/client';

import { Container } from '../../components/Container';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';

import { Wrapper, SectionFooter, Content } from './styles';

export type BaseTemplateProps = {
  children: React.ReactNode;
};

const Base = ({ children }: BaseTemplateProps) => {
  const [session] = useSession();

  return (
    <Wrapper>
      <Container>
        <Menu username={session?.user?.name} />
      </Container>

      <Content>{children}</Content>

      <SectionFooter>
        <Container>
          <Footer />
        </Container>
      </SectionFooter>
    </Wrapper>
  );
};

export default Base;
