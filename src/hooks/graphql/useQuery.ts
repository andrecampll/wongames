import { QueryHookOptions, useQuery as useApolloQuery } from '@apollo/client';
import { DocumentNode } from 'graphql';
import { useCallback, useState } from 'react';

export const useQuery = <Result = unknown, Variables = Record<string, unknown>>(
  query: DocumentNode,
  options: QueryHookOptions<Result, Variables>,
) => {
  const [refetching, setRefetching] = useState(false);

  const { refetch: _refetch, ...result } = useApolloQuery<Result, Variables>(
    query,
    {
      nextFetchPolicy: 'cache-first',
      ...options,
    },
  );

  const refetch = useCallback(
    (variables?: Variables) => {
      setRefetching(true);
      return _refetch(variables).finally(() => setRefetching(false));
    },
    [_refetch],
  );

  return {
    refetch,
    refetching,
    ...result,
  };
};
