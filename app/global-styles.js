import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-family: Shabnam
    height: 100%;
    width: 100%;
    background: rgb(67,67,67);
    background: linear-gradient(90deg, rgba(67,67,67,1) 0%, rgba(0,0,0,1) 100%);
  }

  body {
    font-family:Shabnam, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family:Shabnam, 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background: rgb(67,67,67);
    background: linear-gradient(90deg, rgba(67,67,67,1) 0%, rgba(0,0,0,1) 100%);
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Shabnam, Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
