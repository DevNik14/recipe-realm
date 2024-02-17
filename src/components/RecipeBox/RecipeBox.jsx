import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RecipeBox = ({ _id, name, description, likes, img }) => {
  return (
    <Link to={`recipes/${_id}`}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
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