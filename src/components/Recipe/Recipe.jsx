import Footer from "../Footer/Footer";
import { Container, Image } from "react-bootstrap";

const Recipe = ({ recipe }) => {
  return (
    <Container>
      <header>
        <h2>Single recipe</h2>
        <Image src="../images/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg" />
      </header>

      <section className="recipeInformation">
        <h2>Recipe Information</h2>
        <p>Description: Your recipe description goes here.</p>
        <p>Author: Author Name</p>
      </section>

      <section className="instructions">
        <h2>Instructions</h2>
        <ol>
          <li>Step 1: Your step-by-step instruction goes here.</li>
          <li>Step 2: Another step in the process.</li>
        </ol>
      </section>

      <section className="ingredients">
        <h2>Ingredients</h2>
        <ul>
          <li>Ingredient 1: Quantity</li>
          <li>Ingredient 2: Quantity</li>
        </ul>
      </section>
      <Footer />
    </Container>
  )
}

export default Recipe;