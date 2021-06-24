import Link from 'next/link';
import Heading from '../../components/Heading';
import Logo from '../../components/Logo';
import {
  Wrapper,
  BannerBlock,
  Subtitle,
  Footer,
  Content,
  BannerContent,
  ContentWrapper,
} from './styles';

type AuthProps = {
  title: string;
  children: React.ReactNode;
};

const Auth = ({ title, children }: AuthProps) => (
  <Wrapper>
    <BannerBlock>
      <BannerContent>
        <Link href="/">
          <a>
            <Logo id="banner" />
          </a>
        </Link>

        <div>
          <Heading size="huge">All your favorite games in one place</Heading>
          <Subtitle>
            <strong>WON</strong> is the best and most complete gaming platform
          </Subtitle>
        </div>

        <Footer>Won Games 2020 - Todos os Direitos</Footer>
      </BannerContent>
    </BannerBlock>

    <Content>
      <ContentWrapper>
        <Link href="/">
          <a>
            <Logo id="content" color="black" size="large" />
          </a>
        </Link>
        <Heading color="black" lineColor="secondary" lineLeft>
          {title}
        </Heading>

        {children}
      </ContentWrapper>
    </Content>
  </Wrapper>
);

export default Auth;
