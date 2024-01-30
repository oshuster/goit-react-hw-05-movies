import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import style from './searchBar.module.css';

const Searchbar = ({ setSearchKey }) => {
  const handleSubmit = e => {
    e.preventDefault();
    setSearchKey({ query: e.target.query.value });
  };
  return (
    <Form className={`d-flex ${style.container}`} onSubmit={handleSubmit}>
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        name="query"
      />
      <Button type="submit" variant="outline-success">
        Search
      </Button>
    </Form>
  );
};

export default Searchbar;
