import { AppThemeType } from 'global/themes';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle<{ theme: AppThemeType }>`
  body {
    margin: 0;
    font-family: SFProText, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.colors.background};
  }

  * {
    box-sizing: border-box;
  }

  @font-face {
    font-family: SFProText;
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    @content;
    src: url('../fonts/SFProText-400-normal.eot');
    src: url('../fonts/SFProText-400-normal.eot?#iefix') format('embedded-opentype'),
        url('../fonts/SFProText-400-normal.woff2') format('woff2'),
        url('../fonts/SFProText-400-normal.woff') format('woff'),
        url('../fonts/SFProText-400-normal.ttf') format('truetype');
  }

  .popup-arrow {
    color: ${({ theme }) => theme.colors.input.background};
  }
`;

export default GlobalStyles;