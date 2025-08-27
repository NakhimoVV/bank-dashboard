import './Icon.scss'
import {Icon as MinistaIcon} from 'minista'

const Icon = (props) => {
  const {
    name,
    hasFill = false,
    ariaLabel
  } = props

  return (
    <span
      className='icon'
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
