import './Icon.scss'
import {Icon as MinistaIcon} from 'minista'
import clsx from "clsx";

const Icon = (props) => {
  const {
    className,
    name,
    hasFill = false,
    ariaLabel
  } = props

  return (
    <span
      className={clsx(className, 'icon')}
      aria-label={ariaLabel}>
        <MinistaIcon
          iconId={name}
          fill={hasFill ? 'currentColor' : 'none'}
          stroke={hasFill ? 'none' : 'currentColor'}
        />
    </span>
  )
}

export default Icon
