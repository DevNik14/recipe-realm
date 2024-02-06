import { Card } from 'react-bootstrap';

const RecipeBox = ({ title, description, likes, img }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Text>
          likes: {likes}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default RecipeBox;