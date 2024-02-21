import styles from './HomeSearch.module.css'
import { Form, Button, Row, Col } from 'react-bootstrap';

const HomeSearch = () => {
  return (
    <Row className={`${styles.homeSearch} justify-content-center`}>
      <Form.Group as={Col} lg={6}>
        <Form.Control className="mb-3 rounded-pill" type="email" placeholder="Search through all recipes" />
        <Button variant="primary">
          Search
        </Button>
      </Form.Group>
    </Row>
  )
}

export default HomeSearch;