import './Header.scss'

const Header = (props) => {
  const {} = props

  return (
    <header className="header container">
      <a className='header__logo' href="/">HBank</a>
      <a className="header__profile" href="/">Ethan Sutcliffe</a>
    </header>
  )
}

export default Header
