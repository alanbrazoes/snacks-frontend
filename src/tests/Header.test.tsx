import React from 'react';

import { render, screen } from '@testing-library/react';

import Home from '../components/Header';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /cb | lanches/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
