import "./Header.scss"
import Logo from "@/components/Logo"
import { Image } from "minista"

const Header = () => {
  return (
    <header className="header container container--header">
      <Logo />
      <div className="header__actions">
        <Image
          className="header__profile-avatar"
          src="/src/assets/images/avatar.png"
        />
        <a className="header__profile" href="/bank-dashboard/">
          Ethan Sutcliffe
        </a>
      </div>
    </header>
  )
}

export default Header
