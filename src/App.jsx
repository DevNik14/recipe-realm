import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Recipes from './components/Recipes/Recipes';
import './App.css';
import SiteNavigation from './components/Navbar/SiteNavigation';

function App() {

  return (
    <>
    <SiteNavigation/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipes' element={<Recipes/>} />
        <Route path='/blog' element={<h2>Blog</h2>} />
      </Routes>
    </>
  )
}

export default App
