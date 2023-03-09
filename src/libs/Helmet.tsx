import { Helmet } from 'react-helmet-async'

interface Props {
  title?: string
}

const HeadHelper: React.FC<Props> = (props) => {
  const title = props.title ? `${props.title} - 葦江音綺Project` : '葦江音綺Project'
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  )
}

export default HeadHelper
