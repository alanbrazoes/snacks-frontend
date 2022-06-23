import Header from '@components/Header';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

it('Should have header.', () => {
  const { getByRole } = render(<Header />);

  const heading = getByRole('heading', {
    name: /cb | lanches/i,
  });

  expect(heading).toBeInTheDocument();
});
