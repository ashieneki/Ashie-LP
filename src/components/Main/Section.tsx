import styled from 'styled-components'

interface Props {
  id: string
  title: string
  children: React.ReactNode
  alternateTitle?: boolean
}
const SectionComponent: React.FC<Props> = (props) => {
  return (
    <SectionContainer id={props.id}>
      <SectionWrapper>
        <SectionHeaderArea>
          <SectionHeader alternate={props.alternateTitle}>
            {props.title}
          </SectionHeader>
        </SectionHeaderArea>
        <SectionContent>
          {props.children}
        </SectionContent>
      </SectionWrapper>
    </SectionContainer>
  )
}

export default SectionComponent

const SectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 40px;
  min-height: 50vh;

  background-color: #cc668810;
  &:nth-child(2n + 1) {
    background-color: #40808010;
  }
`
const SectionWrapper = styled.div`
  display: flex;
  flex-flow: column;
  gap: 20px;
`

const SectionHeaderArea = styled.div`
  text-align: center;
`

const SectionHeader = styled.span<{ alternate?: boolean }>`
  display: inline-block;
  padding: 10px;
  font-family: 'Kaisei Opti';
  font-size: 2em;
  font-weight: bold;

  color: #cc6688;
  border-bottom: 4px solid #cc6688;

  ${props => props.alternate && `
    color: #408080;
    border-bottom: 4px solid #408080;
  `}
`

const SectionContent = styled.div`
`
