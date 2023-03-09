import styled from 'styled-components'

const FooterComponent: React.FC = () => {
  return (
    <FooterContainer>
      <Copyright>
        &copy; 2022 葦江音綺Project
      </Copyright>
    </FooterContainer>
  )
}

export default FooterComponent

const FooterContainer = styled.footer`
  padding: 20px;
  text-align: center;
  background-color: #404040;
  border-top: solid 4px #408080;
  color: #ffffff;
`
const Copyright = styled.div`

`