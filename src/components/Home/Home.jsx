import Hero from '../Hero/Hero';
import TrendingRecipes from '../TrendingRecipes/TrendingRecipes';
import HomeSearch from '../HomeSearch/HomeSearch';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <HomeSearch />
      <TrendingRecipes />
      <Footer />
    </>
  )
}

export default Home;