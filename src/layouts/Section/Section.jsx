import "./Section.scss"
import getIdFromTitle from "@/utils/getIdFromTitle.js"
import clsx from "clsx"
import Badge from "@/components/Badge"

const Section = (props) => {
  const { className, title, isHiddenTitle = false, badge, children } = props

  const titleId = getIdFromTitle(title)

  return (
    <section className={clsx(className, "section")} aria-labelledby={titleId}>
      <header
        className={clsx("section__header", {
          "visually-hidden": isHiddenTitle,
        })}
      >
        <h3 className="section__title" id={titleId}>
          {title}
        </h3>
        {badge && <Badge>{badge}</Badge>}
      </header>
      <div className="section__body">{children}</div>
    </section>
  )
}

export default Section
