import { Container, Image } from "react-bootstrap";

const Recipe = ({recipe}) => {
  return (
    <Container>
      <h2>Single recipe</h2>
      <Image src="../images/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg"/>
    </Container>
  )
}

export default Recipe;