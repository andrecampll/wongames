import { renderWithTheme } from '../../../utils/tests/helpers';

import { FormWrapper, FormLink } from '../../../components/Form';

describe('Form', () => {
  it('should be able to render', () => {
    const { container } = renderWithTheme(
      <FormWrapper>
        <FormLink>
          My nice <a href="#">link</a>
        </FormLink>
      </FormWrapper>,
    );

    expect(container.parentElement).toMatchInlineSnapshot(`
      <body>
        <div>
          <div
            class="sc-iBPRYJ hlxcom"
          >
            <div
              class="sc-fubCfw dfAEFy"
            >
              My nice 
              <a
                href="#"
              >
                link
              </a>
            </div>
          </div>
           
        </div>
      </body>
    `);
  });
});
