const navItems = ['Home', 'Login'];

function SiteNavigation() {
  return (
    <nav className="site-navigation">
      <ul className="site-navigation-items">
        {
          navItems.map(item => {
            return <li className="site-navigation-item" key={item}>{item}</li>
          })
        }
      </ul>
    </nav>
  )
}

export default SiteNavigation;