import styles from './Navbar.module.css'

const navItems = ['Home', 'Recipes', 'Blog', 'Login'];

const displayNavLinks = (from, to) => {
  return navItems.slice(from, to).map(item => {
    return <li className={styles.siteNavigationItem} key={item}>{item}</li>
  })
}

function SiteNavigation() {
  return (
    <nav className={styles.siteNavigation}>
      <ul className={styles.siteNavigationItems}>
        <div className="left">
          <li className={styles.siteNavigationItem}>Recipe Realm</li>
        </div>
        <div className={styles.middle}>
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