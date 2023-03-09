import { css, keyframes } from 'styled-components'

const Common = css`
  opacity: 0;
`

const ScrollToUp = keyframes`
  from {
    opacity: 0;
    transform: translate(0, 50px);
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
`

export default {
  Common,
  ScrollToUp
}
