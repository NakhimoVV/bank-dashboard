import './DefinitionList.scss'

const DefinitionList = (props) => {
  const {
    children,
  } = props

  return (
    <dl className="definition-list">{children}</dl>
  )
}

export default DefinitionList
