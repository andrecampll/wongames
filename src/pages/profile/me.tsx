/* eslint-disable react-hooks/rules-of-hooks */
import { GetServerSidePropsContext } from 'next';
import { useMe } from '../../hooks/pages/useMe';
import protectedRoutes from '../../utils/protectedUtils';

import FormProfile, { FormProfileProps } from '../../components/FormProfile';
import Profile from '../../templates/Profile';

export default function Me(props: FormProfileProps) {
  return (
    <Profile>
      <FormProfile {...props} />
    </Profile>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context);

  const { email, username } = await useMe(session);

  return {
    props: { session, username, email },
  };
}
