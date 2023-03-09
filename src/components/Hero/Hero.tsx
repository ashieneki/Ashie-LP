import styled from 'styled-components'

import BackgroundImage from '../../assets/hero-bg.jpg'

import NavComponent from './Nav'
import IllustComponent from './Illust'
import CatchCopyComponent from './CatchCopy'
import HeroAnimation from './HeroAnimation'

interface Props {
  id: string
}
const HeroComponent: React.FC<Props> = (props) => {
  return (
    <HeroContainer id={props.id}>
      <ContentWrapper>
        <NavArea>
          <AnimatedCatchCopy />
          <AnimatedNav />
        </NavArea>
        <IllustArea>
          <AnimatedIllust />
        </IllustArea>
      </ContentWrapper>
    </HeroContainer>
  )
}

export default HeroComponent

const HeroContainer = styled.main`
  height: 100%;
  padding: 20px;
  background-color: #f0f0f0;
  box-shadow: 0 2px 10px #000000c0;
`
const ContentWrapper = styled.div`
  min-width: 400px;
  height: 100%;
  border-radius: 20px;
  
  display: grid;
  padding: 20px 12.5%;
  gap: 20px;

  overflow-y: hidden;

  grid-template-columns: 1fr 50%;

  background-image: url(${BackgroundImage});
  background-position: center;
  background-color: #000000;

  @media screen and (max-width: 840px) {
    padding: 10px;
    grid-template-columns: 1fr 80%;
  }
`

const NavArea = styled.nav`
  grid-row: 1;
  grid-column: 1 / 3;

  display: flex;
  gap: 10px;
  flex-flow: column;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;

  z-index: 1;

  @media screen and (max-width: 840px) {
  justify-content: flex-end;
  }
`
const IllustArea = styled.section`
  grid-row: 1;
  grid-column: 2 / 3;

  position: relative;
  z-index: 0;
`

const AnimatedCatchCopy = styled(CatchCopyComponent)`
  ${HeroAnimation.Common}
  animation: ${HeroAnimation.ScrollToUp} 2s ease-out forwards;

  animation-delay: 0.25s;
`
const AnimatedIllust = styled(IllustComponent)`
  ${HeroAnimation.Common}
  animation: ${HeroAnimation.ScrollToUp} 2s ease-out forwards;
  
`
const AnimatedNav = styled(NavComponent)`
  ${HeroAnimation.Common}
  animation: ${HeroAnimation.ScrollToUp} 2s ease-out forwards;

  animation-delay: 0.75s;
`