import {Routes, Route} from 'react-router-dom';
import SiteNavigation from './components/Navbar/SiteNavigation';
import Hero from './components/Hero/Hero';
import TrendingRecipes from './components/TrendingRecipes/TrendingRecipes';
import HomeSearch from './components/HomeSearch/HomeSearch';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {

  return (
    <>
    <Routes>
      <Route path='/recipes' element={<h2>Recipes</h2>}/>
      <Route path='/blog' element={<h2>Blog</h2>}/>
    </Routes>
      <SiteNavigation />
      <Hero />
      <HomeSearch />
      <TrendingRecipes />
      <Footer />
    </>
  )
}

export default App
