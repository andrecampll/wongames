/* eslint-disable import/no-unresolved */
import 'match-media-mock';
import { screen } from '@testing-library/react';
import GameDetails, { GameDetailsProps } from '../../../components/GameDetails';

import { renderWithTheme } from '../../../utils/tests/helpers';

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
    renderWithTheme(<GameDetails {...props} />);

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
    renderWithTheme(<GameDetails {...props} />);

    expect(screen.getByRole('img', { name: /linux/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /windows/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /mac/i })).toBeInTheDocument();
  });

  it('should be able to render the formatted date', () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(screen.getByText('Nov 21, 2020')).toBeInTheDocument();
  });

  it('should render the developer', () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(screen.getByText(/different tales/i)).toBeInTheDocument();
  });

  it('should render the publisher', () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(screen.getByText(/2k/i)).toBeInTheDocument();
  });

  it('should be able to render free rating when BR0', () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(screen.getByText(/free/i)).toBeInTheDocument();
  });

  it('should be able to render 18+ rating when BR18', () => {
    renderWithTheme(<GameDetails {...props} rating="BR18" />);

    expect(screen.getByText(/18\+/i)).toBeInTheDocument();
  });

  it('should be able to render a list of genres', () => {
    renderWithTheme(<GameDetails {...props} rating="BR18" />);

    expect(screen.getByText('Role-playing / Narrative')).toBeInTheDocument();
  });
});
