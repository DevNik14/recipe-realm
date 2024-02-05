import { NavLink } from 'react-router-dom';
import styles from './AuthBar.module.css'

const AuthBar = () => {
  return (
    <div className="auth">
      <ul className={`${styles.authNav}`}>
        <li className={`${styles.loginButton} ${styles.authItem}`}><NavLink>Login</NavLink></li>
        <li className={`${styles.authItem}`}><NavLink>Sign Up</NavLink></li>
      </ul>
    </div>
  )
}

export default AuthBar;