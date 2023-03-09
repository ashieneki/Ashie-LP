import styled from 'styled-components'
import HeroAnimation from './HeroAnimation'

const CatchCopyComponent: React.FC = () => {
  return (
    <CatchCopy className="kaiseiOpti">
      路地裏でみつけたネコちゃんと<br />
      暮らしているらしい。
    </CatchCopy>
  )
}

export default CatchCopyComponent

const CatchCopy = styled.div`
  padding: 20px;
  background-color: #00000080;

  font-size: 1.5em;
  font-weight: 700;
  color: #ffffff;

  ${HeroAnimation.Common}
  animation: ${HeroAnimation.ScrollToUp} 2s ease-out forwards;
`
