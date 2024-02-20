import styles from './HomeSearch.module.css'
import { Form, Button, Row, Col } from 'react-bootstrap';

const HomeSearch = () => {
  return (
    <section className={`${styles.homeSearch}`}>
      <Form.Group className="mb-3" as={Col} lg={6}>
        <Form.Control type="email" placeholder="Search through all recipes" />
        <Button variant="primary">
          Search
        </Button>
      </Form.Group>
    </section>
  )
}

export default HomeSearch;