import Card from 'react-bootstrap/Card';

export const MoviesList = ({ topRatePosts }) => {
  return topRatePosts.map(({ title, poster_path, id, name }) => (
    <li key={id}>
      <Card style={{ width: '18rem' }}>
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w400${poster_path}`}
          className={styles.img}
        />
        <Card.Body>
          <Card.Title>{title ? title : name}</Card.Title>
        </Card.Body>
      </Card>
    </li>
  ));
};
