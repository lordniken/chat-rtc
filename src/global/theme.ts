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
    menu: '#3F3356',

    inputBackground: '#ffffff',
    inputBorder: '#cccccc',
    splitter: '#efefef',

    status: {
      online: '#009800',
      busy: 'red',
      away: 'orange',
    }
  },
};

export { lightTheme };