import { ProductCart } from '@components/ProductCart';
import { CartContext } from '@context/cart';
import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';

import { CART_MOCK } from '../mocks';

describe('Product cart.', () => {
  beforeEach(() => {
    JSON.parse = jest.fn(() => CART_MOCK);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Static test.', () => {
    const { getByTestId, getAllByTestId, queryAllByTestId } = render(
      <CartContext>
        <ProductCart />
      </CartContext>
    );

    const name = getAllByTestId(/name/i);
    expect(name).toBeTruthy();
    expect(name[0].textContent).toBe('Cabuloso');

    const quantity = queryAllByTestId('quantity');
    expect(quantity).toBeTruthy();
    expect(quantity[0].textContent).toBe('Quantidade: 1');

    const total = getByTestId(/total/i);
    expect(total).toBeInTheDocument();
    expect(total.textContent).toBe('Total: R$ 35');

    const removeBtn = getAllByTestId(/removeBtn/i);
    expect(removeBtn).toBeTruthy();
  });

  it('Button add.', () => {
    const { getAllByTestId } = render(
      <CartContext>
        <ProductCart />
      </CartContext>
    );

    const quantity = getAllByTestId('quantity');
    expect(quantity.length).toBe(2);
    expect(quantity[0].textContent).toBe('Quantidade: 1');

    const addQuantity = getAllByTestId('addQuantity');
    fireEvent.click(addQuantity[0]);

    const newQuantity = getAllByTestId('quantity');
    expect(newQuantity[0].innerHTML).toBe('Quantidade: 2');
  });

  it('Button sub.', () => {
    const { getAllByTestId } = render(
      <CartContext>
        <ProductCart />
      </CartContext>
    );

    const quantity = getAllByTestId('quantity');
    expect(quantity[0].textContent).toBe('Quantidade: 1');

    const addQuantity = getAllByTestId('addQuantity');
    const subQuantity = getAllByTestId('subQuantity');
    fireEvent.click(addQuantity[0]);
    const newQuantity = getAllByTestId('quantity');
    expect(newQuantity[0].innerHTML).toBe('Quantidade: 2');

    fireEvent.click(subQuantity[0]);

    expect(newQuantity[0].innerHTML).toBe('Quantidade: 1');
  });
});
