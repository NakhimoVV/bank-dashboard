import './Section.scss'
import getIdFromTitle from "@/utils/getIdFromTitle.js";
import clsx from "clsx";

const Section = (props) => {
  const {
    className,
    title,
    children
  } = props

  const titleId = getIdFromTitle(title)

  return (
    <section
      className={clsx(className, 'section')}
      aria-labelledby={titleId}
    >
      <header className="section__header">
          <h3 className="section__title" id={titleId}>{title}</h3>
      </header>
      <div className="section__body">
        {children}
      </div>
    </section>
  )
}

export default Section
