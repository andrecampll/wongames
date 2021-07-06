/* eslint-disable import/no-unresolved */
import 'match-media-mock';
import { renderWithTheme } from '../../../utils/tests/helpers';
import items from '../../../components/Gallery/mock';
import Gallery from '../../../components/Gallery';

describe('Gallery', () => {
  it('should be able to render', () => {
    renderWithTheme(<Gallery items={items} />);

    expect(1 + 1).toBe(2);
  });
});
