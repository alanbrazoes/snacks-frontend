import React from 'react';

import { CartContext } from '@context/cart';
import Home from '@pages/index';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
import { ALL_SNACKS } from '../mocks';

describe('Home page.', () => {
  it('Should have button redirect to cart.', () => {
    const { getByTestId } = render(
      <CartContext>
        <Home {...ALL_SNACKS} />
      </CartContext>
    );
    const linkBtn = getByTestId('cartLink');
    expect(linkBtn).toBeInTheDocument();
  });
});
