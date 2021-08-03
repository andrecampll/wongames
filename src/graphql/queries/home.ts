import { gql } from '@apollo/client';
import { BannerFragment } from '../fragments/banner';

export const QUERY_HOME = gql`
  query QueryHome {
    banners {
      ...BannerFragment
    }
  }

  ${BannerFragment}
`;
