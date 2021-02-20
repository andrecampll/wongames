import Menu from '../../../components/Menu';
import { renderWithTheme } from '../../../utils/tests/helpers';

describe('Menu', () => {
  it('should be able to render', () => {
    renderWithTheme(<Menu />);

    expect(1 + 1).toEqual(2);
  });
});
