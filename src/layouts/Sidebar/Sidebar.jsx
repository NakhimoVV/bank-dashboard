import './Sidebar.scss'
import Button from "@/components/Button";

const Sidebar = (props) => {
  const {} = props

  return (
    <aside className="sidebar container">
      <header>
        <Button
          label='Dashboard'
        />
        <nav className="nav-section">
          <h2 className="nav-section__title">Analytics</h2>
          <ul className="nav-section__list">
            <li className="nav-section__list-item">
              <Button label="Performance" />
            </li>
          </ul>
        </nav>
        <nav
          className="nav-section" aria-labelledby="support-heading">
          <h2 className="nav-section__title" id="support-heading">Support</h2>
          <ul className="nav-section__list">
            <li className="nav-section__list-item"></li>
          </ul>
        </nav>
        <nav className="nav-section">
          <h2 className="nav-section__title">Shop</h2>
          <ul className="nav-section__list">
            <li className="nav-section__list-item"></li>
          </ul>
        </nav>
      </header>
    </aside>
  )
}

export default Sidebar
