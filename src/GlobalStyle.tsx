import { createGlobalStyle } from 'styled-components'

import backgroundImage from '../src/assets/bg.png';

const GlobalStyle = createGlobalStyle`
html, body, #root {
  height: 100%;
}

body {
  background-image: url(${backgroundImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

h1, h2, h3, h4, h5, h6,
p,
ul {
  margin: 0;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}

h1, h2, h3, h4, h5, h6 {
  font-weight: bold;
}

h1 {
  font-size: 2em;
  font-family: 'Kaisei Opti';
}
h2 {
  padding-bottom: 4px;
  font-size: 1.5em;
  color: #cc6688;
  border-bottom: 4px solid #cc6688;
  position: relative;
  display: inline;
  z-index: 1;

  &::after {
    display: block;
    content: '';
    height: 6px;
    border-bottom: 2px solid #e0e0e0;
    position: inherit;
    z-index: -1;
    margin-bottom: 20px;
  }
}
h3 {
  font-size: 1em;
  color: #cc6688;
}
h4 { font-size: 0.9em; }
h5 { font-size: 0.8em; }
h6 { font-size: 0.7em; }
`

export default GlobalStyle
