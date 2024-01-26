import { useState } from 'react';
import styles from './Navbar.module.css'

function SiteNavigation() {
  const [toggleMobileNavigation, setToggleMobileNavigation] = useState(false);
  const navItems = ['Home', 'Recipes', 'Blog', 'Login'];

  const displayNavLinks = (from, to) => {
    return navItems.slice(from, to).map(item => {
      return <li className={styles.siteNavigationItem} key={item}>{item}</li>
    })
  }

  const toggleMobileNavigationHandler = () => setToggleMobileNavigation(oldState => !oldState);

  return (
    <nav className={styles.siteNavigation}>
      <ul className={`${styles.siteNavigationItems}`}>
        <div className={styles.left}>
          <li className={styles.siteNavigationItem}>Recipe Realm</li>
        </div>
        <div className={styles.middle}>
          {displayNavLinks(0, navItems.length - 1)}
        </div>
        <div className={styles.right}>
          {displayNavLinks(3)}
        </div>
        <div className={`${styles.mobileMenuIcon} ${toggleMobileNavigation && styles.open}`} onClick={toggleMobileNavigationHandler}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`${styles.mobileNavigation} ${toggleMobileNavigation && styles.open}`}>
          <aside>
            <ul className={styles.mobileNavigationItems}>
              {toggleMobileNavigation && displayNavLinks(0)}
            </ul>
          </aside>
        </div>
      </ul>
    </nav>
  )
}

export default SiteNavigation;