import { GetServerSidePropsContext } from 'next';
import Profile from '../../templates/Profile';
import FormProfile from '../../components/FormProfile';
import protectedRoutes from '../../utils/protectedUtils';

export default function Me() {
  return (
    <Profile>
      <FormProfile />
    </Profile>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context);

  return {
    props: { session },
  };
}
