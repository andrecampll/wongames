import { screen } from '@testing-library/react';
import Button from '../../../components/Button';
import { renderWithTheme } from '../../../utils/tests/helpers';
import 'jest-styled-components';

describe('Button', () => {
  it('should be able to render a medium Button by default', () => {
    renderWithTheme(<Button>Buy now</Button>);

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      padding: '0.8rem 3.2rem',
      height: '4rem',
      'font-size': '1.4rem',
    });
  });

  it('should be able to render a small Button', () => {
    renderWithTheme(<Button size="small">Buy now</Button>);

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem',
    });
  });

  it('should be able to render a large Button', () => {
    renderWithTheme(<Button size="large">Buy now</Button>);

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      height: '5rem',
      'font-size': '1.6rem',
      padding: '0.8rem 4.8rem',
    });
  });

  it('should be able to render a full-width Button', () => {
    renderWithTheme(<Button fullWidth>Buy now</Button>);

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      width: '100%',
    });
  });
});
