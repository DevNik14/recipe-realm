import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Recipes from './components/Recipes/Recipes';
import SiteNavigation from './components/Navbar/Navbar';
import Blog from './components/Blog/Blog';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <SiteNavigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/auth' element={<h2>Auth</h2>} />
      </Routes>
    </>
  )
}

export default App
