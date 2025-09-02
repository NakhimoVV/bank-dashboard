import './Badge.scss'
import clsx from "clsx";

const Badge = (props) => {
  const {
    mode = '', // ''(default) | 'bright'
    children
  } = props

  return (
    <div className={clsx("badge", {
      [`badge--${mode}`]: mode,
    })}>
      <span>{children}</span>
    </div>
  )
}

export default Badge
