import styles from './HomeSearch.module.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const HomeSearch = () => {
  return (
    <div className={`${styles.homeSearch}`}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Button variant="primary">
          Search
        </Button>
      </Form>
    </div>
  )
}

export default HomeSearch;