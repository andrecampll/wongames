import { screen } from '@testing-library/react';
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart';
import { render } from '../../../utils/test-utils';

import Button from '../../../components/Button';

import 'jest-styled-components';

describe('Button', () => {
  it('should be able to render a medium Button by default', () => {
    const { container } = render(<Button>Buy now</Button>);

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      padding: '0.8rem 3.2rem',
      height: '4rem',
      'font-size': '1.4rem',
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should be able to render a small Button', () => {
    render(<Button size="small">Buy now</Button>);

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem',
    });
  });

  it('should be able to render a large Button', () => {
    render(<Button size="large">Buy now</Button>);

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      height: '5rem',
      'font-size': '1.6rem',
      padding: '0.8rem 4.8rem',
    });
  });

  it('should be able to render a full-width Button', () => {
    render(<Button fullWidth>Buy now</Button>);

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      width: '100%',
    });
  });

  it('should be able to render an icon-version Button', () => {
    render(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Buy now</Button>,
    );

    expect(screen.getByText(/buy now/i)).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('should be able to render an minimal-version Button', () => {
    render(
      <Button icon={<AddShoppingCart data-testid="icon" />} minimal>
        Buy now
      </Button>,
    );

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      background: 'none',
      color: '#F231A5',
    });

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyleRule(
      'background',
      'none',
      {
        modifier: ':hover',
      },
    );
  });

  it('should be able to render Button as a Link', () => {
    render(
      <Button as="a" href="/link">
        Buy now
      </Button>,
    );

    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      '/link',
    );
  });

  it('should be able to render a disabled Button', () => {
    render(<Button disabled>Buy now</Button>);

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyleRule(
      'cursor',
      'not-allowed',
      {
        modifier: ':disabled',
      },
    );
  });
});
