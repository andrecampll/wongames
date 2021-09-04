import { Grid } from '../../../components/Grid';
import { render } from '../../../utils/test-utils';

describe('Grid', () => {
  it('should be able to render', () => {
    const { container } = render(<Grid />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="sc-bdfBwQ dkONjT"
      />
    `);
  });
});
