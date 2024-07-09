import { createGlobalStyle } from 'styled-components';

//fontes
import margin from './assets/fonts/margin.otf'
import openSauceRegular from './assets/fonts/OpenSauceOne-Regular.ttf'
import openSauceBold from './assets/fonts/OpenSauceOne-Bold.ttf'

export const colors = {
    green: '#C3FF93',
    yellow: '#FFDB5C',
    orange: '#FFAF61',
    pink: '#FF70AB',
    white: '#FFFCF5'
};

const GlobalStyle = createGlobalStyle`
  
  @font-face {
    font-family: 'Margin';
    src: url(${margin}) format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Open Sauce Regular';
    src: url(${openSauceRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Open Sauce Bold';
    src: url(${openSauceBold}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Open Sauce Regular', sans-serif;
    list-style: none;
  }

  body {
    background-color: ${colors.white};
  }

`;

export default GlobalStyle;
