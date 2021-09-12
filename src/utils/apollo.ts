import { useMemo } from 'react';
import { setContext } from '@apollo/client/link/context';
import {
  ApolloClient,
  HttpLink,
  NormalizedCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { Session } from 'next-auth';
import apolloCache from './apolloCache';

let apolloClient: ApolloClient<NormalizedCacheObject | null>;

function createApolloClient(session?: Session | null) {
  const httpLink = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
  });

  const authLink = setContext((_, { headers, session: clientSession }) => {
    const jwt = session?.jwt || clientSession?.jwt || '';
    const authorization = jwt ? `Bearer ${jwt}` : '';

    return { headers: { ...headers, authorization } };
  });

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: authLink.concat(httpLink),
    cache: apolloCache,
  });
}

export function initializeApollo(
  initialState = null,
  session?: Session | null,
) {
  const apolloClientGlobal = apolloClient ?? createApolloClient(session);

  if (initialState) {
    apolloClientGlobal.cache.restore(
      initialState as NormalizedCacheObject & NormalizedCache,
    );
  }

  if (typeof window === 'undefined') return apolloClientGlobal;

  apolloClient = apolloClient ?? apolloClientGlobal;

  return apolloClient;
}

export function useApollo(initialState = null, session?: Session) {
  const store = useMemo(() => initializeApollo(initialState, session), [
    initialState,
    session,
  ]);

  return store;
}
