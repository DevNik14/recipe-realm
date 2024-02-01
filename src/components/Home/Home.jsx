// import SiteNavigation from '../Navbar/SiteNavigation';
import Hero from '../Hero/Hero';
import TrendingRecipes from '../TrendingRecipes/TrendingRecipes';
import HomeSearch from '../HomeSearch/HomeSearch';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <>
      {/* <SiteNavigation /> */}
      <Hero />
      <HomeSearch />
      <TrendingRecipes />
      <Footer />
    </>
  )
}

export default Home;