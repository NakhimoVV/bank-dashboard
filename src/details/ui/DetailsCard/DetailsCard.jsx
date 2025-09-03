import "./DetailsCard.scss"
import Icon from "@/components/Icon"
import clsx from "clsx"
import maskForCardNumber from "@/utils/maskForCardNumber.js"
import formatCardDate from "@/utils/formatCardDate.js"

const DetailsCard = (props) => {
  const {
    color, // ''(default) | 'violet' | 'orange' | 'green'
    data,
    isCurrent = false,
  } = props
  const { type, name, exp, number } = data

  return (
    <article
      className={clsx("details-card", {
        [`details-card--${color}`]: color,
        "is-current": isCurrent,
      })}
      data-js-details-card=""
    >
      <header className="details-card__header">
        <span>{type}</span>
        <Icon
          className="details-card__header-icon"
          name="card"
          ariaLabel="Card Logo"
        />
        <span>{name}</span>
        <span>{`Exp ${formatCardDate(exp)}`}</span>
      </header>
      <footer className="details-card__footer">
        <strong className="details-card__number">
          {maskForCardNumber(number)}
        </strong>
        <Icon
          className="details-card__footer-icon"
          name="visa-logo"
          ariaLabel="Visa Logo"
          hasFill
        />
      </footer>
    </article>
  )
}

export default DetailsCard
