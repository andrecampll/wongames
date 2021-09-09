import { Session } from 'next-auth';
import { QueryProfileMe } from '../../graphql/generated/QueryProfileMe';
import { QUERY_PROFILE_ME } from '../../graphql/queries/profile';
import { initializeApollo } from '../../utils/apollo';

export const useMe = async (session: Session) => {
  const apolloClient = initializeApollo(null, session);

  const { data } = await apolloClient.query<QueryProfileMe>({
    query: QUERY_PROFILE_ME,
  });

  return {
    username: data.me?.username,
    email: data.me?.email,
  };
};
