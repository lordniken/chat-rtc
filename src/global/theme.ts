const light = {
  borderRadius: '6px',

  gradients: {
    purple: 'linear-gradient(225deg, #BD7AE3 0%, #8461C9 100%)',
    header: 'linear-gradient(#efefef, #fff);',
    footer: 'linear-gradient(#fff, #efefef);'
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
    background: '#e5e5e5',

    inputBorderHover: '#efefef',

    status: {
      online: '#009800',
      busy: 'red',
      away: 'orange',
    }
  }
};

const dark = {
  borderRadius: '6px',

  gradients: {
    purple: 'linear-gradient(225deg, #BD7AE3 0%, #8461C9 100%)',
    header: 'linear-gradient(#efefef, #fff);',
    footer: 'linear-gradient(#fff, #efefef);'
  },

  colors: {
    accentBlue: '#BE52F2',
    accentBlue90: '#8794f8',
    accentBlue50: '#bfc6f7',
    accentPurple: '#BE52F2',
    accentBlueText: '#ffffff',
    menu: '#3F3356',
    splitter: '#4e5b61',
    // background: '#253035',

    background: '#455055',

    input: {
      background: '#6d7477',
      border: '#3f4a4e',
      borderHover: 'transparent',
      color: '#a4c2d0',
    },

    button: {
      background: '#618390',
      hover: '#829aa5',
      disabled: '#4e5f67',
      color: '#cbdfe8'
    },

    headerColor: '#cbdfe8',
    textColor: '#ccc',

    status: {
      online: '#009800',
      busy: 'red',
      away: 'orange',
    }
  }
};

export type AppThemeType = typeof light;

export const themes = {
  light,
  dark
};