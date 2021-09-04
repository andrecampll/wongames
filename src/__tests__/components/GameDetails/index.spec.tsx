/* eslint-disable import/no-unresolved */
import 'match-media-mock';
import { screen } from '@testing-library/react';
import GameDetails, { GameDetailsProps } from '../../../components/GameDetails';

import { render } from '../../../utils/test-utils';

const props: GameDetailsProps = {
  publisher: '2K',
  developer: 'Different Tales',
  platforms: ['windows', 'linux', 'mac'],
  releaseDate: '2020-11-21T23:00:00',
  rating: 'BR0',
  genres: ['Role-playing', 'Narrative'],
};

describe('<GameDetails/>', () => {
  it('should be able to render the heading blocks', () => {
    render(<GameDetails {...props} />);

    expect(
      screen.getByRole('heading', { name: /developer/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /release date/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /platforms/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /rating/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /genres/i }),
    ).toBeInTheDocument();
  });

  it('should be able to render the platform icons', () => {
    render(<GameDetails {...props} />);

    expect(screen.getByRole('img', { name: /linux/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /windows/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /mac/i })).toBeInTheDocument();
  });

  it('should be able to render the formatted date', () => {
    render(<GameDetails {...props} />);

    expect(screen.getByText('Nov 21, 2020')).toBeInTheDocument();
  });

  it('should render the developer', () => {
    render(<GameDetails {...props} />);

    expect(screen.getByText(/different tales/i)).toBeInTheDocument();
  });

  it('should render the publisher', () => {
    render(<GameDetails {...props} />);

    expect(screen.getByText(/2k/i)).toBeInTheDocument();
  });

  it('should be able to render free rating when BR0', () => {
    render(<GameDetails {...props} />);

    expect(screen.getByText(/free/i)).toBeInTheDocument();
  });

  it('should be able to render 18+ rating when BR18', () => {
    render(<GameDetails {...props} rating="BR18" />);

    expect(screen.getByText(/18\+/i)).toBeInTheDocument();
  });

  it('should be able to render a list of genres', () => {
    render(<GameDetails {...props} rating="BR18" />);

    expect(screen.getByText('Role-playing / Narrative')).toBeInTheDocument();
  });
});
