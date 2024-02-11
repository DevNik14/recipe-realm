import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Recipes from './components/Recipes/Recipes';
import SiteNavigation from './components/Navbar/Navbar';
import Blog from './components/Blog/Blog';
import Auth from './components/Auth/Auth';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Recipe from './components/Recipe/Recipe';

function App() {

  return (
    <>
      <SiteNavigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/recipes/:recipeId' element={<Recipe />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/auth' element={<Auth/>} />
      </Routes>
    </>
  )
}

export default App
