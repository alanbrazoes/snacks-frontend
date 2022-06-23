import React from 'react';

import { render, screen } from '@testing-library/react';

import Snacks from '../../components/Snacks';
import { SNACKS } from '../mocks';

import '@testing-library/jest-dom';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Snacks {...SNACKS} />);

    const container = screen.getByTestId('snackContainer');

    expect(container).toBeTruthy();
  });
});
