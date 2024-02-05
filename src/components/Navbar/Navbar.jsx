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
      return <Nav.Item as="li" key={item}><NavLink to={transformHomeLink(item)} className={styles.siteNavigationItem}>{item}</NavLink></Nav.Item>
    })
  }

  const toggleMobileNavigationHandler = () => setToggleMobileNavigation(oldState => !oldState);

  return (
    <header className={styles.siteNavigation}>
      <Container>
        <AuthBar />
        <Nav className={`${styles.siteNavigationItems}`}>
          <Navbar.Brand className={`${styles.logo}`}>Recipe Realm</Navbar.Brand>
          <Navbar className={`${styles.menu} justify-content-end`}>
            {displayNavLinks(0, navItems.length)}
          </Navbar>
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
        </Nav>
      </Container>
    </header>
  )
}

export default SiteNavigation;