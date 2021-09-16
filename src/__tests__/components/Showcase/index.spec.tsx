/* eslint-disable import/no-unresolved */
import '../../../../.jest/session.mock';
import 'match-media-mock';
import { screen } from '@testing-library/react';
import { render } from '../../../utils/test-utils';
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
    render(<Showcase {...props} />);

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
    render(<Showcase games={props.games} highlight={props.highlight} />);

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
    render(<Showcase games={props.games} title={props.title} />);

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
    render(<Showcase highlight={props.highlight} title={props.title} />);

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
