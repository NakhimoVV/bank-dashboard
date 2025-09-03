import "./DetailsBalance.scss"
import Button from "@/components/Button"
import formatNumUs from "@/utils/formatNumUs.js"

const DetailsBalance = (props) => {
  const { data } = props
  const { balance, countCard = "empty" } = data
  const formattedBalance = balance ? formatNumUs(balance) : "empty"

  return (
    <div className="details-balance">
      <div className="details-balance__left">
        <p>Your balance:</p>
        <strong>{formattedBalance}</strong>
        <p>{countCard} cards</p>
      </div>
      <div className="details-balance__right">
        <Button
          mode="rounded"
          label="Details"
          iconName="arrow-right"
          iconPosition="after"
          hasFillIcon
        />
      </div>
    </div>
  )
}

export default DetailsBalance
