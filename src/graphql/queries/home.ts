import { gql } from '@apollo/client';
import { BannerFragment } from '../fragments/banner';
import { GameFragment } from '../fragments/game';

export const QUERY_HOME = gql`
  query QueryHome {
    banners {
      ...BannerFragment
    }

    newGames: games(
      where: { release_date_lte: "2020-08-01" }
      sort: "release_date:desc"
      limit: 8
    ) {
      ...GameFragment
    }
  }

  ${BannerFragment}
  ${GameFragment}
`;
