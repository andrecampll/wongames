import styled from 'styled-components';

import * as GameItemStyles from '../GameItem/styles';

export const Wrapper = styled.div`
  ${GameItemStyles.Wrapper} {
    &:last-child {
      border-bottom: 0;
    }
  }
`;
