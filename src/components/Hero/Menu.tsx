import { Link } from 'react-router-dom'
import styled from 'styled-components'

const MenuComponent: React.FC = () => {
  return (
    <Menu>
      <MenuItem to="">
        葦江音綺とは？
      </MenuItem>
      <MenuItem to="">
        ダウンロード
      </MenuItem>
      <MenuItem to="">
        キャラクター利用ガイドライン
      </MenuItem>
      <MenuItem to="">
        お問い合わせ
      </MenuItem>
    </Menu>
  )
}

export default MenuComponent

const Menu = styled.div`
  display: flex;
  gap: 10px;

  flex-wrap: wrap;
`
const MenuItem = styled(Link)`
  color: #ffffff;
  font-size: 1.25em;

  font-family: 'Kaisei Opti';
  font-weight: bold;

  padding: 5px;
  border-bottom: 3px solid #ffffff;

  text-decoration: none;

  transition: background-color linear 0.2s,
              color linear 0.2s;

  &:hover {
    background-color: #ffffff;
    color: #000000;
  }
`