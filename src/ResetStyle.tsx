import { createGlobalStyle } from 'styled-components'
const ResetStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

html, body,
h1, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-weight: normal;
}

`

export default ResetStyle
