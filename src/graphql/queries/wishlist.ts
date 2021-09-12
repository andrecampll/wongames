import { gql, QueryHookOptions } from '@apollo/client';
import { useQuery } from '../../hooks/graphql/useQuery';
import { GameFragment } from '../fragments/game';
import {
  QueryWishlist,
  QueryWishlistVariables,
} from '../generated/QueryWishlist';

export const QUERY_WISHLIST = gql`
  query QueryWishlist($identifier: String!) {
    wishlists(where: { user: { email: $identifier } }) {
      id
      games {
        ...GameFragment
      }
    }
  }
  ${GameFragment}
`;

export function useQueryWishlist(
  options?: QueryHookOptions<QueryWishlist, QueryWishlistVariables>,
) {
  return useQuery<QueryWishlist, QueryWishlistVariables>(
    QUERY_WISHLIST,
    options,
  );
}
