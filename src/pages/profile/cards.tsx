import Profile from '../../templates/Profile';
import CardsList, { CardsListProps } from '../../components/CardsList';

import cardsMock from '../../components/PaymentOptions/mock';

export default function Cards({ cards }: CardsListProps) {
  return (
    <Profile>
      <CardsList cards={cards} />
    </Profile>
  );
}

export function getServerSideProps() {
  return {
    props: {
      cards: cardsMock,
    },
  };
}
