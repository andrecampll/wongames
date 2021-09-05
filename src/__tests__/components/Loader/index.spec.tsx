import { render, screen } from '../../../utils/test-utils';
import Loader from '../../../components/Loader';

describe('<Loader />', () => {
  it('Should render correctly', () => {
    render(<Loader />);

    expect(screen.getByTitle(/loading/i)).toBeInTheDocument();
  });
});
