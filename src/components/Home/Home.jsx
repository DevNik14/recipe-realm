import Hero from '../Hero/Hero';
import TrendingRecipes from '../TrendingRecipes/TrendingRecipes';
import HomeSearch from '../HomeSearch/HomeSearch';
import Footer from '../Footer/Footer';
import { Container } from 'react-bootstrap';

const Home = () => {
  const recipes = [
    { id: 1, title: "Recipe Title 1", description: "Some fancy recipe description", likes: 14, img: "../images/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg" },
    { id: 2, title: "Recipe Title 2", description: "Some fancy recipe description", likes: 14, img: "../images/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg" },
    { id: 3, title: "Recipe Title 3", description: "Some fancy recipe description", likes: 14, img: "../images/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg" },
    { id: 4, title: "Recipe Title 4", description: "Some fancy recipe description", likes: 14, img: "../images/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg" }
  ]

  return (
    <>
      <Container>
        <Hero />
        <HomeSearch />
        <TrendingRecipes recipes={recipes}/>
        <Footer />
      </Container>
    </>
  )
}

export default Home;