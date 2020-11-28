import { DefaultTheme } from 'styled-components';

const lightTheme: DefaultTheme = {
  borderRadius: '6px',

  gradients: {
    purple: 'linear-gradient(225deg, #BD7AE3 0%, #8461C9 100%)',
  },

  colors: {
    accentBlue: '#6979F8',
    accentBlue90: '#8794f8',
    accentBlue50: '#bfc6f7',

    accentPurple: '#BE52F2',

    accentBlueText: '#ffffff',

    inputBackground: '#ffffff',
    inputBorder: '#cccccc'
  },
};

export { lightTheme };