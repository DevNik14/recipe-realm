import Hero from '../Hero/Hero';
import TrendingRecipes from '../TrendingRecipes/TrendingRecipes';
import HomeSearch from '../HomeSearch/HomeSearch';
import Footer from '../Footer/Footer';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <Container>
        <Hero />
        <HomeSearch />
        <TrendingRecipes />
        <Footer />
      </Container>
    </>
  )
}

export default Home;