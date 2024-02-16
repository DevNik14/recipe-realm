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
  const recipes = [
    { id: 1, title: "Recipe Title 1", description: "Some fancy recipe description", likes: 14, img: "../images/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg" },
    { id: 2, title: "Recipe Title 2", description: "Some fancy recipe description", likes: 14, img: "../images/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg" },
    { id: 3, title: "Recipe Title 3", description: "Some fancy recipe description", likes: 14, img: "../images/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg" },
    { id: 4, title: "Recipe Title 4", description: "Some fancy recipe description", likes: 14, img: "../images/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg" }
  ]

  return (
    <>
      <SiteNavigation />
      <Routes>
        <Route path='/' element={<Home recipes={recipes}/>} />
        <Route path='/recipes' element={<Recipes recipes={recipes}/>} />
        <Route path='/recipes/:recipeId' element={<Recipe />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/auth' element={<Auth/>} />
      </Routes>
    </>
  )
}

export default App
