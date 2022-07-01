import React from 'react';

import { Checkout } from '@pages/checkout';
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
    const { getByTestId } = render(<Checkout />);

    const getByLocation = getByTestId('getByLocation');

    const road = getByTestId('road');
    const number = getByTestId('number');
    const district = getByTestId('district');
    const complement = getByTestId('complement');
    const city = getByTestId('city');
    const state = getByTestId('state');
    const confirmAddress = getByTestId('confirmAddress');

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
    const { getByTestId } = render(<Checkout />);

    const debitCard = getByTestId('debitCard');
    const creditCard = getByTestId('creditCard');
    const cash = getByTestId('cash');

    expect(debitCard).toBeInTheDocument();
    expect(creditCard).toBeInTheDocument();
    expect(cash).toBeInTheDocument();
  });

  it('Total', () => {
    const { getByTestId } = render(<Checkout />);

    const total = getByTestId('total');

    expect(total).toBeInTheDocument();
  });
});
