import { GetServerSidePropsContext } from 'next';
import Profile from '../../templates/Profile';
import CardsList, { CardsListProps } from '../../components/CardsList';

import cardsMock from '../../components/PaymentOptions/mock';
import protectedRoutes from '../../utils/protectedUtils';

export default function Cards({ cards }: CardsListProps) {
  return (
    <Profile>
      <CardsList cards={cards} />
    </Profile>
  );
}

export function getServerSideProps(context: GetServerSidePropsContext) {
  const session = protectedRoutes(context);

  return {
    props: {
      cards: cardsMock,
      session,
    },
  };
}
