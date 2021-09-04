import { screen } from '@testing-library/react';
import Ribbon from '../../../components/Ribbon';
import { render } from '../../../utils/test-utils';

import 'jest-styled-components';

describe('Ribbon', () => {
  it('should be able to render', () => {
    const { container } = render(<Ribbon>Best Seller</Ribbon>);

    expect(screen.getByText(/best seller/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should be able to render with primary color', () => {
    const { container } = render(<Ribbon>Best Seller</Ribbon>);

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      backgroundColor: '#F231A5',
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should be able to render with secondary color', () => {
    const { container } = render(
      <Ribbon color="secondary">Best Seller</Ribbon>,
    );

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      backgroundColor: '#3CD3C1',
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should be able to render with default font-size', () => {
    const { container } = render(<Ribbon>Best Seller</Ribbon>);

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      height: '3.6rem',
      fontSize: '1.4rem',
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should be able to render with small font-size', () => {
    const { container } = render(<Ribbon size="small">Best Seller</Ribbon>);

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem',
    });

    expect(container.firstChild).toMatchSnapshot();
  });
});
