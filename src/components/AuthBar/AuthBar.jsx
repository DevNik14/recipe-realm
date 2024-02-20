import styles from './AuthBar.module.css'
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const AuthBar = () => {
  return (
    <Nav className={`${styles.authNav} auth justify-content-end`}>
      <Nav.Item className={`${styles.loginButton} ${styles.authItem}`}>
        <NavLink to='/auth'>
          <span>Login / Sign Up</span>
        </NavLink>
      </Nav.Item>
      <Nav.Item className={`${styles.authItem}`}>
        <NavLink to='/logout'><span>Profile</span></NavLink>
      </Nav.Item>
      <Nav.Item className={`${styles.authItem}`}>
        <NavLink to='/create-recipe'><span>Create Recipe</span></NavLink>
      </Nav.Item>
      <Nav.Item className={`${styles.authItem}`}>
        <NavLink to='/logout'><span>Logout</span></NavLink>
      </Nav.Item>
    </Nav>
  )
}

export default AuthBar;