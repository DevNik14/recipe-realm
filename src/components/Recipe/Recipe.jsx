import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import { Container, Image } from "react-bootstrap";
import { useEffect, useState } from "react";

const Recipe = ({ recipes }) => {
  const [recipe, setRecipe] = useState({})
  const { recipeId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3030/data/recipes/${recipeId}`)
      .then(res => res.json())
      .then(data => setRecipe(data))
  }, [])

  return (
    <Container>
      <header>
        <h2>{recipe.name}</h2>
        <Image src="../images/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg" />
      </header>

      <section className="recipeInformation">
        <h2>Recipe Information</h2>
        <p>Description: Your recipe description goes here.</p>
        <p>Author: Author Name</p>
      </section>

      <section className="instructions">
        <h2>Instructions</h2>
        {
          Object.keys(recipe).length > 0 &&
          <ol>
            {recipe.steps.map((step, i) => <li key={i}>{step}</li>)}
          </ol>
        }
      </section>

      <section className="ingredients">
        <h2>Ingredients</h2>
        {Object.keys(recipe).length > 0 &&
          <ul>
            {recipe.ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
          </ul>
        }
      </section>
      <Footer />
    </Container>
  )
}

export default Recipe;