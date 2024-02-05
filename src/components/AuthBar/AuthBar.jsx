import styles from './AuthBar.module.css'
import { Nav } from 'react-bootstrap';

const AuthBar = () => {
  return (
    <Nav className={`${styles.authNav} auth justify-content-end`}>
      <Nav.Item className={`${styles.loginButton} ${styles.authItem}`}><span>Login</span></Nav.Item>
      <Nav.Item className={`${styles.authItem}`}><span>Sign Up</span></Nav.Item>
    </Nav>
  )
}

export default AuthBar;