import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Image, Row, Col, ListGroup } from "react-bootstrap";
import Footer from "../Footer/Footer";
import StarsContainer from "../StarsContainer/StarsContainer";
import styles from './Recipe.module.css'

const Recipe = () => {
  const [recipe, setRecipe] = useState("");
  const { recipeId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3030/data/recipes/${recipeId}`)
      .then(res => res.json())
      .then(data => setRecipe(data))
  }, [])

  return (
    <Container>
      {recipe && <>
        <header className="mt-5">
          <Row>
            <Col className="recipeDetails" sm={12} lg={6}>
              <h2>{recipe.name}</h2>
              <StarsContainer />
              <ListGroup horizontal>
                <ListGroup.Item>Ingredients</ListGroup.Item>
                <ListGroup.Item>Minutes</ListGroup.Item>
                <ListGroup.Item>Calories</ListGroup.Item>
              </ListGroup>
              
            </Col>
            <Col sm={12} lg={6}>
              <Image src="../images/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg" className={`${styles.recipeDetailsImage} rounded-4`}/>
            </Col>
          </Row>
        </header>

        <hr className="my-5" />

        <section className="recipeInformation">
          <h2>Recipe Information</h2>
          <p>Description: Your recipe description goes here.</p>
          <p>Author: Author Name</p>
        </section>

        <hr className="my-5" />

        <section className="ingredients">
          <h2>Ingredients</h2>
          <ul>
            {recipe.ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
          </ul>
        </section>

        <hr className="my-5" />

        <section className="instructions">
          <h2>Instructions</h2>
          <ol>
            {recipe.steps.map((step, i) => <li key={i}>{step}</li>)}
          </ol>
        </section>
        <Footer />
      </>}
    </Container>
  )
}

export default Recipe;