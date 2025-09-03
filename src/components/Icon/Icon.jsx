import "./Icon.scss"
import { Icon as MinistaIcon } from "minista"
import clsx from "clsx"

const Icon = (props) => {
  const { className, name, hasFill = false, ariaLabel } = props

  return (
    <span className={clsx(className, "icon")}>
      <MinistaIcon
        iconId={name}
        fill={hasFill ? "currentColor" : "none"}
        stroke={hasFill ? "none" : "currentColor"}
        aria-label={ariaLabel}
      />
    </span>
  )
}

export default Icon
