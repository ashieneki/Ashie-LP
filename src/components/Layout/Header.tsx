import styled from 'styled-components'
import { HashLink } from 'react-router-hash-link'

import LogotypeData from '../../assets/logotype.svg'

const HeaderComponent: React.FC = () => {
  return (
    <HeaderContainer>
      <LogotypeArea>
        <HashLink to="/">
          <LogotypeImage src={LogotypeData} alt="葦江音綺 ロゴタイプ" />
        </HashLink>
      </LogotypeArea>
      <Menu>
        <MenuItem smooth to="/#about">
          葦江音綺とは？
        </MenuItem>
        <MenuItem smooth to="/#download">
          ダウンロード
        </MenuItem>
        <MenuItem smooth to="/guideline">
          ガイドライン
        </MenuItem>
        <MenuItem smooth to="/contact">
          お問い合わせ
        </MenuItem>
      </Menu>
    </HeaderContainer>
  )
}

export default HeaderComponent

const HeaderContainer = styled.footer`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 20px;
  padding: 20px 25%;
  background-color: #404040;
  color: #ffffff;
  border-bottom: 4px solid #cc6688;

  @media screen and (max-width: 1280px) {
    padding: 20px;
    grid-template-columns: auto;
    grid-template-rows: auto auto;
  }
`
const LogotypeArea = styled.div`
  /* margin-top: -5px; */
  font-size: 0;

  @media screen and (max-width: 1280px) {
    text-align: center;
  }
`
const LogotypeImage = styled.img`
  height: 32px;
`

const Menu = styled.nav`
  display: flex;
  margin-bottom: -10px;

  gap: 5px 15px;
  align-items: center;
  justify-content: flex-end;

  font-family: 'Kaisei Opti';
  font-weight: bold;

  @media screen and (max-width: 1280px) {
    margin-left: -5px;

    flex-wrap: wrap;
    justify-content: center;
  }
`
const MenuItem = styled(HashLink)`
  display: inline-block;
  padding: 0 5px;
  padding-bottom: 10px;
  color: #ffffff;

  text-decoration: none;
  position: relative;

  &:before {
    width: 0;
    position: absolute;
    left: 0;
    bottom: 0;
    content: '';

    border-bottom: 2px solid #ffffff;
    transition: width ease 0.2s;
  }

  &:hover {
    &:before {
      width: 100%;
    }
  }
`
