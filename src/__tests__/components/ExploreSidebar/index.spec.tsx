import { screen } from '@testing-library/react';
import ExploreSidebar from '../../../components/ExploreSidebar';
import { renderWithTheme } from '../../../utils/tests/helpers';

import items from '../../../components/ExploreSidebar/mock';

describe('ExploreSidebar', () => {
  it('should be able to render the headings', () => {
    renderWithTheme(<ExploreSidebar items={items} onFilter={jest.fn} />);

    expect(
      screen.getByRole('heading', {
        name: /price/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /sort by/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /system/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /genre/i })).toBeInTheDocument();
  });

  it('should be able to render Inputs', () => {
    renderWithTheme(<ExploreSidebar items={items} onFilter={jest.fn} />);

    expect(
      screen.getByRole('checkbox', { name: /under \$50/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('radio', { name: /high to low/i }),
    ).toBeInTheDocument();
  });

  it('should render the filter button', () => {
    renderWithTheme(<ExploreSidebar items={items} onFilter={jest.fn} />);

    expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument();
  });
});
