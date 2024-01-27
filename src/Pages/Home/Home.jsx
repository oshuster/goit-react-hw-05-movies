import { getTopRate } from 'components/api/movieService';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Home = () => {
  const [topRatePosts, setTopRatePosts] = useState([]);
  const topRateData = async () => {
    const { data } = await getTopRate();
    setTopRatePosts([...data.results]);
  };
  topRateData();
  const elements = topRatePosts.map(({ title, poster_path, id }) => (
    <li key={id}>
      <Card style={{ width: '18rem' }}>
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Card>
    </li>
  ));

  return <ul>{elements}</ul>;
};

export default Home;
