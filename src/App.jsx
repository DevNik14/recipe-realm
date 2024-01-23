import SiteNavigation from './components/Navbar/SiteNavigation'
import Hero from './components/Hero/Hero';
import './App.css';
import { Container } from '@mui/material';

function App() {

  return (
    <>
      <Container>
        <SiteNavigation />
        <Hero />
      </Container>
    </>
  )
}

export default App
