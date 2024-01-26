import styles from './Navbar.module.css'

const navItems = ['Home', 'Recipes', 'Blog', 'Login'];

const displayNavLinks = (from, to) => {
  return navItems.slice(from, to).map(item => {
    return <li className="site-navigation-item" key={item}>{item}</li>
  })
}

function SiteNavigation() {
  return (
    <nav className={styles.siteNavigation}>
      <ul className={`site-navigation-items`}>
        <div className="left">
          <li className="site-navigation-item">Recipe Realm</li>
        </div>
        <div className="middle">
          {displayNavLinks(0, navItems.length - 1)}
        </div>
        <div className="right">
          {displayNavLinks(3)}
        </div>
      </ul>
    </nav>
  )
}

export default SiteNavigation;