import styled from 'styled-components'

import HeroAnimation from './HeroAnimation'
import MenuComponent from './Menu'

import LogotypeData from '../../assets/logotype.svg'

const NavComponent: React.FC = () => {
  return (
    <Nav>
      <Logotype>
        <LogotypeTitle className="kaiseiOpti">
          音声合成キャラクター "葦江音綺" 公式サイト
        </LogotypeTitle>
        <LogotypeImage src={LogotypeData} alt="葦江音綺ロゴタイプ" />
      </Logotype>
      <MenuComponent />
    </Nav>
  )
}

export default NavComponent

const Nav = styled.nav`
  padding: 20px;
  background-color: #00000080;
  
  border-radius: 10px;
`

const Logotype = styled.div`
  margin-bottom: 10px;
`
const LogotypeTitle = styled.div`
  margin-bottom: 5px;

  color: #ffffff;
  font-size: 1.25em;
`
const LogotypeImage = styled.img`
  height: 72px;
`