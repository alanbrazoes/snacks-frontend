import React from 'react';

import Checkout from '@pages/checkout';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

describe('Checkout page.', () => {
  it('Should have headers.', () => {
    const { getByTestId, getByRole } = render(<Checkout />);
    const addressHeading = getByRole('heading', { level: 1, name: 'Endereço' });
    const paymentMethod = getByRole('heading', { level: 1, name: 'Método de pagamento' });
    const checkoutDone = getByTestId('checkoutDone');

    expect(addressHeading).toBeInTheDocument();
    expect(paymentMethod).toBeInTheDocument();
    expect(checkoutDone).toBeInTheDocument();
  });

  it('Address forms.', () => {
    const { getByLabelText, getByRole } = render(<Checkout />);

    const getByLocation = getByRole('button', { name: 'Obter localização atual' });

    const road = getByLabelText('Rua');
    const number = getByLabelText('Número');
    const district = getByLabelText('Bairro');
    const complement = getByLabelText('Complemento');
    const city = getByLabelText('Cidade');
    const state = getByLabelText('Estado');
    const confirmAddress = getByRole('button', { name: 'Confirmar endereço' });

    expect(getByLocation).toBeInTheDocument();
    expect(road).toBeInTheDocument();
    expect(number).toBeInTheDocument();
    expect(district).toBeInTheDocument();
    expect(complement).toBeInTheDocument();
    expect(city).toBeInTheDocument();
    expect(state).toBeInTheDocument();
    expect(confirmAddress).toBeInTheDocument();
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
