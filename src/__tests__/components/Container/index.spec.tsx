import 'jest-styled-components';
import theme from '../../../styles/theme';
import { renderWithTheme } from '../../../utils/tests/helpers';

import { Container } from '../../../components/Container';

describe('Container', () => {
  it('should be able to render', () => {
    const { container } = renderWithTheme(
      <Container>
        <span>wongames</span>
      </Container>,
    );

    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      theme.grid.container,
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        width: 100%;
        max-width: 130rem;
        margin-left: auto;
        margin-right: auto;
        padding-left: calc(3.2rem / 2);
        padding-right: calc(3.2rem / 2);
      }

      <div
        class="c0"
      >
        <span>
          wongames
        </span>
      </div>
    `);
  });
});
