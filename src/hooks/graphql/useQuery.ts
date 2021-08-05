import { useCallback, useState } from 'react';
import { DocumentNode } from 'graphql';
import { QueryHookOptions, useQuery as useApolloQuery } from '@apollo/client';

export const useQuery = <Result = unknown, Variables = Record<string, unknown>>(
  query: DocumentNode,
  options: QueryHookOptions<Result, Variables> = {},
) => {
  const [refetching, setRefetching] = useState(false);

  const { error, refetch: _refetch, ...result } = useApolloQuery<
    Result,
    Variables
  >(query, {
    nextFetchPolicy: 'cache-first',
    ...options,
  });

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
    error,
    ...result,
  };
};
