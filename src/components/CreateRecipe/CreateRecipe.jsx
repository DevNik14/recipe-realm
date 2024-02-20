import { Container, Form, Row, InputGroup, Col, Button } from "react-bootstrap";

const CreateRecipe = () => {
  return (
    <Container>
      <header className="mb-3 mt-3">
        <h1>Create New Recipe</h1>
      </header>
      <Form>
        {/* Recipe Information Section */}
        <Row>
          <Form.Group className="mb-3" controlId="recipeTitle" as={Col} xs={12} lg={4}>
            <Form.Label>Recipe Title</Form.Label>
            <Form.Control placeholder="Recipe Title" />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-3" controlId="recipeImage" as={Col} xs={12} lg={4}>
            <Form.Label>Recipe Image</Form.Label>
            <Form.Control placeholder="Paste your recipe url image here" />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} xs={12} lg={4}>
            <Form.Label htmlFor="recipeDescription">Recipe Description</Form.Label>
            <Form.Control id="recipeDescription" as="textarea" aria-label="Recipe Description" />
          </Form.Group>
        </Row>
        {/* Ingredients Section */}
        <Row>
          <Form.Group className="mb-3" as={Col} xs={12} lg={4}>
            <h2>Ingredients</h2>
            <ul id="ingredientList">
              {/* Ingredient items will be dynamically added here using JavaScript */}
            </ul>
            <Button>
              Add Ingredient
            </Button>
          </Form.Group>
        </Row>
        {/* Instructions Section */}
        <Row>
          <Form.Group className="mb-3" as={Col} xs={12} lg={4}>
            <h2>Instructions</h2>
            <ol id="instructionList">
              {/* Instruction items will be dynamically added here using JavaScript */}
            </ol>
            <Button>Add Instruction</Button>
          </Form.Group >
        </Row>

        {/* Submit Button */}
        <Form.Group className="mb-3" as={Col} xs={12} lg={4}>
          <Button>Create Recipe</Button>
        </Form.Group>
      </Form>
    </Container>
  )
}
export default CreateRecipe;