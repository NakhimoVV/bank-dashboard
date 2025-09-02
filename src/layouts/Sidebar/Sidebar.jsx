import './Sidebar.scss'
import Button from "@/components/Button";
import NavSection from "@/components/NavSection/index.js";

const analytics = [
  {
    label: 'Performance',
    href: '/',
    iconName: 'show chart-1'
  },
  {
    label: 'Hotjar',
    href: '/',
    iconName: 'Archery',
    badge: 'New'
  }
]
const support = [
  {
    label: 'Tickets',
    href: '/',
    iconName: 'ticket',
    badge: 18
  },
  {
    label: 'Agents',
    href: '/',
    iconName: 'account'
  },
  {
    label: 'Customers',
    href: '/',
    iconName: 'users'
  },
]
const shop = [
  {
    label: 'Products',
    href: '/',
    iconName: 'shop'
  },
  {
    label: 'Orders',
    href: '/',
    iconName: 'basket'
  },
  {
    label: 'Reports',
    href: '/',
    iconName: 'chat info'
  },
]

const Sidebar = (props) => {
  const {} = props

  return (
    <aside className="sidebar container">
      <header>
        <Button
          className="sidebar__button"
          label='Dashboard'
          href='/'
          iconName='House'
          hasFillIcon
        />
      </header>
      <NavSection list={analytics} title='analytics' />
      <NavSection list={support} title='support' />
      <NavSection list={shop} title='shop' />
      <footer className="sidebar__footer">
        <Button
          className="sidebar__button"
          label='Settings'
          href='/'
          iconName='Setting'
          hasFillIcon
        />
        <Button
          className="sidebar__button"
          label='Logout'
          href='/'
          iconName='Logout'
          hasFillIcon
        />
      </footer>
    </aside>
  )
}

export default Sidebar
