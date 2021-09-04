import { Divider } from '../../../components/Divider';
import { render } from '../../../utils/test-utils';

describe('Divider', () => {
  it('should be able to render', () => {
    const { container } = render(<Divider />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <hr
        class="sc-bdfBwQ kCZGez"
      />
    `);
  });
});
