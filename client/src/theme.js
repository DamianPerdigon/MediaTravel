export const colorTokens = {

  paradise: {
    lightGreen: {
      50: "#001C0B", 
      100: "#00330E", 
      200: "#00591A",  
      300: "#007E26", 
      400: "#00A935", 
      500: "#00D28F",  
      700: "#0A0F0B", 
      900: "#E3AD5D",    
    },
    sunsetOrange: {
      50: "#FFF3E0",   
      100: "#FFE0B2",  
      200: "#FFCC80",  
      300: "#FFB74D",  
      400: "#FFA726",  
      500: "#FF9800",  
      900: "#E3AD5D",  
    },
  },
};


// MUI theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      text: {
        primary: "#ffffff", // Texto principal en blanco
        // Puedes añadir otras variantes de texto aquí si lo necesitas
      },
      ...(mode === "dark"
        ? {
            // Paleta para el modo oscuro
            primary: {
              main: colorTokens.paradise.sunsetOrange[100],
              light: colorTokens.paradise.sunsetOrange[200],
              dark: colorTokens.paradise.sunsetOrange[200],
            },
            secondary: {
              main: colorTokens.paradise.lightGreen[400],
              light: colorTokens.paradise.lightGreen[200],
              dark: colorTokens.paradise.lightGreen[500],
            },
            background: {
              default: colorTokens.paradise.lightGreen[700],
              paper: colorTokens.paradise.sunsetOrange[900],
            },
          }
        : {
            // Paleta para el modo claro
            primary: {
              main: colorTokens.paradise.sunsetOrange[200],
              light: colorTokens.paradise.sunsetOrange[100],
              dark: colorTokens.paradise.sunsetOrange[400],
            },
            secondary: {
              main: colorTokens.paradise.lightGreen[300],
              light: colorTokens.paradise.lightGreen[100],
              dark: colorTokens.paradise.lightGreen[400],
            },
            background: {
              default: colorTokens.paradise.lightGreen[200],
              paper: colorTokens.paradise.sunsetOrange[900],
            },
          }),
    },
    typography: {
      fontFamily: ["Rubik", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
