import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RecipeBox = ({ id, title, description, likes, img }) => {
  return (
    <Link to={`recipes/${id}`}>
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
    </Link>
  )
}

export default RecipeBox;