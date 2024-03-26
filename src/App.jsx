import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Recipes from './components/Recipes/Recipes';
import SiteNavigation from './components/Navbar/Navbar';
import Blog from './components/Blog/Blog';
import Auth from './components/Auth/Auth';
import Recipe from './components/Recipe/Recipe';
import CreateRecipe from './components/CreateRecipe/CreateRecipe';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserProfile from './components/UserProfile/UserProfile';

function App() {
  // const [recipes, setRecipes] = useState([]);
  // useEffect(() => {
  //   fetch('http://localhost:3030/data/recipes')
  //     .then(res => res.json())
  //     .then(data => {
  //       setRecipes(data);
  //     })
  // }, []);

  const recipes = [
    { _id: 1, name: "Recipe Title 1", description: "Some fancy recipe description", likes: 14, img: "../images/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg" },
    { _id: 2, name: "Recipe Title 2", description: "Some fancy recipe description", likes: 14, img: "../images/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg" },
    { _id: 3, name: "Recipe Title 3", description: "Some fancy recipe description", likes: 14, img: "../images/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg" },
    { _id: 4, name: "Recipe Title 4", description: "Some fancy recipe description", likes: 14, img: "../images/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg" }
  ]

  return (
    <>
      <SiteNavigation />
      <Routes>
        <Route path='/' element={<Home recipes={recipes}/>} />
        <Route path='/recipes' element={<Recipes recipes={recipes} />} />
        <Route path='/recipes/:recipeId' element={<Recipe recipes={recipes}/>} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/auth' element={<Auth/>} />
        <Route path='/create-recipe' element={<CreateRecipe />} />
        <Route path='/profile' element={<UserProfile />} />
      </Routes>
    </>
  )
}

export default App
