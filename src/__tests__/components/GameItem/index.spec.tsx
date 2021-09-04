import { screen } from '@testing-library/react';
import { render } from '../../../utils/test-utils';

import GameItem from '../../../components/GameItem';

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/151x70',
  title: 'Red Dead Redemption 2',
  price: 'R$ 215,00',
};

describe('<GameItem/>', () => {
  it('should be able to render the idem', () => {
    render(<GameItem {...props} />);

    expect(
      screen.getByRole('heading', { name: props.title }),
    ).toBeInTheDocument();

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img,
    );

    expect(screen.getByText('R$ 215,00')).toBeInTheDocument();
  });

  it('should be able to render with download link', () => {
    const downloadLink = 'https://link';

    render(<GameItem {...props} downloadLink={downloadLink} />);

    expect(
      screen.getByRole('link', { name: `Get ${props.title} here` }),
    ).toHaveAttribute('href', downloadLink);
  });

  it('should be able to render the payment info', () => {
    const paymentInfo = {
      flag: 'mastercard',
      img: '/img/master-card.png',
      number: '**** **** **** 4326',
      purchaseDate: 'Purchase made on 07/20/2020 at 20:32',
    };

    render(<GameItem {...props} paymentInfo={paymentInfo} />);

    expect(screen.getByRole('img', { name: paymentInfo.flag })).toHaveAttribute(
      'src',
      paymentInfo.img,
    );

    expect(screen.getByText(paymentInfo.number)).toBeInTheDocument();
    expect(screen.getByText(paymentInfo.purchaseDate)).toBeInTheDocument();
  });
});
