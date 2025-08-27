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
    iconName: 'Archery'
  }
]
const support = [
  {
    label: 'Tickets',
    href: '/',
    iconName: 'ticket'
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
          label='Dashboard'
          href='/'
          iconName='House'
          hasFillIcon
        />
      </header>
      <NavSection list={analytics} title='analytics' />
      <NavSection list={support} title='support' />
      <NavSection list={shop} title='shop' />
    </aside>
  )
}

export default Sidebar
