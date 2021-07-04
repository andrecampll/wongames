/* eslint-disable import/no-unresolved */
import 'match-media-mock';
import { screen } from '@testing-library/react';
import TextContent, { TextContentProps } from '../../../components/TextContent';

import { renderWithTheme } from '../../../utils/tests/helpers';

import 'jest-styled-components';

const props: TextContentProps = {
  title: 'Description',
  content: `<h1>Content</h1>`,
};

describe('<TextContent/>', () => {
  it('should be able to render the title and content', () => {
    renderWithTheme(<TextContent {...props} />);

    expect(
      screen.getByRole('heading', { name: /description/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /content/i }),
    ).toBeInTheDocument();
  });

  it('should be able to render without title', () => {
    renderWithTheme(<TextContent content={props.content} />);

    expect(
      screen.queryByRole('heading', { name: /description/i }),
    ).not.toBeInTheDocument();
  });

  it('should be able to render dark-themed on mobile', () => {
    renderWithTheme(<TextContent {...props} />);

    const wrapper = screen.getByRole('heading', { name: /description/i })
      .parentElement;

    expect(wrapper).toHaveStyle({
      color: '#FAFAFA',
    });

    expect(wrapper).toHaveStyleRule('color', '#030517', {
      media: '(min-width: 768px)',
    });
  });
});
