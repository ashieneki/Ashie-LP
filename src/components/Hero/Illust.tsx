
import styled from 'styled-components'

import IllustData from '../../assets/ashie.png'

import HeroAnimation from './HeroAnimation'

const IllustComponent: React.FC = () => {
  return (
    <Illust>
      <IllustImage src={IllustData} alt="葦江音綺 立ち絵" />
    </Illust>
  )
}

export default IllustComponent

const Illust = styled.div`
  height: 100%;
`
const IllustImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;

  width: 100%;
  max-width: 612px;
  max-height: 1000%;

  ${HeroAnimation.Common}
  animation: ${HeroAnimation.ScrollToUp} 2s ease-out forwards;
  animation-delay: 1s;
`
