import { gql } from '@apollo/client';

export const BannerFragment = gql`
  fragment BannerFragment on Banner {
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
`;
