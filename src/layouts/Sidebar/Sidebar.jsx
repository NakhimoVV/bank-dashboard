import "./Sidebar.scss"
import Button from "@/components/Button"
import NavSection from "@/components/NavSection"

const analytics = [
  {
    label: "Performance",
    href: "/bank-dashboard/",
    iconName: "show chart-1",
  },
  {
    label: "Hotjar",
    href: "/bank-dashboard/",
    iconName: "Archery",
    badge: "New",
  },
]
const support = [
  {
    label: "Tickets",
    href: "/bank-dashboard/",
    iconName: "ticket",
    badge: 18,
  },
  {
    label: "Agents",
    href: "/bank-dashboard/",
    iconName: "account",
  },
  {
    label: "Customers",
    href: "/bank-dashboard/",
    iconName: "users",
  },
]
const shop = [
  {
    label: "Products",
    href: "/bank-dashboard/",
    iconName: "shop",
  },
  {
    label: "Orders",
    href: "/bank-dashboard/",
    iconName: "basket",
  },
  {
    label: "Reports",
    href: "/bank-dashboard/",
    iconName: "chat info",
  },
]

const Sidebar = () => {
  return (
    <aside className="sidebar container">
      <header>
        <Button
          className="sidebar__button"
          label="Dashboard"
          href="/bank-dashboard/"
          iconName="House"
          hasFillIcon
        />
      </header>
      <div className="sidebar__body">
        <NavSection list={analytics} title="analytics" />
        <NavSection list={support} title="support" />
        <NavSection list={shop} title="shop" />
      </div>
      <footer className="sidebar__footer">
        <Button
          className="sidebar__button"
          label="Settings"
          href="/bank-dashboard/"
          iconName="Setting"
          hasFillIcon
        />
        <Button
          className="sidebar__button"
          label="Logout"
          href="/bank-dashboard/"
          iconName="Logout"
          hasFillIcon
        />
      </footer>
    </aside>
  )
}

export default Sidebar
