import './DefinitionItem.scss'
import Icon from '@/components/Icon'
import clsx from "clsx";

const DefinitionItem = (props) => {
  const {
    className,
    label,
    value,
    styleColor,
    styleIcon
  } = props

  return (
    <div className={clsx(className, "definition-item")}>
      {styleIcon && (
        <div className={clsx("definition-item__icon", {
          [`definition-item__icon--${styleColor}`]: styleColor,
        })}>
          <Icon
            name = {styleIcon}
            hasFill
          />
        </div>
      )}
      <div className="definition-item__content">
        <dt className='definition-item__term'>{label}</dt>
        <dd className="definition-item__details">{value}</dd>
      </div>
    </div>
  )
}

export default DefinitionItem
