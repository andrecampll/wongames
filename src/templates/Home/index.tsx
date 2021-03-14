import Menu from '../../components/Menu';
import Heading from '../../components/Heading';
import Footer from '../../components/Footer';
import { Container } from '../../components/Container';

import { Wrapper } from './styles';

const Home = () => (
  <Wrapper>
    <Container>
      <Menu />
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary" color="black">
        News
      </Heading>
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        Most Popular
      </Heading>
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        Upcoming
      </Heading>
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        Free Games
      </Heading>
    </Container>

    <Container>
      <Footer />
    </Container>
  </Wrapper>
);

export default Home;
