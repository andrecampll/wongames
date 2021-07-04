/* eslint-disable import/no-unresolved */
import 'match-media-mock';
import { screen } from '@testing-library/react';
import GameDetails, { GameDetailsProps } from '../../../components/GameDetails';

import { renderWithTheme } from '../../../utils/tests/helpers';

const props: GameDetailsProps = {
  developer: 'Different Tales',
  platforms: ['windows', 'linux', 'mac'],
  releaseDate: '2020-11-21T23:00:00',
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
});
