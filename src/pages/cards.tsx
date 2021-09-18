import { GetServerSidePropsContext } from 'next';
import Profile from '../templates/Profile';

import protectedRoutes from '../utils/protectedUtils';
// import mockCards from '../components/PaymentOptions/mock';
// import CardsList, { CardsListProps } from '../components/CardsList';

export default function ProfileCards() {
  return <Profile>{/* <CardsList cards={cards} /> */}</Profile>;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context);

  return {
    props: {
      // cards: mockCards,
      session,
    },
  };
}
