import "./Progressbar.scss"

const Progressbar = (props) => {
  const { limit, current } = props

  return (
    <div className="progressbar">
      <label className="progressbar__title h4" id="progress-label">
        Daily Transaction Limit
      </label>
      <progress
        className="progressbar__line"
        max={limit}
        value={current}
        id="progress"
        aria-labelledby="progress-label"
      >
        ${current} spent of ${limit}
      </progress>
      <p className="progressbar__subtext" aria-hidden="true">
        ${current} spent of ${limit}
      </p>
    </div>
  )
}

export default Progressbar
