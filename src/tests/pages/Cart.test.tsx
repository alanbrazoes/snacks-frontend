import React from 'react';

import { CartContext } from '@context/cart';
import Cart from '@pages/cart';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
import { CART_MOCK } from '../mocks';

describe('Cart page.', () => {
  beforeAll(() => {
    JSON.parse = jest.fn(() => CART_MOCK);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('', () => {
    const { getByText, getByTestId } = render(
      <CartContext>
        <Cart />
      </CartContext>
    );

    const homeBtn = getByText(/home/i);
    const products = getByTestId(/products/i);
    const checkout = getByTestId('finish');

    expect(homeBtn).toBeInTheDocument();
    expect(products).toBeInTheDocument();
    expect(checkout).toBeInTheDocument();
  });
});
