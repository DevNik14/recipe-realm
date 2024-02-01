import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Recipes from './components/Recipes/Recipes';
import SiteNavigation from './components/Navbar/SiteNavigation';
import Blog from './components/Blog/Blog';
import './App.css';

function App() {

  return (
    <>
    <SiteNavigation/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipes' element={<Recipes/>} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
    </>
  )
}

export default App
