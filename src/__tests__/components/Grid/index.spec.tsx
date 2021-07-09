import { Grid } from '../../../components/Grid';
import { renderWithTheme } from '../../../utils/tests/helpers';

describe('Grid', () => {
  it('should be able to render', () => {
    const { container } = renderWithTheme(<Grid />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="sc-bdfBwQ dkONjT"
      />
    `);
  });
});
