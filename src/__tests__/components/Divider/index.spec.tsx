import { Divider } from '../../../components/Divider';
import { renderWithTheme } from '../../../utils/tests/helpers';

describe('Divider', () => {
  it('should be able to render', () => {
    const { container } = renderWithTheme(<Divider />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <hr
        class="sc-bdfBwQ kCZGez"
      />
    `);
  });
});
