export default {
  borderRadius: '6px',

  gradients: {
    logo: 'linear-gradient(180deg, #6d94a2 0%, #92cce6 100%);',
    header: 'linear-gradient(#6d7477, #455055);',
    footer: 'linear-gradient(#455055, #4e5b61);'
  },

  colors: {
    accent: '#618390',
    accent90: '#829aa5',
  
    background: '#455055',
    headerColor: '#cbdfe8',
    textColor: '#ddd',
    splitter: '#4e5b61',

    input: {
      background: '#6d7477',
      border: '#3f4a4e',
      borderHover: 'transparent',
      color: '#a5bfcc',
    },
    button: {
      background: '#618390',
      hover: '#829aa5',
      disabled: '#4e5f67',
      color: '#cbdfe8'
    },
    alert: {
      success: {
        background: '#306530',
        border: '#528852'
      },
      error: {
        background: 'red',
        border: '#ef9595',
      }
    },    
    status: {
      online: '#009800',
      busy: 'red',
      away: 'orange',
    }
  }
};
