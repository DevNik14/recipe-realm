import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AuthBar from '../AuthBar/AuthBar';
import { Container, Nav, Navbar } from 'react-bootstrap';
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
      <Container>
        <AuthBar />
        <Navbar className={`${styles.siteNavigationItems}`}>
          <Navbar.Brand className={`${styles.logo}`}>Recipe Realm</Navbar.Brand>
          <div className={styles.menu}>
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
        </Navbar>
      </Container>
    </nav>
  )
}

export default SiteNavigation;