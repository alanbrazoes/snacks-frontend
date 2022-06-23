import ProductCart from '@components/ProductCart';
import CartContext from '@context/cart';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { CART_MOCK } from '../mocks';

describe('', () => {
  beforeEach(() => {
    JSON.parse = jest.fn(() => CART_MOCK);
  });

  it('', () => {
    const { getByTestId } = render(
      <CartContext>
        <ProductCart />
      </CartContext>
    );

    expect(getByTestId(/name/i)).toBeInTheDocument();
  });
});
