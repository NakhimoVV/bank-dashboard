import './DitailsBalance.scss'
import Button from "@/components/Button";

const DitailsBalance = (props) => {
  const {} = props

  return (
    <div className="ditails-balance">
      <div className="ditails-balance__left">
        <p>Your balance:</p>
        <strong>25165</strong>
        <p>3 cards</p>
      </div>
      <div className="ditails-balance__right">
        <Button
          label = "Details"
          iconName = "arrow-right"
          iconPosition = "after"
        />
      </div>
    </div>
  )
}

export default DitailsBalance
