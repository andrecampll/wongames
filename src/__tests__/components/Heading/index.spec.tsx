import { screen } from '@testing-library/react';
import Heading from '../../../components/Heading';
import { renderWithTheme } from '../../../utils/tests/helpers';
import 'jest-styled-components';

describe('Heading', () => {
  it('should be able to render a white heading by default', () => {
    renderWithTheme(<Heading>Won Games</Heading>);

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#FAFAFA',
    });
  });

  it('should be able to render a black heading when color is defined', () => {
    renderWithTheme(<Heading color="black">Won Games</Heading>);

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#030517',
    });
  });

  it('should be able to render a heading with a line to the left', () => {
    renderWithTheme(<Heading lineLeft>Won Games</Heading>);

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'border-left': '0.7rem solid #3CD3C1',
    });
  });

  it('should be able to render a heading with a line at the bottom', () => {
    renderWithTheme(<Heading lineBottom>Won Games</Heading>);

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #F231A5',
      {
        modifier: '::after',
      },
    );
  });
});
