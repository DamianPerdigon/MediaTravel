import React from 'react';
import { render } from '@testing-library/react';
import FlexBetween from '../FlexBetween'; // Asegúrate de que la ruta de importación sea correcta

describe('FlexBetween', () => {
  it('debe coincidir con el snapshot', () => {
    const { asFragment } = render(<FlexBetween />);

    expect(asFragment()).toMatchSnapshot();
  });
});
