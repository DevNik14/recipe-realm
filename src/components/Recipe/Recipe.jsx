import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Image, Row, Col, ListGroup, Button } from "react-bootstrap";
import Footer from "../Footer/Footer";
import StarsContainer from "../StarsContainer/StarsContainer";
import styles from './Recipe.module.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

const Recipe = ({recipes}) => {
  const [recipe, setRecipe] = useState("");
  const { recipeId } = useParams();

  // useEffect(() => {
  //   fetch(`http://localhost:3030/data/recipes/${recipeId}`)
  //     .then(res => res.json())
  //     .then(data => setRecipe(data))
  // }, [])
  useEffect(() => {
    const foundRecipe = recipes.find(recipe => recipe._id == recipeId);
    setRecipe(foundRecipe);
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
                <ListGroup.Item className="text-center">
                  <div>16</div>
                  <div>Ingredients</div>
                </ListGroup.Item>
                <ListGroup.Item className="text-center">
                  <div>60</div>
                  <div>Minutes</div>
                </ListGroup.Item>
                <ListGroup.Item className="text-center">
                  <div>650</div>
                  <div>Calories</div>
                </ListGroup.Item>
              </ListGroup>
              <div className={`${styles.addTo} mt-2`}>
                <Button className="btn btn-success btn-sm">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                      <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z" />
                      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg>
                  </span>
                  <span>Add to shopping list</span>
                </Button>
              </div>
            </Col>
            <Col sm={12} lg={6}>
              <Image src="../images/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg" className={`${styles.recipeDetailsImage} rounded-4`} />
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

        {/* <section className="ingredients">
          <h2>Ingredients</h2>
          <ul>
            {recipe.ingredients.map(ingredient => <li key={ingredient}><i className="bi bi-plus"></i> {ingredient}</li>)}
          </ul>
        </section> */}

        <hr className="my-5" />

        {/* <section className="instructions">
          <h2>Instructions</h2>
          <ol>
            {recipe.steps.map((step, i) => <li key={i}>{step}</li>)}
          </ol>
        </section> */}
        <Footer />
      </>}
    </Container>
  )
}

export default Recipe;