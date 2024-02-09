import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styles from './Menu.module.css';

const Menu = () => {
  const navItems = ['Home', 'Recipes', 'Blog'];
  const transformHomeLink = (linkText) => linkText == 'Home' ? '/' : linkText;

  const displayNavLinks = (from, to) => {
    return navItems.slice(from, to).map(item => {
      return <Nav.Item key={item}>
        <NavLink to={transformHomeLink(item)}>{item}</NavLink>
      </Nav.Item>
    })
  }

  return (
    <Navbar collapseOnSelect expand="lg">
    <Navbar.Brand>Recipe Realm</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
      <Nav>
        {displayNavLinks(0)}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default Menu;