import './DefinitionList.scss'
import clsx from "clsx";

const DefinitionList = (props) => {
  const {
    className,
    children,
  } = props

  return (
    <dl className={clsx(className, "definition-list")}>{children}</dl>
  )
}

export default DefinitionList
