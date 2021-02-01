import React from 'react';
import { AppThemeType } from 'global/themes';
import { createGlobalStyle, useTheme } from 'styled-components';
import { Helmet } from 'react-helmet';

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

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.accent};
    border: 1px solid ${({ theme }) => theme.colors.button.hover};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.accent90};
  }
  ::-webkit-scrollbar-track {
    background: transparent;
    border: none;
    border-radius: 30px;
  }
  ::-webkit-scrollbar-track:hover {
    background: transparent;
  }
  ::-webkit-scrollbar-track:active {
    background: transparent;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
`;

const Styles: React.FC = () => {
  const theme = useTheme() as AppThemeType;

  return (
    <>
      <GlobalStyles />
      <Helmet>
        <meta name="theme-color" content={theme.colors.input.background} /> 
      </Helmet>
    </>
  );
};

export default Styles;