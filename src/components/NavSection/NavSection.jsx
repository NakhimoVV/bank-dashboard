import "./NavSection.scss"
import Button from "@/components/Button"
import getIdFromTitle from "@/utils/getIdFromTitle.js"
import generateId from "@/utils/generateId.js"
import Badge from "@/components/Badge"

const NavSection = (props) => {
  const { title = "not specified", list = [] } = props

  const titleId = `${getIdFromTitle(title)}-title`

  return (
    <nav className="nav-section" aria-labelledby={titleId}>
      <h2 className="nav-section__title" id={titleId}>
        {title}
      </h2>
      <ul className="nav-section__list">
        {list.map((item) => {
          const isString = typeof item.badge === "string"

          return (
            <li className="nav-section__list-item" key={generateId()}>
              <Button
                className="sidebar__button"
                label={item.label}
                href={item.href}
                iconName={item.iconName}
                hasFillIcon
              />
              {item.badge && (
                <Badge mode={isString && "bright"}>{item.badge}</Badge>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default NavSection
