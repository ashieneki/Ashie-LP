import styled, { css, keyframes } from 'styled-components'

import BackgroundImage from '../../assets/bg.jpg'
import LogotypeSVG from '../../assets/logotype.svg'
import AshieImage from '../../assets/ashie.png'

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <NavArea>
        <CatchCopy className="kaiseiOpti">
          路地裏でみつけたネコちゃんと<br />
          暮らしているらしい。
        </CatchCopy>
        <Nav>
          <Logotype>
            <LogotypeTitle className="kaiseiOpti">
              音声合成キャラクター "葦江音綺" 公式サイト
            </LogotypeTitle>
            <LogotypeImg src={LogotypeSVG} alt="葦江音綺ロゴタイプ" />
          </Logotype>
          <Menu>
            <MenuItem>葦江音綺とは？</MenuItem>
            <MenuItem>ダウンロード</MenuItem>
            <MenuItem>キャラクター利用ガイドライン</MenuItem>
            <MenuItem>お問い合わせ</MenuItem>
          </Menu>
        </Nav>
      </NavArea>
      <AshieArea>
        <Ashie>
          <AshieImg src={AshieImage} alt="葦江音綺 立ち絵" />
        </Ashie>
      </AshieArea>
    </HeroContainer>
  )
}

export default Hero

const ScrollToDown = keyframes`
  from {
    opacity: 0;
    transform: translate(0, -50px);
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
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

  @media screen and (max-width: 840px) {
  justify-content: flex-end;
  }
`
const AshieArea = styled.section`
  grid-row: 1;
  grid-column: 2 / 3;
`

const AnimationCommon = css`
  opacity: 0;
`

const CatchCopy = styled.div`
  padding: 20px;
  background-color: #00000080;

  font-size: 1.5em;
  font-weight: 700;
  color: #ffffff;

  ${AnimationCommon}
  animation: ${ScrollToUp} 2s ease-out forwards;
  animation-delay: 0.25s;

  z-index: 1;
`
const Nav = styled.nav`
  padding: 20px;
  background-color: #00000080;

  ${AnimationCommon}
  animation: ${ScrollToUp} 2s ease-out forwards;
  animation-delay: 0.75s;
  z-index: 1;
`
const Logotype = styled.div`
  margin-bottom: 10px;
`
const LogotypeTitle = styled.div`
  margin-bottom: 5px;

  color: #ffffff;
  font-size: 1.25em;
`
const LogotypeImg = styled.img`
  height: 72px;
`

const Menu = styled.div`
  display: flex;
  gap: 10px 15px;

  flex-wrap: wrap;
`
const MenuItem = styled.span`
  color: #ffffff;
  font-size: 1.25em;

  font-family: 'Kaisei Opti';
  font-weight: bold;

  padding-bottom: 5px;
  border-bottom: 4px solid #ffffff;
`

const Ashie = styled.div`
  height: 100%;

  ${AnimationCommon}
  animation: ${ScrollToUp} 2s ease-out forwards;
  animation-delay: 0.5s;
  z-index: -1;
`
const AshieImg = styled.img`
  position: absolute;
  top: 0;
  right: 0;

  width: 100%;
  max-width: 612px;
  max-height: 1000%;
`