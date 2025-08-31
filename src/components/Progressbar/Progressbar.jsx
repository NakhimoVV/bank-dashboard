import './Progressbar.scss'

const Progressbar = (props) => {
  const {
    limit,
    current
  } = props

  return (
    <div className="progressbar">
      <label
        className="progressbar__title h4"
        htmlFor="progress"
      >
        Daily Transaction Limit
      </label>
      <progress
        className="progressbar__line"
        max={limit}
        value={current}
        id="progress"
        role="progressbar"
        aria-valuenow={current}
        aria-valuetext={`${current} dollars spent of ${limit}`}
      >
        ${current} spent of ${limit}
      </progress>
      <p className="progressbar__subtext" aria-hidden="true">${current} spent of ${limit}</p>
    </div>
  )
}

export default Progressbar
