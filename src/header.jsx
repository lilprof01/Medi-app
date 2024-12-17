import logo from './assets/logo.png'

function Header() {
  return (
    <section className="header">
        <div><img className="logo" src={logo} alt="logo"/></div>
        <div>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </section>
  )
}

export default Header;