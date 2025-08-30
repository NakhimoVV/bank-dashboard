import './DitailsCard.scss'
import Icon from "@/components/Icon";
import clsx from "clsx";
import maskForCardNumber from "@/utils/maskForCardNumber.js";
import formatCardDate from "@/utils/formatCardDate.js";

const DitailsCard = (props) => {
  const {
    color, // ''(default) | 'violet'/ 'orange' / 'green'
    data,
    isCurrent = false,
  } = props
  const { type, name, exp, number } = data

  return (
    <article className={clsx("ditails-card", {
      [`ditails-card--${color}`]: color,
      'ditails-card--current': isCurrent,
    })}>
      <header className="ditails-card__header">
        <span>{type}</span>
        <Icon
          className="ditails-card__header-icon"
          name="card"
          ariaLabel='Card Logo'
        />
        <span>{name}</span>
        <span>{`Exp ${formatCardDate(exp)}`}</span>
      </header>
      <footer className="ditails-card__footer">
        <strong className='ditails-card__number'>{maskForCardNumber(number)}</strong>
        <Icon
          className="ditails-card__footer-icon"
          name="visa-logo"
          ariaLabel='Visa Logo'
          hasFill
        />
      </footer>
    </article>
  )
}

export default DitailsCard
