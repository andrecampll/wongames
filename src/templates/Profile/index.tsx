import { ReactNode } from 'react';

import Base from '../Base';
import Heading from '../../components/Heading';
import { Container } from '../../components/Container';
import ProfileMenu from '../../components/ProfileMenu';

import { Main, Content } from './styles';

export type ProfileTemplateProps = {
  children: ReactNode;
};

const Profile = ({ children }: ProfileTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        My profile
      </Heading>

      <Main>
        <ProfileMenu />
        <Content>{children}</Content>
      </Main>
    </Container>
  </Base>
);

export default Profile;
