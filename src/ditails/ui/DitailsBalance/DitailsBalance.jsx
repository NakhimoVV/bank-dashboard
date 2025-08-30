import './DitailsBalance.scss'
import Button from "@/components/Button";
import formatNumUs from "@/utils/formatNumUs.js";

const DitailsBalance = (props) => {
  const {
    data
  } = props
  const { balance, countCard = 'empty' } = data
  const formattedBalance = balance ? formatNumUs(balance) : 'empty'

  return (
    <div className="ditails-balance">
      <div className="ditails-balance__left">
        <p>Your balance:</p>
        <strong>{formattedBalance}</strong>
        <p>{countCard} cards</p>
      </div>
      <div className="ditails-balance__right">
        <Button
          mode = "rounded"
          label = "Details"
          iconName = "arrow-right"
          iconPosition = "after"
          hasFillIcon
        />
      </div>
    </div>
  )
}

export default DitailsBalance
