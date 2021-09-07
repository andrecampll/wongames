import { GetServerSidePropsContext } from 'next';
import Profile from '../../templates/Profile';
import OrdersList, { OrdersListProps } from '../../components/OrdersList';

import ordersMock from '../../components/OrdersList/mock';
import protectedRoutes from '../../utils/protectedUtils';

export default function Orders({ items }: OrdersListProps) {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context);

  return {
    props: {
      items: ordersMock,
      session,
    },
  };
}
