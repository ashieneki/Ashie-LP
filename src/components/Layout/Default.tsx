import styled from "styled-components"
import FooterComponent from "./Footer"
import HeaderComponent from "./Header"
import HeadHelper from "../../libs/Helmet"

interface Props {
  title?: string
  children: React.ReactNode
}
const DefaultLayout: React.FC<Props> = (props) => {
  return (
    <LayoutContainer>
      <HeadHelper title={props.title} />
      <HeaderComponent />
      <MainContainer>
        {props.children}
      </MainContainer>
      <FooterComponent />
    </LayoutContainer>
  )
}

export default DefaultLayout

const LayoutContainer = styled.div`
  height: 100%;
  
  display: grid;
  grid-template-rows: auto 1fr auto;
`
const MainContainer = styled.main`
  margin: 20px 25%;
  padding: 40px;

  background-color: #ffffff;
  box-shadow: 0 2px 5px #00000020;
  border-radius: 10px;

  @media screen and (max-width: 840px) {
    margin: 0;
    padding: 20px;
    border-radius: 0;
  }
`
