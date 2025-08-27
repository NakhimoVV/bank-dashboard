import './Header.scss'
import Logo from "@/components/Logo";

const Header = (props) => {
  const {} = props

  return (
    <header className="header container">
      <Logo />
      <a className="header__profile" href="/">Ethan Sutcliffe</a>
    </header>
  )
}

export default Header
