/* eslint-disable @typescript-eslint/no-non-null-assertion */
import styled, { css } from 'styled-components';
import { CheckboxProps } from '.';

export const Wrapper = styled.div``;

export const Label = styled.label<Pick<CheckboxProps, 'labelColor'>>`
  ${({ theme, labelColor }) => css`
    color: ${theme.colors[labelColor!]};
  `}
`;
