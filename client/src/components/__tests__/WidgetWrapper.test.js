import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import WidgetWrapper from '../WidgetWrapper';
import { createTheme } from '@mui/material/styles';

const theme = createTheme(); // Crear un tema de MUI para el contexto del componente

describe('WidgetWrapper', () => {
  it('debe coincidir con el snapshot', () => {
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <WidgetWrapper>
          {/* Contenido del WidgetWrapper si es necesario */}
        </WidgetWrapper>
      </ThemeProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
