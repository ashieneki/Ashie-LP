import styled from 'styled-components'

import BackgroundImage from '../../assets/bg.jpg'

import NavComponent from './Nav'
import IllustComponent from './Illust'
import CatchCopyComponent from './CatchCopy'

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <NavArea>
        <AnimatedCatchCopy />
        <AnimatedNav />
      </NavArea>
      <IllustArea>
        <AnimatedIllust />
      </IllustArea>
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.main`
  display: grid;
  padding: 20px 12.5%;
  gap: 20px;

  overflow-y: hidden;

  height: 100vh;
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

  z-index: 0;
`

const AnimatedCatchCopy = styled(CatchCopyComponent)`
  animation-delay: 0.25s;
`
const AnimatedIllust = styled(IllustComponent)`
  animation-delay: 0.5s;
`
const AnimatedNav = styled(NavComponent)`
  animation-delay: 0.75s;
`