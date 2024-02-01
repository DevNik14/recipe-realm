import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css'

function SiteNavigation() {
  const [toggleMobileNavigation, setToggleMobileNavigation] = useState(false);
  const navItems = ['Home', 'Recipes', 'Blog'];

  const transformHomeLink = (linkText) => linkText == 'Home' ? '/' : linkText;

  const displayNavLinks = (from, to) => {
    return navItems.slice(from, to).map(item => {
      return <li key={item}><NavLink to={transformHomeLink(item)} className={styles.siteNavigationItem}>{item}</NavLink></li>
    })
  }

  const toggleMobileNavigationHandler = () => setToggleMobileNavigation(oldState => !oldState);

  return (
    <nav className={styles.siteNavigation}>
      <div className="auth">
        <ul className={`${styles.authNav}`}>
          <li className={`${styles.loginButton} ${styles.authItem}`}><NavLink>Login</NavLink></li>
          <li className={`${styles.authItem}`}><NavLink>Sign Up</NavLink></li>
        </ul>
      </div>
      <ul className={`${styles.siteNavigationItems}`}>
        <div className={`${styles.left} logo`}>
          <li className={styles.siteNavigationItem}>Recipe Realm</li>
        </div>
        <div className={styles.right}>
          {displayNavLinks(0, navItems.length)}
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