import SiteNavigation from './components/Navbar/SiteNavigation'
import Hero from './components/Hero/Hero';
import TrendingRecipes from './components/TrendingRecipes/TrendingRecipes';
import HomeSearch from './components/HomeSearch/HomeSearch';
import './App.css';

function App() {

  return (
    <>
      <SiteNavigation />
      <Hero />
      <HomeSearch />
      <TrendingRecipes />
    </>
  )
}

export default App
