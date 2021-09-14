import { render, screen } from '../../../utils/test-utils';
import Spinner from '../../../components/Spinner';

describe('<Spinner />', () => {
  it('Should render correctly', () => {
    render(<Spinner />);

    expect(screen.getByTitle(/loading/i)).toBeInTheDocument();
  });
});
