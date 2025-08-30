import './DefinitionItem.scss'
import Icon from '@/components/Icon'
import formatNumUs from "@/utils/formatNumUs.js";
import clsx from "clsx";

const DefinitionItem = (props) => {
  const {
    label,
    dollars,
    styleColor,
    styleIcon
  } = props

  return (
    <div className="definition-item">
      <div className={clsx("definition-item__icon", {
        [`definition-item__icon--${styleColor}`]: styleColor,
      })}>
        <Icon
          name = {styleIcon}
          hasFill
        />
      </div>
      <div className="definition-item__content">
        <dt className='definition-item__term'>{label}</dt>
        <dd className="definition-item__details">{formatNumUs(dollars)}</dd>
      </div>
    </div>
  )
}

export default DefinitionItem
