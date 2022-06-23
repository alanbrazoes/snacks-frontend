import React from 'react';

import Home from '@pages/index';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
import { ALL_SNACKS } from '../mocks';

describe('Header page.', () => {
  it('Should have button redirect to cart.', () => {
    const { getByTestId } = render(<Home {...ALL_SNACKS} />);
    const linkBtn = getByTestId('cartLink');
    expect(linkBtn).toBeInTheDocument();
  });
});
