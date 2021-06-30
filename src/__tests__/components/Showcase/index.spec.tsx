/* eslint-disable import/no-unresolved */
import 'match-media-mock';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../../utils/tests/helpers';
import highlightMock from '../../../components/Highlight/mock';
import gamesMock from '../../../components/GameCardSlider/mock';

import Showcase from '../../../components/Showcase';

const props = {
  title: 'Most Popular',
  highlight: highlightMock,
  games: gamesMock,
};

describe('<Showcase />', () => {
  it('should render full showcase', () => {
    renderWithTheme(<Showcase {...props} />);

    expect(
      screen.getByRole('heading', { name: /most popular/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: highlightMock.title }),
    ).toBeInTheDocument();

    expect(
      screen.getAllByRole('heading', { name: gamesMock[0].title }),
    ).toHaveLength(4);
  });

  it('should render without title', () => {
    renderWithTheme(
      <Showcase games={props.games} highlight={props.highlight} />,
    );

    expect(
      screen.getByRole('heading', { name: highlightMock.title }),
    ).toBeInTheDocument();

    expect(
      screen.getAllByRole('heading', { name: gamesMock[0].title }),
    ).toHaveLength(4);

    expect(
      screen.queryByRole('heading', { name: /most popular/i }),
    ).not.toBeInTheDocument();
  });

  it('should render without highlight', () => {
    renderWithTheme(<Showcase games={props.games} title={props.title} />);

    expect(
      screen.getByRole('heading', { name: /most popular/i }),
    ).toBeInTheDocument();

    expect(
      screen.getAllByRole('heading', { name: gamesMock[0].title }),
    ).toHaveLength(4);

    expect(
      screen.queryByRole('heading', { name: highlightMock.title }),
    ).not.toBeInTheDocument();
  });

  it('should render without games', () => {
    renderWithTheme(
      <Showcase highlight={props.highlight} title={props.title} />,
    );

    expect(
      screen.getByRole('heading', { name: /most popular/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: highlightMock.title }),
    ).toBeInTheDocument();

    expect(
      screen.queryByRole('heading', { name: gamesMock[0].title }),
    ).not.toBeInTheDocument();
  });
});
