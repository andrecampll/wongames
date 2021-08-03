import { gql } from '@apollo/client';

export const QUERY_HOME = gql`
  query QueryHome {
    banners {
      id
      image {
        url
        alternativeText
      }
      title
      subtitle
      button {
        label
        link
      }
      ribbon {
        text
        color
        size
      }
    }
  }
`;
