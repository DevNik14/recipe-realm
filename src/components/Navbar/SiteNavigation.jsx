import './Navbar.css'

const SiteNaviagation = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="#">Test Logo</a>
      </div>
      <div className="navbar-right">
        <ul>
          <li><a href="#">Login</a></li>
          <li><a href="#">Sign Up</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default SiteNaviagation;