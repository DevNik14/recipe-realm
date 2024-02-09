import AuthBar from '../AuthBar/AuthBar';
import { Container } from 'react-bootstrap';
import styles from './Navbar.module.css'
import Menu from '../Menu/Menu'; 

function SiteNavigation() {
  return (
    <header className={styles.siteNavigation}>
      <Container>
        <AuthBar />
        <Menu />
      </Container>
    </header>
  )
}

export default SiteNavigation;