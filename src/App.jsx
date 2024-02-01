import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import './App.css';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipes' element={<h2>Recipes</h2>} />
        <Route path='/blog' element={<h2>Blog</h2>} />
      </Routes>
      <Home />
    </>
  )
}

export default App
