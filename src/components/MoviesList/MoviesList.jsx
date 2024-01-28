import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const MoviesList = ({ topRatePosts }) => {
  return topRatePosts.map(({ title, poster_path, id, name }) => (
    <li key={id}>
      <Link to={`/movies/${id}`}>
        <Card style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/w400${poster_path}`}
          />
          <Card.Body>
            <Card.Title>{title ? title : name}</Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </li>
  ));
};