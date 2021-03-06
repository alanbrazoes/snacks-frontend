import React from 'react';

import Checkout from '@pages/checkout';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

describe('Checkout page.', () => {
  it('Should have headers.', () => {
    const { getByTestId } = render(<Checkout />);
    const addressHeading = getByTestId('address');
    const paymentMethod = getByTestId('paymentMethod');
    const checkoutDone = getByTestId('checkoutDone');

    expect(addressHeading).toBeInTheDocument();
    expect(paymentMethod).toBeInTheDocument();
    expect(checkoutDone).toBeInTheDocument();
  });

  it('Address forms.', () => {
    const { getByLabelText } = render(<Checkout />);

    const road = getByLabelText('Rua:');
    const number = getByLabelText('Número:');
    const district = getByLabelText('Bairro:');
    const complement = getByLabelText('Complemento: (opcional)');
    const city = getByLabelText('Cidade:');

    expect(road).toBeInTheDocument();
    expect(number).toBeInTheDocument();
    expect(district).toBeInTheDocument();
    expect(complement).toBeInTheDocument();
    expect(city).toBeInTheDocument();
  });

  it('Payment methods', () => {
    const { getByLabelText } = render(<Checkout />);

    const card = getByLabelText('Cartão');
    const cash = getByLabelText('Dinheiro');

    expect(card).toBeInTheDocument();
    expect(cash).toBeInTheDocument();
  });

  it('Total', () => {
    const { getByTestId } = render(<Checkout />);

    const total = getByTestId('total');

    expect(total).toBeInTheDocument();
  });
});
