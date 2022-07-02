import React from 'react';

import { render } from '@testing-library/react';

import { Snack } from '../../components/Snacks';
import { DISH, DRINK, SNACKS } from '../mocks';

import '@testing-library/jest-dom';

describe('Snacks component.', () => {
  it('Burguer.', () => {
    const { getByTestId, getByText } = render(<Snack {...SNACKS} />);

    const container = getByTestId('snackContainer');
    const burguer = getByText('Cabuloso');

    expect(container).toBeInTheDocument();
    expect(burguer).toBeInTheDocument();
  });

  it('Drink.', () => {
    const { getByTestId, getByText } = render(<Snack {...DRINK} />);

    const container = getByTestId('snackContainer');
    const burguer = getByText('Coca-cola');

    expect(container).toBeInTheDocument();
    expect(burguer).toBeInTheDocument();
  });

  it('Dish.', () => {
    const { getByTestId, getByText } = render(<Snack {...DISH} />);

    const container = getByTestId('snackContainer');
    const burguer = getByText('Macarronada');

    expect(container).toBeInTheDocument();
    expect(burguer).toBeInTheDocument();
  });
});
